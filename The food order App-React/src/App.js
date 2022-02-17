import Header from './components/Layout/Header'
import React, { useState} from 'react'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './components/store/CartProvider'
function App() {

const [cartIsShown,setCartIsShown] = useState(false);

const hideCartHandler=()=>{
  setCartIsShown(false)
}

const showCartHandler=()=>{
  setCartIsShown(true)
}

  return (
  
    <CartProvider> 
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>

       <main> 
             <Meals/>
       </main>
    
    
    </CartProvider>
  
   
  );
}

export default App;
