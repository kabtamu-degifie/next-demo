"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the Search term"
        onChange={(e) => setSearch(e.target.value)}
        className="p-1 mr-1"
      />
      <button
        type="submit"
        className="p-2 text-sm bg-blue-500 text-white focus:ring-2 focus:ring-blue-500 ring-offset-1 rounded-md"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
