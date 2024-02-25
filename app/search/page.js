'use client'

import { Navbar } from "@/Components/Navbar";
import { Preview } from "@/Components/Preview";

import "@/Styles/page.css";

import { useEffect, useState } from "react";

const page = () => {
  const [query, setQuery] = useState(null);
  const [walls, setWalls] = useState([]);

  const [showPreview, setShowPreview] = useState(false);
  const [previewTitle, setPreviewTitle] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewTags, setPreviewTags] = useState([]);

  useEffect(() => {
    const url = new URL(window.location.href);
    let _q = url.searchParams.get('q').toUpperCase();
    let myWalls = [];

    setQuery(_q);

    fetch('/api').then((res) => {
      return res.json();
    }).then((data) => {
      for (let wall of data) {
        if (wall.TITLE.search(_q) != -1 || _q.search(wall.TAGS) != -1) {
          myWalls.push(wall);
        }
      }
      setWalls(myWalls);
    });
  }, []);

  let setPreviewParams = (title, url, tags) => {
    setShowPreview(true);
    setPreviewTitle(title);
    setPreviewUrl(url);
    setPreviewTags(tags.split("|"));
  }

  return (
    <>
      <Navbar />
      <div className="page">
        <h1>SEARCH RESULTS FOR: {query}</h1>
        { walls.length != 0 ?
        (
        <><div className="img-deck">
          {walls.map((wall) => (
            wall.ORIENTATION == 'P' ?
            (<div className="img-container" onClick={() => { setPreviewParams(wall.TITLE, wall.URL, wall.TAGS); }} key={wall.ID}>
              <h3>{wall.TITLE}</h3>
              <img src={wall.URL} style={{aspectRatio: '9/20'}} />
            </div>) : null
          ))}
        </div>
        <div className="img-deck">
          {walls.map((wall) => (
            wall.ORIENTATION == 'L' ?
            (<div className="img-container" onClick={() => { setPreviewParams(wall.TITLE, wall.URL, wall.TAGS); }} key={wall.ID}>
              <h3>{wall.TITLE}</h3>
              <img src={wall.URL} style={{aspectRatio: '16/9'}} />
            </div>) : null
          ))}
        </div></>) : <p style={{opacity: '0.5', fontSize: 'large'}}>No Result Found</p> }
        {showPreview ? <Preview title={previewTitle} src={previewUrl} tags={previewTags} show={setShowPreview} /> : null}
      </div>
    </>
  )
}

export default page