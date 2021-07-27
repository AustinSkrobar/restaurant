import FoodItem from "./FoodItem";

export default ({ lunchData }) => {
  return (
    <div className="h-1/4 py-10">
      <h2 className="flex justify-center divide-y underline text-xl">Lunch Sets</h2>
      <ul className="flex flex-wrap w-full justify-center">
        {lunchData.map((item) => (
          <FoodItem
            order={item.order}
            price={item.price}
            ingredients={item.ingredients}
            favorite={item.favorite}
            w="w-1/2"
          />
        ))}
      </ul>
    </div>
  );
};
