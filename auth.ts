import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/query"
import { client } from "./sanity/lib/client"
import { writeClient } from "./sanity/lib/write-client"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks :{
    async signIn({user : {name, email,image},profile : {id, login,bio}}){
      const existingUser = await client.withConfig({useCdn : false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY,{id,});
      if(!existingUser){
        await writeClient.create({
          _type:'author',
          id,
          name,
          username:login,
          email ,
          image,
          bio,
        })
      }
      return true ; 
    },
    async jwt({token,account,profile}){ // this allows us to connect the specific github use with a sanity author that can then create a startup
      if(account && profile){
        const user = await client.withConfig({useCdn : false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY,{id : profile?.id,}) ;
        token.id = user?._id ; 
      }
      return token ;
    },
    async session({session,token}){
      Object.assign(session,{id : token.id}) ;
      return session
    }
    
  },
});

// after the succesful sign in we need to create an author id from sanity to use it for our profile or when creating a new startup