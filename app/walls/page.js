'use client'

import { Navbar } from "@/Components/Navbar";
import "@/Styles/page.css";

import { useState, useEffect } from "react";

const page = () => {
    const [walls, setWalls] = useState([]);
    useEffect(() => {
        fetch('/api').then((res) => {
            return res.json();
        }).then((data) => {
            setWalls(data);
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
                        <img src={wall.URL} />
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default page