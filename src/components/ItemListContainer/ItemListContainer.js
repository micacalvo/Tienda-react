import estilos from './itemlist.module.css'

const ItemListContainer = (props) => {
    return (
<main className={estilos.bodyContainer}>
    <h2>{props.saludo}</h2>
</main>
    )
}

export default ItemListContainer;