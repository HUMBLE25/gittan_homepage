import React from 'react';
import styles from '@/src/styles/bin.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GittanGallery: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            {/* 배너 */}
            <div className={styles.banner}>
                <div className={styles.banner_img} style={{backgroundImage:`url(/gallery_main_img.svg)`}}/>
                <div className={styles.banner_overlay} />
                <div className={styles.banner_title}>기탄갤러리</div>
                <div className={styles.banner_contents}>기탄산업개발은 성공적인 시공사례들로 신뢰를 드리고 있으며 <br></br> 세로운 기술을 선도하고 안전을 최우선으로 하는 전문기술기업입니다.</div>
            </div>
            {/* 바디 */}
            <div className={styles.body}>
                <div className={styles.form_wrapper}>
                    <div className={styles.form_index}>Home{`>`}기탄갤러리</div>
                    <div className={styles.form_title}>기탄갤러리</div>
                  
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GittanGallery;