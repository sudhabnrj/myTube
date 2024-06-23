export const YOUTUBE_API_KEY ='AIzaSyDWdpgaSGYRWymnDM2OVv7uJup0kzBJQYI';
// export const YOUTUBE_API_KEY ='AIzaSyDdo2HEIufWZlLbOW6ZHp3ts8ww2Q5E7no';
// export const YOUTUBE_API_KEY ='AIzaSyAFx7PiyhvdX6Os5CN8D2ERhPCiQlTjZ2E';
// export const YOUTUBE_API_KEY = 'AIzaSyCd-YmirSMYqiobWoh-LHtxhIpMA1HUumI';
// export const YOUTUBE_API_KEY ='AIzaSyDbYgqSgOhQKn7si_x1LhPlkXWWeTjLr4E'
// export const YOUTUBE_API_KEY = 'AIzaSyA31_dePV0wcBryjOu18VgGBdT7MxG28ig'
// export const YOUTUBE_API_KEY = 'AIzaSyD6R_38TUreH0LXsOxPgCODdhh010kvgcs'
// export const YOUTUBE_API_KEY = 'AIzaSyAJkboiu3Tb3VkfOaJNzYcPWnSNtv6bRnI';
export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&key=' + YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_API = 'https://clients1.google.com/complete/search?adapter=jsonpAdapter&client=youtube&hl=en&ds=yt&q=';
export const YOUTUBE_SEARCH_LIST_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='
export const YOUTUBE_CHANNEL_API = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id='
export const YOUTUBE_COMMENTS_API = 'https://www.googleapis.com/youtube/v3/commentThreads?key=' + YOUTUBE_API_KEY;
export const YOUTUBE_VIDEO_CATEGORY_LIST_API = 'https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=' + YOUTUBE_API_KEY

export const OFFSET_LIVE_CHAT = 20;
export const OTHER_USER_THUMB = 'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png'