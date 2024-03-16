import React from "react";
import styles from "@/styles/footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerRow}>
          <div className={styles.footerCol}>
            <h4>ПРО НАС</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>СОЦІАЛЬНІ МЕРЕЖІ</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>МІЙ КАБІНЕТ</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>ОБСЛУГОВУВАННЯ КЛІЄНТІВ</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
