'use client'

import { Navbar } from "@/Components/Navbar";
import "@/Styles/page.css";

import { useState, useEffect } from "react";

const page = () => {
    const [walls, setWalls] = useState([]);
    const [mode, setMode] = useState('L');

    useEffect(() => {
        const url = new URL(window.location.href);
        const orientation = url.searchParams.get('o');

        let myWalls = [];

        if (orientation == 'portrait') {
            setMode('P');
        }
        
        fetch('/api').then((res) => {
            return res.json();
        }).then((data) => {
            for (let wall of data) {
                if ((orientation == 'landscape' && wall['ORIENTATION'] == 'L') || (orientation == 'portrait' && wall['ORIENTATION'] == 'P')) {
                    myWalls.push(wall);
                }
            }
            setWalls(myWalls);
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="page">
                <div className="img-deck">
                {walls.map((wall) => (
                    <div className="img-container" key={wall.ID}>
                        <h3>{wall.TITLE}</h3>
                        {
                            mode == 'P' ? 
                            (<img src={wall.URL} style={{ aspectRatio: '9/20' }} />) :
                            (<img src={wall.URL} style={{ aspectRatio: '16/9' }} />)
                        }
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default page