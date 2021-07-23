import { Fragment } from "react"

export default ({ order, price, ingredients,favorite }) => {

    return (
        <Fragment>
            <ul>
                <li>{order}</li>
                <li>{price}</li>
                <li>{ingredients}</li>
                <li>{favorite}</li>
            </ul>
        </Fragment>
    )

}