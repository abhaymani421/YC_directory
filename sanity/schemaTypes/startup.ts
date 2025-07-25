import { UserIcon } from "lucide-react";
import { title } from "process";
import { defineField, defineType } from "sanity";

export const startup = defineType({
    name:"startup",
    title:'Startup',
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
            name:'author',
            type:'reference',
            to :{type:'author'}
        }),
        defineField({
            name:'views',
            type:'number',
        }),
        defineField({
            name:'description',
            type:'text',
        }),
        defineField({
            name:'category',
            type:'string',
            validation:(Rule)=>Rule.min(1).max(20).required().error('please enter a category'), // the string must be atleast 1 character and at max 20 characters, and field cannot be empty.
        }),
         defineField({
            name:'image',
            type:'url',
            validation:(Rule)=>Rule.required(),
        }),
         defineField({
            name:'pitch',
            type:'markdown',
        }),
    ],
  
});