import { UserIcon } from "lucide-react";
import { title } from "process";
import { defineField, defineType } from "sanity";

export const playlist = defineType({
    name:"playlist",
    title:'Playlist',
    type:'document',
    fields:[    //the fields each startup will have, which is gonna be an array of fields
        //we get all of these fields from Github O-Auth
        defineField({
            name:'title',
            type:'string',
        }),
        defineField({
            name:'slug',
            type:'slug',
            options:{
                source:'title'
            }
        }),
        
        defineField({
            name:'select',
            type:'array',
            of : [{type:'reference',to : [{type : 'startup'}]}]
        }),
    ],
  
});