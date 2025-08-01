import { type SchemaTypeDefinition } from 'sanity';
import { author } from './author'
import { startup } from './startup';
import { playlist } from './playlist';
//her we will create sanity schema types and export them, so our application knows what kind of fields will each startup ot each document will have
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,startup, playlist], // this schema type we used from author.ts
}
