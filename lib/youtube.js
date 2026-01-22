// lib/youtube.js
export async function getPlaylistVideoCount(playlistId) {
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/playlists?part=contentDetails&id=${playlistId}&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // This targets the itemCount property from the YouTube API response
        if (data.items && data.items.length > 0) {
            return data.items[0].contentDetails.itemCount;
        }
        return 0;
    } catch (error) {
        console.error("YouTube API Error:", error);
        return 0;
    }
}
