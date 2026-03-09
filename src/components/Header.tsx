'use clint';
import Link from 'next/link';
import styles from '@/src/styles/header.module.css';

// One-line summary: Top navigation wired to the new app-router URL structure.
const Header: React.FC = () => {
  return (
    <div className={styles.header_container}>
      <Link href="/" className={styles.logo_wrapper}>
        <div className={styles.logo_image}></div>
      </Link>
      <div className={styles.spacer} />
      <div className={styles.menu_wrapper}>
        <Link href="/company" className={styles.menuItem}>회사소개</Link>
        <Link href="/micropile" className={styles.menuItem}>마이크로파일</Link>
        <Link href="/helix-pile" className={styles.menuItem}>헬리컬파일</Link>
        <Link href="/projects" className={styles.menuItem}>시공실적</Link>
        <Link href="/gallery" className={styles.menuItem}>갤러리</Link>
        <Link href="/blog" className={styles.menuItem}>블로그</Link>
      </div>
    </div>
  );
};

export default Header;
