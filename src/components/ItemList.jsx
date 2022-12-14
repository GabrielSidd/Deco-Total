import {useState,useEffect} from 'react'
import getFetch from '../Data/Catalogo.js'
import Item from './Item.jsx'

const ItemList = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        getFetch.then(data => {
            setData(data)
            setLoading(false)
        })
    }, [])
  return (
    <>
       

    {
        loading ? <h2>Cargando...</h2> 
        
        :
        
        <div  className="grid-product" >
            {data.map(data => (
                    <Item key={data.articulo} data={data}/>
            ))}
        </div>

    }
    </>
  )
}

export default ItemList