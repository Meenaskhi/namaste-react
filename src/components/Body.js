import RestaurantCard from "./RestaurantCard"
import resListData from "../utils/mockData"
import { useState } from "react"

//not using keys(not acceptable) <<<<<< index as key(if no unique key, use this atleast) <<<<<<<<<<  unique id(best practice)
const Body = () => {
  const [resList, setResList] = useState(resListData)
  
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredRestList = resList.filter((res) => res.info.avgRating > 4.5)
          setResList(filteredRestList)
        }
        }>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          resList.map((res) => <RestaurantCard key={res.info.id} resData={res} />)
        }
      </div>
    </div>
  )
}

export default Body