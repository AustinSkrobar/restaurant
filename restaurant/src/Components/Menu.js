import { Signature, LunchSets, Dinner } from "./index";
import mainChefMenu from "../images/mainChefMenu.jpg";
import data from "../data.json";

export default (params) => {
  const signature = data[0];
  const lunch = data[1];
  const dinner = data[2];

  return (
    <div>
      <div className="w-full h-96 overflow-hidden">
        <h3>Chef Menu</h3>
        <img className="w-full h-auto" src={mainChefMenu} alt="header for chefs menu" />
      </div>
      
      <div>
        <Signature signatureData={signature.Signature} />
        <LunchSets lunchData={lunch.LunchSets} />
        <Dinner dinnerData={dinner.Dinner} />
      </div>
    </div>
  );
};


