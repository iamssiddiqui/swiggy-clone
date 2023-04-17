import { useState, useEffect } from "react"
import { FETCH_MENU_LINK } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
        }, []);
      
      const getRestaurantInfo = async () => {
          const data = await fetch(FETCH_MENU_LINK + resId)
          const json = await data.json();
          console.log(json.data);
          setRestaurant(json.data);
      }

      return restaurant;
};

export default useRestaurant