import FoodItem from "./FoodItem"

export default ({ dinnerData }) => {

    return (
        <div className="container mx-auto">
            {console.log(dinnerData)}
            <ul>
                {dinnerData.map((item) => (
                    <FoodItem order={item.order} price={item.price} ingredients={item.ingredients} favorite={item.favorite} />
                ))}
                <p>hello</p>
            </ul>
        </div>
    )
}
