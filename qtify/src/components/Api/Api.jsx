import axios from "axios";

export const BACK_ENDPOINT="https://qtify-backend-labs.crio.do"

export const fetchTopAlbums=async()=>{
    try{
    const response=await axios.get(`${BACK_ENDPOINT}/albums/top`);
    return response.data;
}catch(err){
    console.log(err);
}
};

export const fetchNewAlbums=async()=>{
    try{
        const response=await axios.get(`${BACK_ENDPOINT}/albums/new`);
        return response.data;
    }catch(err){
        console.log(err);
    }
};

export const fetchSongs=async()=>{
    try{
        const response=await axios.get(`${BACK_ENDPOINT}/songs`);
        return response.data;
    }catch(err){
        console.log(err);
    }
};

export const fetchFilters=async()=>{
    try{
        const response=await axios.get(`${BACK_ENDPOINT}/genres`);
        return response.data;
    }catch(err){
        console.log(err);
    }
};