import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import CategoryButtons from './CategoryButtons';
import { Link } from 'react-router-dom';
import { setCloseMenu } from '../utils/appSlice';
import useVideoCategoryList from '../hooks/useVideoCategoryList';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Scrollbar } from 'swiper/modules';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import { setFilterVideos } from '../utils/videoSlice';

const Header = () => {
    const navMenu = useSelector((store)=> store.app.isMenuOpen);
    const listCategory = useSelector((state)=> state.videos.categoryList);
    const dispatch = useDispatch();
    useVideoCategoryList();

    if(!listCategory){
        return <p>Loading...</p>
    }

    
    
    const handleNavMenu = () => {
        dispatch(toggleMenu());
    }

    const resetPageUrl = () => {
        dispatch(setCloseMenu(true));
    }

    const handleCateoryFilter = (categoryId) => {
        dispatch(setFilterVideos(categoryId));
        // console.log(dispatch(setFilterVideos(categoryId)));
    }

    return (
        <header className='fixed left-0 right-0 top-0 bg-white z-10'>
            <div className="grid grid-flow-col py-3 px-4 ">
                <div className='flex col-span-1 items-center'>
                    <button onClick={handleNavMenu} className='hover:bg-gray-200 rounded-full p-2 focus:bg-gray-300 transition-all'>
                        <MenuOutlinedIcon className="!w-6 !h-6" />
                    </button>
                    <Link to='/' onClick={resetPageUrl}>
                        <img alt="Logo" src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png' className="h-6 ml-5" />
                    </Link>
                </div>
                <div className="col-span-10 text-center">
                    <SearchBar/>
                </div>
                <div className='col-span-1 flex items-center justify-end'>
                    <img 
                        src='https://yt3.ggpht.com/yti/ANjgQV87ZBcZKVMCAoBD3IkKbwZy0e0WMH4Oz7TOFDzMP45NX2s=s88-c-k-c0x00ffffff-no-rj-mo' 
                        alt="User"
                        className='h-8 rounded-full'
                    />
                </div>
            </div>
            <div className={`mb-3 ${navMenu ? 'ml-[250px]' : 'ml-[90px]'} `}>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={4}
                    loop={false}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {listCategory.map((category)=> {
                        if (category && category.snippet) {
                            return(
                                <SwiperSlide key={category.id}>
                                    <CategoryButtons onClick={()=> handleCateoryFilter(category)}  className="border border-gray-200 whitespace-nowrap cursor-pointer" name={category.snippet?.title} />
                                </SwiperSlide>
                            );
                        }else{
                            //console.error('Category or snippet is null', category);
                            return null;
                        }                    
                    })}
                </Swiper>
            </div>
        </header>
    )
}

export default Header
