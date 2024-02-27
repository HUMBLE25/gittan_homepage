import React from 'react';
import PerformanceItem from '@/src/components/PerformanceItem';
import styles from '@/src/styles/page.module.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const Home: React.FC = () => {
  const performance_img1 = require('../public/performance_img1.svg');
  const performance_img2 = require('../public/performance_img2.svg');
  const performance_img3 = require('../public/performance_img3.svg');
  const performance_img4 = require('../public/performance_img4.svg');

  return (
    <div className={styles.container}>

      <Header/>

    <div className="main_container">
        <div className={styles.main_image}/>
        <div className={styles.overlay}/>
        <div className={styles.overlay_text}>내진보강공사 및 마이크로파일 & 헬리컬파일 시공 전문 업체<br />전국 전문가팀 파견시공<br />내진보강공사 무료상담</div>
        <div className={styles.performance_text}>주요 시공 실적</div>
        <div className={styles.flexContainer}>
          <PerformanceItem src={performance_img1} alt='' text='강원OO초등학교' />
          <PerformanceItem src={performance_img2} alt='' text='거제OO학교' />
          <PerformanceItem src={performance_img3} alt='' text='꿈이랑도서관' />
          <PerformanceItem src={performance_img4} alt='' text='대구OO도서관' />
        </div>
    </div>



      <Footer/>

    </div>
  );
}

export default Home;
