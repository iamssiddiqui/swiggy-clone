import { IMG_CDN_LINK } from "../constants";
const RestaurantCard = ({ 
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    deliveryTime
  }) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-200 ml-8">
            <img src = {IMG_CDN_LINK + cloudinaryImageId} />
            <h2 className="font-bold text-lg">{name} </h2>
            <h3>{cuisines.join(", ")} </h3>
            <h4>{lastMileTravelString} </h4>
            <h4>{deliveryTime} minutes </h4>
        </div>
    );
  };

export default RestaurantCard