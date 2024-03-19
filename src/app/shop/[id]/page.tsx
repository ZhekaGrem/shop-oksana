import Image from "next/image";
import styles from "./shop.module.css";

const ShopID: React.FC = () => {
  
  return (
    <div className={styles.MainContent}>
     <section>
      <div >
        <Image width={200} height={300} src='/shirt/1.png' alt='shirt' />
      </div>
     </section>
     <section>
      <div >
        <Image width={200} height={300} src='/shirt/1.png' alt='shirt' />
      </div>
     </section>
     <section>
      <div >
        <Image width={200} height={300} src='/shirt/1.png' alt='shirt' />
      </div>
     </section>


     
     <section>
    <div>
<h2>BB ASTRO
</h2>
<h1>BB ASTRO SMALL LOGO POPOVER HOOD - STONE</h1>
<div>
  <span className={styles.price}>800грн</span>
</div>
<p>BB ASTRO - The Astro Small Logo Popover Hood features a screen printed BB Astro logo at the front. It comes with a pouch pocket and self-lined hood.</p>
    </div>
    <div> <form action="">
<ul>
  <li>xs</li>
  <li>s</li>
  <li>m</li>
  <li>l</li>
  <li>xl</li>
  <li>xxl</li>
</ul>

<button>ADD TO CART</button>
      </form>
      </div>
     </section>
    </div>
  );
}

export default ShopID;

