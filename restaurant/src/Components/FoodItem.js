export default ({ order, price, ingredients,favorite }) => {

    return (
        <div>
            <ul>
                <li>{order}</li>
                <li>{price}</li>
                <li>{ingredients}</li>
                <li>{favorite}</li>
            </ul>
        </div>
    )

}