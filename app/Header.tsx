import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="p-3 text-white bg-blue-500">
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded">
        Home
      </Link>
    </header>
  );
}

export default Header;
