import {useState,useEffect} from 'react'
import getFetch from '../Data/Catalogo.js'

const ItemDetail = () => {
const [data, setData] = useState({})
const [loading, setLoading] = useState(true)

useEffect(()=> {
    getFetch
    .then(response => {
        setData(response.find(prod => prod.id === 1))
        setLoading(false)
    })
}, [])

console.log(data)
        return (
            <div className="item-container">
            <h1>Item Detail Container</h1>
        {
            loading ?  <h2>Cargando...</h2>
            :
            <div className="item-detail">
                    <img src={data.img} alt="" />
                    <h2>{data.Articulo}</h2>
                    <h3>{data.Precio}</h3>

                <div className="detail">
                        <h4>{data.Material}</h4>
                        <p>{data.Stock}</p>
                </div>
                    <p>{data.Descripcion}</p>

                </div>

        }
    </div>
  )
}

export default ItemDetail