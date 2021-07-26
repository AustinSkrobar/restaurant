import FoodItem from "./FoodItem"

export default ({ lunchData }) => {

    return (
        <div className="container mx-auto">
            {console.log(lunchData)}
            <ul>
                {lunchData.map((item) => (
                    <FoodItem order={item.order} price={item.price} ingredients={item.ingredients} favorite={item.favorite} />
                ))}
                <p>hello</p>
            </ul>
        </div>
    )

}
