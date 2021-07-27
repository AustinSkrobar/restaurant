import FoodItem from "./FoodItem";

export default ({ signatureData }) => {
  return (
    <div className="h-1/4 flex justify-center py-2">
      <ul className="">
        <li className="flex justify-center py-4 underline">Signature</li>
        {signatureData.map((item) => (
          <FoodItem
            order={item.order}
            price={item.price}
            ingredients={item.ingredients}
            favorite={item.favorite}
            w="w-96"
          />
        ))}
      </ul>
    </div>
  );
};
