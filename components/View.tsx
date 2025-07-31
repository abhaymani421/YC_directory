import React from "react";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";
const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client // the api token helps recieved from sanity patches views or basically updates them
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });
  after(async () => {
    await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit();
  });
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

//VIEWS UPDATE USE SERVER SIDE RENDERING FOR INSTANT UPDATES
