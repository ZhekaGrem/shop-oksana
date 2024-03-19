import React from 'react';
import Link from 'next/link';
import styles from '@/styles/product.module.css';
import Image from 'next/image';

interface Size {
  name: string;
  item: number;
}

interface ProductProps {
  link: string;
  img: string;
  title: string;
  cost: string;
  sizes: Size[];
}

const Product: React.FC<ProductProps> = ({ link, img, title, cost, sizes }) => {
  return (
    <div className={styles.product}>
      {/* <Link href={`/shop/${link}`}>
      </Link> */}
          <div className={styles.imageContainer}>
            <Image className={styles.mediaImg} width={300} height={350} src={img} alt={title} />
          </div>
      <div className={styles.detailsContainer}>
        <div className={styles.sizesContainer}>
          <ul className={styles.sizesList}>
            {sizes.map((size, idx) => (
              <li
                className={`${styles.sizeOption} ${size.item <= 0 ? styles.disabled : ''}`}
                key={idx}
              >
                <button>{size.name}</button>
              </li>
            ))}
          </ul>
        </div>
        <div><h2 className={styles.title}>{title}</h2></div>
        <div className={styles.costContainer}>
          <span className={styles.cost}>{cost}грн</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
