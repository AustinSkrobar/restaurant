export default ({ order, price, ingredients, favorite, border, w, pic }) => {
  return (
    <div className={w}>
      <ul className="p-3 flex justify-items-start">
        <li><img className="rounded-full" src={pic} /></li>
        <li>{order}</li>
        <li>{price}</li>
        <li>{ingredients}</li>
        <li>{favorite}</li>
      </ul>
    </div>
  );
};
