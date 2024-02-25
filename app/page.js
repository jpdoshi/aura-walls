'use client'

import { useState, useEffect } from "react";

import { Navbar } from "@/Components/Navbar";
import { Preview } from "@/Components/Preview";

import "@/Styles/page.css";

export default function Home() {
  const [phoneWalls, setPhoneWalls] = useState([]);
  const [desktopWalls, setDesktopWalls] = useState([]);

  const [showPreview, setShowPreview] = useState(false);
  const [previewTitle, setPreviewTitle] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewTags, setPreviewTags] = useState([]);

  let phoneWallsArray = [];
  let desktopWallsArray = [];

  useEffect(() => {
    fetch('/api').then((res) => {
      return res.json();
    }).then((data) => {
        for (let wall of data) {
            if (wall['ORIENTATION'] == 'P') {
              if (phoneWallsArray.length < 8) {
                phoneWallsArray.push(wall);
              }
            } else {
              if (desktopWallsArray.length < 8) {
                desktopWallsArray.push(wall);
              }
            }
        }

        setPhoneWalls(phoneWallsArray);
        setDesktopWalls(desktopWallsArray);
    });
  }, []);

  let setPreviewParams = (title, url, tags) => {
    setShowPreview(true);
    setPreviewTitle(title);
    setPreviewUrl(url);
    setPreviewTags(tags.split("|"));
  };
  return (
    <>
    <Navbar />
    <div className="page">
      <section id="lit-walls">
        <h1>LIT🔥WALLPAPERS</h1>
        <div className="img-deck">
        {phoneWalls.map((wall) => (
          <div className="img-container" onClick={() => { setPreviewParams(wall.TITLE, wall.URL, wall.TAGS); }} key={wall.ID}>
              <h3>{wall.TITLE}</h3>
              <img src={wall.URL} style={{ aspectRatio: '9/20' }} />
          </div>
        ))}
        </div>
        <a href="/walls?o=portrait">
          <button>SHOW ALL</button>
        </a>
      </section>
      <section id="tags">
        <h1>TAGS</h1>
      </section>
      <section id="desktop">
        <h1>DESKTOP</h1>
        <div className="img-deck">
        {desktopWalls.map((wall) => (
          <div className="img-container" onClick={() => { setPreviewParams(wall.TITLE, wall.URL, wall.TAGS); }} key={wall.ID}>
              <h3>{wall.TITLE}</h3>
              <img src={wall.URL} style={{ aspectRatio: '16/9' }} />
          </div>
        ))}
        </div>
        <a href="/walls?o=landscape">
          <button>SHOW ALL</button>
        </a>
      </section>
      <section id="mobile">
        <h1>MOBILE</h1>
        <div className="img-deck">
        {phoneWalls.map((wall) => (
          <div className="img-container" onClick={() => { setPreviewParams(wall.TITLE, wall.URL, wall.TAGS); }} key={wall.ID}>
              <h3>{wall.TITLE}</h3>
              <img src={wall.URL} style={{ aspectRatio: '9/20' }} />
          </div>
        ))}
        </div>
        <a href="/walls?o=portrait">
        <button>SHOW ALL</button>
        </a>
      </section>
      <section id="about">
        <h1>ABOUT</h1>
        <div className="about-container">
          <div className="left">
            <a href="https://github.com/jpdoshi"><img src="https://avatars.githubusercontent.com/u/122164427" /></a>
          </div>
          <div className="right">
            <h2>Jainam P. Doshi</h2>
            <p>This Project is made using NextJS and SQLite. Inspired by, and images taken from <a href="https://wallpapers-clan.com">Wallpapers Clan</a>.
            This project is meant for educational purposes and licensed under MIT license, therefore copying or distribution is strictly prohibited.</p>
            <a href="https://github.com/jpdoshi">
            <button>VISIT GITHUB</button>
            </a>
          </div>
        </div>
      </section>
      { showPreview ? <Preview title={previewTitle} src={previewUrl} tags={previewTags} show={setShowPreview} /> : null }
    </div>
    </>
  );
}
