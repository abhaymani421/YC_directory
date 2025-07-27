import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[
  _type == "startup" &&
  defined(slug.current) &&
  (
    !defined($search) ||
    title match $search ||
    category match $search ||
    author->name match $search
  )
] | order(_createdAt desc){
  _id, 
  title, 
  slug, 
  _createdAt, 
  author->{
    _id,
    name,
    slug,
    image,
    bio 
  }, 
  views, 
  description, 
  category, 
  image
}`);

export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type=="startup" && _id == $id][0]{
  _id, 
  title, 
  slug, 
  _createdAt, 
  author->{
   _id,name, username, image, bio 
 }, 
  views, 
  description, 
  category, 
  image,
  pitch
}`)
// 🔍 What This Query Does (Plain English):
// Fetch all documents of type startup, but only those that have a defined slug. Then sort them by creation time (newest first), and for each startup, return a detailed set of fields — including author info by following the reference.

// 🧩 Explanation Line-by-Line:
// *[_type=="startup" && defined(slug.current)]
// * → Fetch all documents.

// [_type=="startup"] → Filter only documents where _type is "startup".

// defined(slug.current) → Only include documents that have a slug.current value set (i.e., published or properly set up for routing).

// | order(_createdAt desc)
// This orders the filtered documents by _createdAt in descending order → newest startup first.

// { ... } – Fields to Return:
// You're telling GROQ: “for each of those startup documents, give me…”

// _id → Document ID.

// title → Startup title.

// slug → Slug field (likely used for dynamic routing).

// _createdAt → Timestamp when the startup was created.

// author-> → This dereferences the author field (which is a reference to another document) and fetches its subfields:

// _id, name, slug, image, bio

// views → Likely a custom field tracking number of views.

// description → Text description of the startup.

// category → Category/tag for the startup.

// image → Image associated with the startup.

//Result Structure--->

// [
//   {
//     "_id": "abc123",
//     "title": "Cool AI Startup",
//     "slug": { "current": "cool-ai-startup" },
//     "_createdAt": "2025-07-20T14:00:00Z",
//     "author": {
//       "_id": "auth123",
//       "name": "Jane Doe",
//       "slug": { "current": "jane-doe" },
//       "image": "https://cdn.sanity.io/...",
//       "bio": "Builder and product thinker"
//     },
//     "views": 200,
//     "description": "An AI company doing cool things.",
//     "category": "AI",
//     "image": "https://cdn.sanity.io/..."
//   },
//   ...
// ]