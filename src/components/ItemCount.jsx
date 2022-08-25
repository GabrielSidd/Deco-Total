import React, {useState}  from 'react';

function ItemCount(props) {
    const [count, setCount] = useState (props.initial)

    function handleAdd () {
        setCount (count + 1)
    }

    function handleSubstract () {
        setCount (count - 1)
    }

    return (
        <div>
            <section class="text-gray-400 bg-gray-300 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p class="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button class="text-gray-800 title-font text-lg font-medium hover:text-green-800">Agregar al carrito</button>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p class="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button class="text-gray-800 title-font text-lg font-medium hover:text-green-800">Agregar al carrito</button>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p class="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button class="text-gray-800 title-font text-lg font-medium hover:text-green-800">Agregar al carrito</button>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p class="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button class="text-gray-800 title-font text-lg font-medium hover:text-green-800">Agregar al carrito</button>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p class="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button class="text-gray-800 title-font text-lg font-medium hover:text-green-800">Agregar al carrito</button>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p class="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button class="text-gray-800 title-font text-lg font-medium hover:text-green-800">Agregar al carrito</button>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p class="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button class="text-gray-800 title-font text-lg font-medium hover:text-green-800">Agregar al carrito</button>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-3">Articulo</h3>
                                <p class="mt-1 text-2xl mb-1" >$3599</p>
                                    <div className="mb-1"> 
                                        <button className="text-xl" onClick={handleSubstract} >  -  </button>
                                        <span className="text-xl" > {count} </span>
                                        <button className="text-xl" onClick={handleAdd} >  +  </button>
                                    </div>
                                <button class="text-gray-800 title-font text-lg font-medium hover:text-green-800">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ItemCount;