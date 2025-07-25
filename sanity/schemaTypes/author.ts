import { UserIcon } from "lucide-react";
import { title } from "process";
import { defineField, defineType } from "sanity";

export const author = defineType({
    name:"author",
    title:'Author',
    type:'document',
    icon:UserIcon,
    fields:[    //the fields each author will have, which is gonna be an array of fields
        //we get all of these fields from Github O-Auth
        defineField({
            name:'id',
            type:'number',
        }),
        defineField({
            name:'name',
            type:'string',
        }),
        defineField({
            name:'username',
            type:'string',
        }),
        defineField({
            name:'email',
            type:'string',
        }),
        defineField({
            name:'image',
            type:'url',
        }),
        defineField({
            name:'bio',
            type:'text',
        }),
    ],
    preview:{  // this allows us to select those authors by name and preview them
        select:{
            title:'name',
        },
    },
});