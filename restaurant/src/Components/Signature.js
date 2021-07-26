import FoodItem from "./FoodItem"

export default ({ signatureData }) => {

    return (
        <div className="container mx-auto">
            {console.log(signatureData)}
            <ul>
                {signatureData.map((item) => (
                    <FoodItem order={item.order} price={item.price} ingredients={item.ingredients} favorite={item.favorite} />
                ))}
                <p>hello</p>
            </ul>
        </div>
    )
}
