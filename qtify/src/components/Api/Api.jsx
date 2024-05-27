import axios from "axios";

export const BACK_ENDPOINT="https://qtify-backend-labs.crio.do"

export const fetchTopAlbums=async()=>{
    try{
    const res=await axios.get(`${BACK_ENDPOINT}/albums/top`);
    return res.data;
}catch(err){
    console.log(err);
}
};

export const fetchNewAlbums=async()=>{
    try{
        const res=await axios.get(`${BACK_ENDPOINT}/albums/new`);
        return res.data;
    }catch(err){
        console.log(err);
    }
};

export const fetchSongs=async()=>{
    try{
        const res=await axios.get(`${BACK_ENDPOINT}/songs`);
        return res.data;
    }catch(err){
        console.log(err);
    }
};

export const fetchFilters=async()=>{
    try{
        const res=await axios.get(`${BACK_ENDPOINT}/genres`);
        return res.data;
    }catch(err){
        console.log(err);
    }
}