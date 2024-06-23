import {useEffect} from 'react'
import { YOUTUBE_VIDEO_CATEGORY_LIST_API } from '../utils/constants';
import { addCategoryList } from '../utils/videoSlice';
import { useDispatch } from 'react-redux';

const useVideoCategoryList = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        const fetchCategoryList = async () => {
            try{
                const data = await fetch(`${YOUTUBE_VIDEO_CATEGORY_LIST_API}`);
                const response = await data.json();
                dispatch(addCategoryList(response?.items));
                //console.log('All Category', response?.items);
            }
            catch(error){
                console.error(error)
            }
        };
        fetchCategoryList();
    }, [dispatch]);
}

export default useVideoCategoryList;
