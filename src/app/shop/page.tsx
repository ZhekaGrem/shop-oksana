import styles from './shop.module.css';
import data from '@/data/goods.json';
import Image from 'next/image';
import Product  from '@/ui/Product';


interface Size {
  name: string;
  item: number;
}

interface Product {
  articul: string | number;
  title: string;
  image: string;
  cost: string;
  size: Size[];
}

const  Shop: React.FC = () => {
  return (
    <div className={styles.MainContent}>
    <section className={styles.InfonoImage}>

    </section>
    <section  className={styles.Collection}>
      <ul className={styles.listItems}>
    {
      data.map((product, index)=>(
        <li key={product.articul} className={styles.listItem}>
        <Product cost={product.cost} img={product.image} link={product.title}  sizes={product.size} title={product.title}/>
        </li>
      ))
    }

      </ul>
     
    </section>
    </div>
  );
}


export default Shop;