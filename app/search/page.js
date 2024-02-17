'use client'

import { Navbar } from "@/Components/Navbar";
import "@/Styles/page.css";

import { useEffect, useState } from "react";

const page = () => {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    setQuery(url.searchParams.get('q').toUpperCase());
  })
  return (
    <>
    <Navbar />
    <div className="page">
        <h1>SEARCH RESULTS FOR: {query}</h1>
    </div>
    </>
  )
}

export default page