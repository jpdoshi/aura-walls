'use client'

import { Navbar } from "@/Components/Navbar";
import { Preview } from "@/Components/Preview";

import "@/Styles/page.css";

import { useState, useEffect } from "react";

const page = () => {
    const [walls, setWalls] = useState([]);
    const [mode, setMode] = useState('L');

    const [showPreview, setShowPreview] = useState(false);
    const [previewTitle, setPreviewTitle] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [previewTags, setPreviewTags] = useState([]);

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
                <div className="img-deck">
                {walls.map((wall) => (
                    <div className="img-container" onClick={() => { setPreviewParams(wall.TITLE, wall.URL, wall.TAGS); }} key={wall.ID}>
                        <h3>{wall.TITLE}</h3>
                        {
                            mode == 'P' ? 
                            (<img src={wall.URL} style={{ aspectRatio: '9/20' }} loading="lazy" />) :
                            (<img src={wall.URL} style={{ aspectRatio: '16/9' }} loading="lazy" />)
                        }
                    </div>
                ))}
                </div>
                { showPreview ? <Preview title={previewTitle} src={previewUrl} tags={previewTags} show={setShowPreview} /> : null }
            </div>
        </>
    )
}

export default page