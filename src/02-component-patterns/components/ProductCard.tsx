import { useProduct } from '../hooks/useProduct';
import { ReactElement, createContext } from 'react';
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';
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
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element,
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?:number;
  initialValues?: InitialValues
}



export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {
  const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues});
  return (
    <Provider value={{counter, increaseBy, product, maxCount}}>
      <div className={`${styles.productCard} ${className}`} style={style}>

          {
            children({
              count: counter,
              isMaxCountReached, 
              maxCount: initialValues?.maxCount,
              product,
              increaseBy,
              reset
            })
          }
      </div>
    </Provider>
  )
}


// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;