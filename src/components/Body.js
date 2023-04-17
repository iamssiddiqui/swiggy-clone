import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

//using map function
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchInput] = useState("");
  
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8988027&lng=77.6160401&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline! Check your internet connection!</h1>
  }
 
  console.log("render");

  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0 ) return <h1>No Restaurant Found</h1>

  return filteredRestaurants?.length === 0 ? (
    <Shimmer />
  ) : ( 
    <>
      <div className="p-2 bg-pink-100 my-3">
        <input
          type= "text"
          className="focus:bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          />

        <button
          className="p-2 m-2 bg-purple-900 text-white rounded-xl hover:bg-gray-500"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap bg-red-200">
      {filteredRestaurants.map((restaurant) => {
        return (
          <Link 
          to={"/restaurant/" + restaurant.data.id}
          key={restaurant.data.id}
          >
        <RestaurantCard {...restaurant.data} />
        </Link>
      );
      })}
    </div>
    </>
  )
  };
  export default Body