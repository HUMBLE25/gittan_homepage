'use client'

import React from 'react';
import PerformanceItem from '@/src/components/PerformanceItem';
import styles from '@/src/styles/page.module.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import Banner from '@/src/components/banner';
import Estimate from '@/src/components/estimate';

const Home: React.FC = () => {
  const performance_img1 = '/performance_img1.svg';
  const performance_img2 = '/performance_img2.svg';
  const performance_img3 = '/performance_img3.svg';
  const performance_img4 = '/performance_img4.svg';
  const main_image = '/main_img.svg';
  const bannerText = `내진보강공사 및 마이크로파일 & 헬리컬파일 시공 전문 업체\n전국 전문가팀 파견시공\n내진보강공사 무료상담`;
  
  return (
    <div className={styles.wrapper}>

      <Header/>
      <Estimate/>
      <Banner img={main_image} text={bannerText}/>

      <div className={styles.main_container}>
        <div className={styles.performance_text}>주요 시공 실적</div>
        <div className={styles.flex_container}>
          <PerformanceItem src={performance_img1}  text='강원OO초등학교' />
          <PerformanceItem src={performance_img2}  text='거제OO학교' />
          <PerformanceItem src={performance_img3}  text='꿈이랑도서관' />
          <PerformanceItem src={performance_img4}  text='대구OO도서관' />
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default Home;
