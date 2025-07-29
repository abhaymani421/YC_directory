import React from "react";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });
  //TODO Update the numer of views when someone sees the post
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views : {totalViews}</span>{" "}
        {/*we got access to total views from sanity and dynamically rendered it here */}
      </p>
    </div>
  );
};

export default View;
