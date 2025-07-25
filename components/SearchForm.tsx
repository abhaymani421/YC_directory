import React from "react";
import Form from "next/form";
import { Footprints } from "lucide-react";
import { Search } from "lucide-react"; //comes from shadcn
import SearchFormReset from "./SearchFormReset";
//robust server side rendered Form
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {/*for impementing the cross button , meaning a button which resets search after we have searched something*/}
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
// 🔁 Workflow of Your SearchForm (with next/form)
// 1. You visit the Home page
// URL: http://localhost:3000/

// Server Component loads: HomePage.tsx

// It reads:

// const query = searchParams.get("query") || "";
// Passes query as prop to <SearchForm query={query} />

// 2. SearchForm renders
// Input field gets defaultValue={query}
// → So if query is "startup", the input shows "startup".

// 3. User types in the input and clicks Submit
// <Form action="/" method="GET"> (default method)

// The browser updates the URL to:
// /?query=userSearchText

// ✅ No client-side JavaScript needed!

// ✨ Because of scroll={false}, it updates without full scroll reset.

// 4. Next.js Server reloads the Home Page
// Home page is a Server Component

// It sees the new URL: /?query=userSearchText

// It fetches searchParams.get("query") again

// Passes that down to the <SearchForm /> and possibly to your database fetch logic

// 5. Input is filled with new query
// Because defaultValue={query}, the input field now reflects the latest URL query.

// 🔄 So in simple terms:
// Step	Action	Result
// 🧍 User	Types something & submits	Form triggers URL change (GET request)
// 🌐 Browser	Loads / with new ?query=text	Triggers fresh Server Component rendering
// 🖥️ Server	Reads searchParams.get("query")	Supplies to <SearchForm /> & DB logic
// 🧠 Form	Input gets defaultValue={query}	Looks like it's "remembered"

// ✅ Advantages of This Workflow
// No useState needed

// Works out of the box with server rendering

// Search is shareable via URL

// Works even with JS disabled

// You get clean separation of logic
