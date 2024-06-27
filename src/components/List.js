import Item from "../Item"

export default function list() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item />
                <li>item 2</li>
            </ul>
        </>
    )
}