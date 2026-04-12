"use client"

import React from 'react'

export default function YouTubePlayer({
    videoId,
    playlistId,
    title = "YouTube video",
    className = "",
    aspect = "video", // "video" = 16:9, "square" = 1:1, etc.
}) {

    // Build embed URL:
    // - If videoId is present -> single video embed
    // - Else if playlistId is present -> playlist embed
    const src = videoId
        ? `https://www.youtube.com/embed/${videoId}`
        : `https://www.youtube.com/embed/videoseries?list=${playlistId}`;

    // Aspect ratio utility classes
    const aspectClass =
        aspect === "video"
            ? "aspect-video"
            : aspect === "square"
                ? "aspect-square"
                : "aspect-video";
    return (
        <div className={`w-full ${aspectClass} rounded-xl overflow-hidden ${className}`}>
            <iframe
                src={src}
                title={title}
                className="w-full h-full"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}
