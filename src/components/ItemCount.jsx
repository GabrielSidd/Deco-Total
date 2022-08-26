import React, {useState}  from 'react';

const Counter =({stock, onAdd, min, sum, res}) => { 
    const [count, setCount] = useState(min)

    function handleAdd () {
        if (count < stock)
        setCount (count + sum)
    }

    function handleSubstract () {
        if (count >= min)
        setCount (count - res)
    }

    return (
        <div>
            <section className="text-gray-400 bg-gray-300 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p className="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button className="text-gray-800 title-font text-lg font-medium hover:text-green-800" onClick={() => onAdd(count)} >Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p className="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button className="text-gray-800 title-font text-lg font-medium hover:text-green-800" onClick={() => onAdd(count)} >Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p className="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button className="text-gray-800 title-font text-lg font-medium hover:text-green-800" onClick={() => onAdd(count)} >Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p className="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button class="text-gray-800 title-font text-lg font-medium hover:text-green-800" onClick={() => onAdd(count)} >Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p className="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button className="text-gray-800 title-font text-lg font-medium hover:text-green-800" onClick={() => onAdd(count)} >Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p className="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button className="text-gray-800 title-font text-lg font-medium hover:text-green-800" onClick={() => onAdd(count)} >Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p className="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button className="text-gray-800 title-font text-lg font-medium hover:text-green-800" onClick={() => onAdd(count)} >Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p className="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button className="text-gray-800 title-font text-lg font-medium hover:text-green-800" onClick={() => onAdd(count)} >Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Counter;