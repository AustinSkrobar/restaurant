import BigOlChicken from "../images/BigOlChicken.jpg";
import dumplings from "../images/dumplings.jpg";
import SeafoodGumbo from "../images/SeafoodGumbo.jpg";
import appetizers from "../images/smallerAppetizers.jpeg";
import BarTop from "../images/BarTop.jpg";
import GrilledChicken from "../images/GrilledChicken.jpg";
import Noodles from "../images/Noodles.jpg";
import Shakshuka from "../images/Shakshouka.jpg";

export default (params) => {
  return (
    <div className="grid grid-rows-2 grid-flow-col  ">
      <img className="w-full" src={BigOlChicken} alt="chicken" />
      <img className="w-full" src={SeafoodGumbo} alt="gumbo" />
      <img className="w-full" src={appetizers} alt="appetizers" />
      <img className="w-full" src={dumplings} alt="dumplings" />
      <img className="w-full" src={BarTop} alt="bartop" />
      <img className="w-full" src={GrilledChicken} alt="grilledchicken" />
      <img className="w-full" src={Noodles} alt="noodles" />
      <img className="w-full" src={Shakshuka} alt="shakshouka" />
    </div>
  );
};
