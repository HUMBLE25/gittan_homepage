import Link from 'next/link';
import styles from '@/src/styles/header.module.css';

const Header: React.FC = () => {

    return (
        <div className={styles.header_container}>
            <Link href="/" className={styles.logo_wrapper}>
                <div className={styles.logo_image}></div>
                {/* <div className={styles.logo_text} >기탄산업개발</div> */}
            </Link>
            <div className={styles.spacer} />
            <div className={styles.menu_wrapper}>
                <Link href="/introduceCo" className={styles.menuItem}>회사소개</Link>
                <Link href="/microPiles" className={styles.menuItem}>사업소개</Link>
                <Link href="/constructionPerformance" className={styles.menuItem}>시공실적</Link>
                <Link href="/gittanGallery" className={styles.menuItem}>기탄갤러리</Link>
                <div className={styles.menuItem}><a href='https://blog.naver.com/gittan'>공식블로그</a></div>
            </div>
        </div>
    );
};

export default Header;