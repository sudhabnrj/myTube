import React from 'react'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

  // if(!isMenuOpen) return null;

  return (
    <nav className={`flex flex-col overflow-hidden hover:overflow-y-auto ${isMenuOpen ? 'w-60 px-4 ' : 'w-20 px-0'} py-5 side-bar bg-white fixed left-0 bottom-0 top-16 z-10`}>
      <ul className='border border-transparent border-b-gray-300 pb-3'>
        <li className="w-full mb-1">
          <Link to='/' className={`w-full py-2 px-3 bg-gray-300 hover:bg-gray-300 rounded-md flex items-center
           ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
            <HomeOutlinedIcon/>
            <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Home</span>
          </Link>
        </li>
        <li className="w-full mb-1">
          <Link to='/' className={`w-full py-2 px-3  hover:bg-gray-300 rounded-md flex items-center
           ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false">
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z">
              </path>
            </svg>
            <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Shorts</span>
          </Link>
        </li>
        <li className="w-full">
          <Link to='/feed/subscriptions' className={`w-full py-2 px-3  hover:bg-gray-300 rounded-md flex items-center
           ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
            <SubscriptionsOutlinedIcon/>
            <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>subscriptions</span>
          </Link>
        </li>

      </ul>
      <>
        <p className={`font-semibold my-3 ${isMenuOpen ? 'ml-4' : 'ml-0 text-[14px]'}`}>Explore</p>
        <ul className='border border-transparent border-b-gray-300 pb-3 mb-3'>
          <li className="w-full mb-1">
            <Link to='/' className={`w-full py-2 px-3  hover:bg-gray-300 rounded-md flex items-center
            ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
              <LocalFireDepartmentOutlinedIcon/>
              <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Trending</span>
            </Link>
          </li>
          <li className="w-full mb-1">
            <Link to='/' className={`w-full py-2 px-3  hover:bg-gray-300 rounded-md flex items-center
            ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
              <ShoppingBagOutlinedIcon/>
              <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Shopping</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to='/' className={`w-full py-2 px-3 hover:bg-gray-300 rounded-md flex items-center
            ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
              <MusicNoteOutlinedIcon/>
              <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Music</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to='/' className={`w-full py-2 px-3 hover:bg-gray-300 rounded-md flex items-center
            ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
              <MovieOutlinedIcon/>
              <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Movies</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to='/' className={`w-full py-2 px-3 hover:bg-gray-300 rounded-md flex items-center
            ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
              <LiveTvOutlinedIcon/>
              <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Live</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to='/' className={`w-full py-2 px-3 hover:bg-gray-300 rounded-md flex items-center
            ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
              <SportsEsportsOutlinedIcon/>
              <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Gaming</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to='/' className={`w-full py-2 px-3 hover:bg-gray-300 rounded-md flex items-center
            ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
              <NewspaperOutlinedIcon/>
              <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>News</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to='/' className={`w-full py-2 px-3 hover:bg-gray-300 rounded-md flex items-center
            ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
              <EmojiEventsOutlinedIcon/>
              <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Sports</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to='/' className={`w-full py-2 px-3 hover:bg-gray-300 rounded-md flex items-center
            ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
              <LightbulbOutlinedIcon/>
              <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Courses</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to='/' className={`w-full py-2 px-3 hover:bg-gray-300 rounded-md flex items-center
            ${isMenuOpen ? 'flex-row justify-start' : 'flex-col justify-center text-center'} `}>
              <PodcastsOutlinedIcon/>
              <span className={`${isMenuOpen ? 'ml-4' : 'ml-0 text-[12px]'}`}>Podcasts</span>
            </Link>
          </li>

        </ul>
      </>
    </nav>
  )
}

export default Sidebar
