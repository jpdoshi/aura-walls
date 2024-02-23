'use client'

import { Navbar } from "@/Components/Navbar";
import "@/Styles/page.css";

import { useState, useEffect } from "react";

export default function Home() {
  const [phoneWalls, setPhoneWalls] = useState([]);
  const [desktopWalls, setDesktopWalls] = useState([]);
  let phoneWallsArray = [];
  let desktopWallsArray = [];

  useEffect(() => {
    fetch('/api').then((res) => {
      return res.json();
    }).then((data) => {
        for (let wall of data) {
            if (wall['ORIENTATION'] == 'P') {
              if (phoneWallsArray.length < 4) {
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
  return (
    <>
    <Navbar />
    <div className="page">
      <section id="lit-walls">
        <h1>LIT🔥WALLPAPERS</h1>
        <div className="img-deck">
        {phoneWalls.map((wall) => (
          <div className="img-container" key={wall.ID}>
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
      <section id="mobile">
        <h1>MOBILE</h1>
        <div className="img-deck">
        {phoneWalls.map((wall) => (
          <div className="img-container" key={wall.ID}>
              <h3>{wall.TITLE}</h3>
              <img src={wall.URL} style={{ aspectRatio: '9/20' }} />
          </div>
        ))}
        </div>
        <a href="/walls?o=portrait">
        <button>SHOW ALL</button>
        </a>
      </section>
      <section id="desktop">
        <h1>DESKTOP</h1>
        <div className="img-deck">
        {desktopWalls.map((wall) => (
          <div className="img-container" key={wall.ID}>
              <h3>{wall.TITLE}</h3>
              <img src={wall.URL} style={{ aspectRatio: '16/9' }} />
          </div>
        ))}
        </div>
        <a href="/walls?o=landscape">
          <button>SHOW ALL</button>
        </a>
      </section>
      <section id="about">
        <h1>ABOUT</h1>
      </section>
    </div>
    </>
  );
}
