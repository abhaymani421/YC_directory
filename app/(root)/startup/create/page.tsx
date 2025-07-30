import StartupForm from "@/components/StartupForm";
import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
const Page = () => {
  const session = async () => {
    const session = await auth();
    if (!session) redirect("/"); // they can visite this page only when they are logged in and have a session thus if they do not have it we will direct to the home page
  };
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>
      <StartupForm />
    </>
  );
};

export default Page;
