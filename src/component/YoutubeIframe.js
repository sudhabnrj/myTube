import React from 'react'

const YoutubeIframe = ({videoID, autoplay, mute, className}) => {

    //console.log(videoID);

    return (
        <div className='w-full'>
            <iframe width="100%" className={`aspect-video ${className}`} src={`https://www.youtube.com/embed/${videoID}?&autoplay=${1}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default YoutubeIframe
