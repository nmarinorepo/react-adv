import { useProduct } from '../hooks/useProduct';
import { ReactElement, createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';
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


export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties
}



export const ProductCard = ({children, product, className, style}: Props) => {
  const {counter, increaseBy} = useProduct()
  return (
    <Provider value={{counter, increaseBy, product}}>
      <div className={`${styles.productCard} ${className}`} style={style}>

          {children}

      </div>
    </Provider>
  )
}


// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;