import React from "react";

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  // throw new Error("whoops...");
  const data: SearchResult = await res.json();
  return data;
};

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};
async function SearchResult({ params: { searchTerm } }: PageProps) {
  const searchResult = await await search(searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm">
        You searched for: {searchTerm}
        <ol className="space-y-5 p-5">
          {searchResult.organic_results.map((result) => (
            <li className="list-decimal">
              <p className="font-bold">{result.title}</p>
              <p>{result.snippet}</p>
            </li>
          ))}
        </ol>
      </p>
    </div>
  );
}

export default SearchResult;
