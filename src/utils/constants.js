const GOOGLE_API_KEY = "AIzaSyAaNdRO9gcnuqsbw98xkp6oYbPkslpV9Lg"
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+GOOGLE_API_KEY
export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q={searchQuery}&key="+GOOGLE_API_KEY
export const LIVE_CHAT_OFFSET = 100