import React from 'react'
import ButtonWithDesign from './ButtonWithDesign'
import YouTubePlayer from './YouTubePlayer'

export default function VideoSection({
    title = "Watch Our Guidance Videos",
    description = "Admissions, visa processes, and practical tips explained clearly.",
    featuredVideoId,
    playlistId,
    playlistUrl, // optional: link to YouTube playlist
    ctaText = "Get Free Consultation",
    ctaHref = "/contact", // change if your button uses routing differently
}) {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {title}
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Featured video */}
                {featuredVideoId && (
                    <YouTubePlayer
                        videoId={featuredVideoId}
                        title={`${title} (Featured)`}
                        className="shadow-md"
                    />
                )}

                {/* Playlist embed (optional) */}
                {playlistId && (
                    <div className={featuredVideoId ? "mt-10" : ""}>
                        <YouTubePlayer
                            playlistId={playlistId}
                            title={`${title} (Playlist)`}
                            className="shadow-md"
                        />
                    </div>
                )}

                {/* Links + CTA */}
                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                    {playlistUrl && (
                        <a
                            href={playlistUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="border border-gray-700 px-6 py-3 rounded-md hover:bg-gray-800 hover:text-white transition"
                        >
                            Watch Full Playlist on YouTube
                        </a>
                    )}

                    {/* If your ButtonWithDesign supports href, use that.
                If not, replace with <Link> or wrap ButtonWithDesign. */}
                    <a href={ctaHref}>
                        <ButtonWithDesign text={ctaText} />
                    </a>
                </div>
            </div>
        </section>
    )
}
