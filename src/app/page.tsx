import styles from "./page.module.css";
import CarouselComponent from "@/components/Carousel";
import data from "@/data/goods.json";

export default function Home() {
  return (
  
      <div className={styles.container}>
        
      <section className={ ` ${styles.block} ${styles.img1}`} ><div className={styles.con}> 
      </div>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p>Ніжна оксана</p>
          <p>нові речі</p>
        </div>
        <div><button>EXPLORE NOW</button></div>
      </div>
      </section>
        
      <section className={`${styles.block} ${styles.img2}`} ><div className={styles.con}></div>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p>Ніжна оксана</p>
          <p>нові речі</p>
        </div>
        <div><button>EXPLORE NOW</button></div>
      </div></section>
     
       <CarouselComponent data={data}/>

      <section className={`${styles.block} ${styles.img3}`} ><div className={styles.con}></div>
      <div className={styles.content}></div>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p>Ніжна оксана</p>
          <p>нові речі</p>
        </div>
        <div><button>EXPLORE NOW</button></div>
      </div></section>
      {/* <section className={`${styles.block, styles.img2}`} >12</section>
      <section className={`${styles.block, styles.img2}`} >12</section> */}
  
    </div>
  );
}
