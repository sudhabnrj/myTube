import React from 'react'
import ChannelCard from '../component/ChannelCard';
import { useSelector } from 'react-redux';

const Subscriptions = () => {
    const subscriptionsList = useSelector((state)=> state.subscribe.subscription );

    if (!subscriptionsList) {
        return <p>Loading subscriptions...</p>;
    }
    
    // console.log('list of Subscr', subscriptionsList);

    const handleSubscribeCount =(val)=> {
        // Thousands, millions, billions etc..
        let s = ["", "K", "M", "B", "T"];
    
        // Dividing the value by 3.
        let sNum = Math.floor(("" + val).length / 3);
    
        // Calculating the precised value.
        let sVal = parseFloat(
            (sNum !== 0 ? val / Math.pow(1000, sNum) : val ).toPrecision(2)
        );
    
        if (sVal % 1 !== 0) {
            sVal = sVal.toFixed(1);
        }
    
        // Appending the letter to precised val.
        return sVal + s[sNum];
    }

    return (
        <div className="w-full h-screen pt-32 flex justify-between items-start">
            {subscriptionsList.length > 0 ?(
                <div className="flex flex-wrap justify-start items-stretch w-full">
                    {subscriptionsList.map((list)=> 
                    <ChannelCard key={list.id} id={list.id} src={list?.snippet?.thumbnails?.medium?.url}
                    subscriber={handleSubscribeCount(list?.statistics?.subscriberCount)}
                    channelName={list?.snippet?.title}
                    />)}
                </div>) : (
                    <h2 className="text-2xl">You don't have any channels Subscriptions!</h2>
                )
            }
        </div>
    )
}

export default Subscriptions
