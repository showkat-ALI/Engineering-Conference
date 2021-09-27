import React, { useEffect, useState } from 'react';
import Cart from '../Add-history/Cart';
import Engineers from '../Engineers/Engineers';
import './Main.css'

const Main = () => {
    const[engineers,setEngineers]=useState([])
    const[cart,setCart]=useState([])

    useEffect(()=>{
        fetch('./engineers.JSON')
        .then(res => res.json())        
        .then(data => setEngineers(data))
    },[])
    const addtoCart = engineer =>{
        const newEngineer = [...cart,engineer]
        setCart(newEngineer)
    }
    return (
        <div className="main-container mx-3">
            <div className="engineers-container row row-cols-1 row-cols-md-3 g-4 me-5">
                {
                    engineers.map(engineer => <Engineers
                         key = {engineer.id}
                          engineer={engineer}
                          addtoCart={addtoCart}
                          >

                          </Engineers>)
                }


            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Main;