export default ({ order, price, ingredients, favorite, pic }) => {
  const itemLength = ingredients.length - 1
  // need to consider that this may not need to be ul/li. may be easier styling things like the price without it.
  return (
    <div className="p-3 grid grid-rows-2 grid-flow-col">
      {pic && (
        <div className="row-span-2 rounded-full overflow-hidden h-24 w-24">
          <img src={pic} />
        </div>
      )}
      <div className="w-96">
        <div className="inline-block align-baseline text-sm font-semibold">{order}</div>
      </div>
      
      <div className="text-gray-300 text-xs flex flex-row">{ingredients.map(item => item !== ingredients[itemLength] ? <p className="pl-1">{item} /</p> : <p className="pl-1">{item} </p>)}</div>
      <div>
        <div className="text-right text-sm font-semibold">{`$${price}`}</div>
      </div>
      {favorite && <div className="text-right">⭐️</div>}
    </div>
  );
};
