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
    <div className=" grid grid-rows-2 grid-flow-col  ">
      <img src={BigOlChicken} alt="chicken" />
      <img src={SeafoodGumbo} alt="gumbo" />
      <img src={appetizers} alt="appetizers" />
      <img src={dumplings} alt="dumplings" />
      <img src={BarTop} alt="bartop" />
      <img src={GrilledChicken} alt="grilledchicken" />
      <img src={Noodles} alt="noodles" />
      <img src={Shakshuka} alt="shakshouka" />
    </div>
  );
};
