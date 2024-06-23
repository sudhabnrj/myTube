export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&key=' + process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_DETAILS_VIDEOS_API= 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' + process.env.REACT_APP_YOUTUBE_API_KEY + '&id=';

export const YOUTUBE_SEARCH_API = 'https://clients1.google.com/complete/search?adapter=jsonpAdapter&client=youtube&hl=en&ds=yt&key=' + process.env.REACT_APP_YOUTUBE_API_KEY + '&q=';

export const YOUTUBE_SEARCH_LIST_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=' + process.env.REACT_APP_YOUTUBE_API_KEY + '&q='

export const YOUTUBE_CHANNEL_API = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=' + process.env.REACT_APP_YOUTUBE_API_KEY + '&id='

export const YOUTUBE_COMMENTS_API = 'https://www.googleapis.com/youtube/v3/commentThreads?key=' + process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_CATEGORY_LIST_API = 'https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=' + process.env.REACT_APP_YOUTUBE_API_KEY

export const OFFSET_LIVE_CHAT = 20;

export const OTHER_USER_THUMB = 'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png'