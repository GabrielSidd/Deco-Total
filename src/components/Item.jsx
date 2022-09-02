
import React from 'react'
import Count from './ItemCount'
import HandleSubstract from './ItemCount'
import HandleAdd from './ItemCount'


const Item = ({ data }) => {
  return (
    <div>
      <div className="product" key={data.name}>
        <div>
          <section className="text-gray-400 bg-gray-300 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class=" anchor-100 " src={data.img} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xl tracking-widest title-font mb-3">{data.Articulo} </h3>
                    <p className="mt-1 text-2xl mb-1" > {data.Precio}  </p>
                    <div className="mb-1">
                      <Count/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
      </div>
    </div>   
        </div >
  )
}

export default Item