// header.component.tsx

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/header.module.css'; 
import SVGcart from '@/ui/SVGcart';
import SVGlego from '@/ui/SVGlego';
import SVGperson from '@/ui/SVGperson';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerInnerImg}>
          <Link href="/">
          <div className={styles.headerInnerImg}>
          <SVGlego />
        
        </div>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navInner}>
            <li className={styles.navInnerLink}>
              <Link href="/">BRANDS</Link>
            </li>
            <li className={styles.navInnerLink}>
              <Link href="/">SHOP</Link>
            </li>
            <li className={styles.navInnerLink}>
              <Link href="/" >
                NEW ARRIVALS
              </Link>
            </li>
          </ul>
        </nav>
       
        <div className={styles.headerInnerImg}>
          <SVGcart/>
        </div>
        <div className={styles.headerInnerImg}>
          <SVGperson/>
        </div>
      </div>
    </header>
  );
};

export default Header;
