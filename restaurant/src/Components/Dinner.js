import { Fragment } from "react"
import DinnerItem from "./DinnerItem"

export default ({ dinnerData }) => {

    return (
        <Fragment>
            {console.log(dinnerData)}
            <ul>
                {dinnerData.map((item) => (
                    <DinnerItem order={item.order} price={item.price} ingredients={item.ingredients} favorite={item.favorite} />
                ))}
                <p>hello</p>
            </ul>
        </Fragment>
    )

}
