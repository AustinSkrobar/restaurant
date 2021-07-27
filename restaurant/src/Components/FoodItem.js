export default ({ order, price, ingredients, favorite, border, w }) => {
  return (
    <div className={w}>
      <ul className="p-3 flex justify-items-start">
        <li>{order}</li>
        <li>{price}</li>
        <li>{ingredients}</li>
        <li>{favorite}</li>
      </ul>
    </div>
  );
};
