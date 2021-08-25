import FoodItem from "./FoodItem";

export default ({ dinnerData }) => {
  return (
    <div id='dinner' className="h-1/4 py-2">
      <h2 className="flex justify-center underline text-xl">Dinner</h2>
      <ul className="lg:grid lg:grid-rows-4 grid-flow-col w-full justify-center">
        {dinnerData.map((item) => (
          <FoodItem
            order={item.order}
            price={item.price}
            ingredients={item.ingredients}
            favorite={item.Favorite}
          />
        ))}
      </ul>
    </div>
  );
};
