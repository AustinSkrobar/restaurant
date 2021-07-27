import FoodItem from "./FoodItem";

export default ({ dinnerData }) => {
  return (
    <div className="h-1/4 py-2">
      <h2 className="flex justify-center underline text-xl">Dinner</h2>
      <ul className="flex flex-wrap w-full justify-center">
        {dinnerData.map((item) => (
          <FoodItem
            order={item.order}
            price={item.price}
            ingredients={item.ingredients}
            favorite={item.favorite}
            w="w-1/3"
          />
        ))}
      </ul>
    </div>
  );
};
