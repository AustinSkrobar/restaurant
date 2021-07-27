export default ({ order, price, ingredients, favorite, border, w, pic }) => {
  // need to consider that this may not need to be ul/li. may be easier styling things like the price without it.
  return (
    <div className={w}>
      <ul className="p-3 flex justify-items-start">
        <li><div className="rounded-full overflow-hidden h-24 w-24"><img className="" src={pic} /></div></li>
        <li className="text-sm font-semibold">{order}</li>
        <li className="text-gray-300 text-xs">{ingredients}</li>
        <li>{`$${price}`}</li>
        <li>{favorite}</li>
      </ul>
    </div>
  );
};
