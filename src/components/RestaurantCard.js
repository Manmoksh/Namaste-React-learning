import { CDN_URL } from "../utils/costants";
export default function RestaurantCard(props) {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo, sla } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="img logo "
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
}
