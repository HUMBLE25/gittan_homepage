import React from 'react';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import styles from '@/src/styles/constructionPerformance.module.css';

const ConstructionPerformance: React.FC = () => {
    return (
        <div className={styles.wrapper}>

            <Header />

            <div className={styles.banner_container}>
                <div className={styles.overlay}/>
                <div className={styles.main_image}/>
                <div className={styles.overlay_text}>시공실적</div>
            </div>

            <div className={styles.img_wrapper}>
                <div className={styles.img_container}>
                    <div className={styles.img} style={ {backgroundImage : `url(/cPerformance1.svg)`}}>강원 OO초등학교</div>
                    <div className={styles.img} style={ {backgroundImage : `url(/cPerformance2.svg)`}}>꿈이랑도서관</div>
                    <div className={styles.img} style={ {backgroundImage : `url(/cPerformance3.svg)`}}>대구OOO도서관</div>
                </div>
                <div className={styles.img_container}>
                <div className={styles.img} style={ {backgroundImage : `url(/cPerformance4.svg)`}}>성남 OO중학교 </div>
                <div className={styles.img} style={ {backgroundImage : `url(/cPerformance5.svg)`}}>거제 OO학교 </div>
                <div className={styles.img} style={ {backgroundImage : `url(/cPerformance6.svg)`}}>수원 OO초등학교 </div>
                </div>
                <div className={styles.img_container}>
                <div className={styles.img} style={ {backgroundImage : `url(/cPerformance7.svg)`}}>화성 OO중학교 </div>
                <div className={styles.img} style={ {backgroundImage : `url(/cPerformance8.svg)`}}>철원 OO고등학교 </div>
                <div className={styles.img} style={ {backgroundImage : `url(/cPerformance9.svg)`}}>홍천 OO중학교 </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ConstructionPerformance;