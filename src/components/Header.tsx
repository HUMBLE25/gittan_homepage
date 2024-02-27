// Header.tsx
import Image from 'next/image';
import styles from '@/src/styles/header.module.css';

const Header = () => {
    const gittan_logo = require('../../public/gittan_logo.svg');
    return (
        <div className={styles.header_container}>
            <div className={styles.flexStart}>
                <Image className={styles.logo_image} src={gittan_logo} alt='' />
                <div className={styles.logoText}> 기탄산업개발</div>
            </div>
            <div className={styles.spacer} />
            <div className={styles.menu_wrapper}>
                <div className={styles.menuItem}>회사소개</div>
                <div className={styles.menuItem}>사업소개</div>
                <div className={styles.menuItem}>시공실적</div>
                <div className={styles.menuItem}>견적문의</div>
                <div className={styles.menuItem}>공식블로그</div>
            </div>
        </div>
    );
};

export default Header;