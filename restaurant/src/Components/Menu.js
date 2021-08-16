import { Signature, LunchSets, Dinner } from "./index";
import mainChefMenu from "../images/mainChefMenu.jpg";
import data from "../data.json";
import saltedChicken from "../images/saltedChicken.jpg";
import salmonSteak from "../images/Shakshouka-Tanya-Zouev-150x150.jpg";
import crabCurry from "../images/Kimchi-Ramen-35-1024x682-150x150.jpg";

export default (params) => {
  const signature = data[0];
  const lunch = data[1];
  const dinner = data[2];

  signature.Signature[0].pic = saltedChicken;
  signature.Signature[1].pic = crabCurry;
  signature.Signature[2].pic = salmonSteak;

  return (
    <div>
      <div className=" transition-opacitiy relative z-50 w-1/3 h-40 bg-red-600 p-5 hover:shadow-2xl">
          <p className="font-cursiveText text-4xl text-white italic">Chef</p>
          <p className="text-5xl font-thin text-white">MENU</p>
        </div>
      <div className="h-xl">
        <div 
          className="bg-Menu h-xl bg-no-repeat bg-cover bg-center w-full" alt="header for chefs menu"></div>
        </div>
      <div className="py-5 flex flex-col">
        <Signature signatureData={signature.Signature} />
        <LunchSets lunchData={lunch.LunchSets} />
        <Dinner dinnerData={dinner.Dinner} />
      </div>
    </div>
  );
};
