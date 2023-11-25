// import { useState } from "react";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
// import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css'
// import { count } from "console";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from '../data/products';


export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart()
 
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {
              products.map(product => (
                <ProductCard key={product.id} product={product} className="bg-dark text-white" onChange={(evento)=>onProductCountChange(evento)} value={shoppingCart[product.id]?.count || 0}>
                  <ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                  <ProductTitle className="text-bold"/>
                  <ProductButtons className="custom-buttons" />
                </ProductCard>
              ))
            }

            

            {/* <ProductCard product={product} style={{backgroundColor:'#70D1F8'}}>
              <ProductImage style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
              <ProductTitle style={{fontWeight: 'bold'}}/>
              <ProductButtons style={{display: 'flex', justifyContent: 'end'}}/>
            </ProductCard> */}

        </div>

            <div className="shopping-cart">

            {
              Object.entries(shoppingCart).map(([key, product]) => (
                <ProductCard key={key} product={product} className="bg-dark text-white" style={{width: '100px'}} value={product.count} onChange={(evento)=>onProductCountChange(evento)}>
                  <ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                  
                  <ProductButtons className="custom-buttons" style={{display: 'flex', justifyContent: 'center'}} />
                </ProductCard>
              ))
            }

            </div>
          {/* <div>
            <code>
              { JSON.stringify(shoppingCart, null, 5)}
            </code>
          </div> */}
    </div>
  )
}
