
import React,{useState,useEffect} from "react";
import Styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel"
import Filters from "../Filters/Filters";

function Section({title,data,filterSource,type}){
    const [filters,setFilters]=useState([{key:"all",label:"ALL"}]);
    const [selectedFilterIndex,setSelectedFilterIndex]=useState(0);
    const [carouselToggle,setCarouselToggle]=useState(true);

    const handleToggle=()=>{
        setCarouselToggle((prevState)=>!prevState);
    };

    
useEffect(()=>{
    if(filterSource){
        filterSource().then((response)=>{
            const {data}=response;
            setFilters([...filters, ...data]);
        })
    }
})
const showFilters=filters.length>1;
const cardsToRender= data.filter((card)=>
showFilters && selectedFilterIndex!==0
? card.genre.key=== filters[selectedFilterIndex].key:card
);
    return (
        <div>
            <div className={Styles.header}>
                <h3>{title}</h3>
                <h4 className={Styles.toggleText} onClick={handleToggle}>
                {!carouselToggle ? "collapse All" : "Show All"}
                </h4>
            </div>
            {showFilters && (
                <div className={Styles.filterWrapper}>
                    <Filters 
                    filters={filters}
                    selectedFilterIndex={selectedFilterIndex}
                    setSelectedFilterIndex={setSelectedFilterIndex}
                    />
                </div>
            )}
            {data.length===0 ? (
                <CircularProgress/>

            ):(
                <div className={Styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={Styles.wrapper}>
                            {cardsToRender.map((ele)=>(
                                <Card data={ele} type={type}/>
                            ))}
                            </div>
                    ):(
                        <Carousel 
                        data={cardsToRender}
                        renderComponent={(data)=> <Card data={data} type={type}/>}
                        />
                    )}
        </div>
            )};
        </div>
    );
}
export default Section;


