import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resLists from "../utils/mockData";

export default function Body() {
  let res = [];
  const [listOfRestaurants, setListOfRestaurants] = useState(resLists);
  return (
    <main className="body">
      <div className="search-bar">
        Search
        <div className="filter">
          <button
            onClick={() => {
              const filterRes = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setListOfRestaurants(filterRes);
            }}
            className="filter-btn"
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="cards-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </main>
  );
}
