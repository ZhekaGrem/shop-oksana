// CarouselComponent.jsx

import React from "react";
import styles from "@/styles/carousel.module.css";
import Image from "next/image";
import data from "@/data/goods.json";

interface Size {
  name: string;
  item: number;
}

interface Product {
  articul: string;
  title: string;
  image: string;
  cost: string;
  size: Size[];
}

const CarouselComponent: React.FC<{ data: Product[] }> = ({ data }) => {
  return (
    <section className={styles.carousel}>
      {data.map((product, index) => (
        <div key={index} className={styles.mediaContainer}>
          <div className={styles.mediaElement}>
            <Image className={styles.mediaImg} width={200} height={300} src={product.image} alt={product.title} />
            
          </div>
          <ul className={styles.cardOptions} >
              {product.size.map((item, idx) => (
                <li className={`${styles.cardOption} ${item.item <= 0 ? styles.disabled : ''}`}  key={idx}>{item.name}</li>
              ))}
            </ul>
          <div className={styles.cardContent}>
          <h2>{product.title}</h2>
          <p>{product.cost}грн</p>
            
          </div>
        </div>
      ))}
    </section>
  );
};

export default CarouselComponent;
