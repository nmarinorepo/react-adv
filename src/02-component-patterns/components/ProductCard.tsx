import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
// import { ProductTitle } from './ProductTitle';
// import { ProductImage } from './ProductImage';
// import { ProductButtons } from './ProductButtons';




//creación del contexto para compartir datos entre componente padre e hijos...
export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext




// interface ProductButtonsProps {
//   counter: number,
//   increaseBy: (value: number) => void,    
// }






export const ProductCard = ({children, product}: ProductCardProps) => {
  const {counter, increaseBy} = useProduct()
  return (
    <Provider value={{counter, increaseBy, product}}>
      <div className={styles.productCard}>

          {children}

      </div>
    </Provider>
  )
}


// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;