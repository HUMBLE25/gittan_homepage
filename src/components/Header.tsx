// Header.tsx

import styles from '@/src/styles/header.module.css';

const Header: React.FC = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.logo_wrapper}>
                <div className={styles.logo_image} />
                <div className={styles.logo_text} > 기탄산업개발</div>
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