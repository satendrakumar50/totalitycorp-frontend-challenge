
import  { useState, useEffect } from "react";
import Cards from './Cards';
import Shimmer from "./Shimmer";


function filterData(searchText,allRestaurants){
    const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    return filterData;
}
const RestaurandCard = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // API call
        //empty dependency arry= once after render
       // if dependency is [searchText]= once after intial render + everytime after render(searchText changes)
        //console.log("useEffect")
        getRestaurants();
    }, []);
   //console.log("render")
    async function getRestaurants(){
        const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.148729&lng=75.845787&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
         //console.log(json)
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   

       if(allRestaurants?.length===0)
       return <Shimmer />
       else  return (
        <>
           <div className="pt-2">
            <input className="    p-2 rounded-s-full h-11 w-96 border border-blue-100  ml-2" 
            type="text" 
            
            placeholder="Search-Here"
            value={searchText}
            onChange={(e) =>{
                setSearchText(e.target.value);
            }}
            />
            <button
                className="h-11  w-16 p-2  rounded-e-full text-black bg-gray-100    border border-blue-100  " 
                onClick={() =>{
                const data=filterData(searchText,allRestaurants);
                setFilteredRestaurants(data);
            }}
            > Search
            </button>
           </div>
           <div className="flex flex-wrap">
             {
            filteredRestaurants?.map((restaurant) => {
             return (
            <Cards {...restaurant?.info} key={restaurant?.info?.id} />
             );
            })}
            </div>
        </>  
   );
};

export default RestaurandCard