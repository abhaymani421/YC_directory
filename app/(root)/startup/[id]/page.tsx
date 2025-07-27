//we can render the the detials page on url with /id.
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";
import React from "react";
import { notFound } from "next/navigation";
//we are using the PPR stratergy here -->
export const experimental_ppr = true;
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  if (!post) return notFound();
  return (
    <>
      <h1 className="text-3xl">{post.title}</h1>
    </>
  );
};

export default page;
