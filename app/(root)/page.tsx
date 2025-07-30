import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import { title } from "process";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/query";
import { replace } from "sanity/migrate";
import { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
// the home page is server side rendered
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const session = await auth();
  console.log(session?.id);
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params }); // this ensure to revalidate the page when ever new changes are made
  console.log(JSON.stringify(posts, null, 2));

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup,
          <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          {/*exclamation mark is used to overwrite any previous style applied*/}
          Submit Ideas, Vote on Pitches, and Get noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `search results for "${query}"` : "All Startups"}
          {/* so basically if query exist then it shows search result for that query as the text, other wise it shows "All StartUps" */}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
        {/* card_grid applies a 3 column grid on medium devices and 2 column grid on small devices*/}
      </section>
      <SanityLive />
    </>
  );
}
