import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/query";
import React from "react";
import { client } from "@/sanity/lib/client";
import StartupCard from "./StartupCard";
import { StartupTypeCard } from "./StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
  const startups: StartupTypeCard[] = await client.fetch(
    STARTUPS_BY_AUTHOR_QUERY,
    { id }
  );

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};

export default UserStartups;
