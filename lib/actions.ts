"use server" ; 
import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify"
import { writeClient } from "@/sanity/lib/write-client";
//we are getting the form data here-->
//then we extract the session because we need to know who is the author of the startup
export const createPitch = async (state : any,form : FormData,pitch : string)=>{
    const session = await auth() ; 

    if(!session) return parseServerActionResponse({error : 'Not signed in',status : "ERROR"}) ;// This is when the user is not authenticated
    // now we extract all the values from the form
    const { title, description, category, link } = Object.fromEntries(
  Array.from(form).filter(([key]) => key !== "pitch")
    );
    const slug = slugify(title as string, {lower : true,strict : true}) ; // we create a slug 
    try{
        const startup = {
            title,
            description,
            category,
            image : link,
            slug : {
                _type : slug,
                current : slug,
            },
            author : {
                _type : 'refrence',
                _ref : session?.id,
            },
        };
        const result = await writeClient.create({_type : "startup",...startup}) ;
        return parseServerActionResponse({
            ...result,
            error : '',
            status : 'SUCCESS',
        });
    }catch(error){
        console.log(error) ;
        return parseServerActionResponse({error : JSON.stringify(error),
            status : 'ERROR',
        }) ;
    }

};