'use client'

import React, { useState, useEffect } from 'react';
import styles from '@/src/styles/page.module.css';
import Banner from '@/src/components/Banner';
import '@/src/styles/globals.css'
import Estimate from '@/src/components/Estimate';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import Item from '@/src/components/Item';

const Home: React.FC = () => {
  const performance_img1 = '/performance_img1.svg';
  const performance_img2 = '/performance_img2.svg';
  const performance_img3 = '/performance_img3.svg';
  const performance_img4 = '/performance_img4.svg';
  const performance_img5 = '/cPerformance4.svg';
  const performance_img6 = '/cPerformance7.svg';
  const performance_img7 = '/cPerformance8.svg';
  const performance_img8 = '/cPerformance9.svg';
  const [bannerText, setBannerText] = useState(`내진보강공사 및 마이크로파일 & 헬리컬파일 시공 전문 업체\n전국 전문가팀 파견시공\n내진보강공사 무료상담`);
  const main_image = '/main_img.svg';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) { 
        setBannerText(`내진보강공사 및 마이크로파일 \n 헬리컬파일 시공 전문 업체\n전국 전문가팀 파견시공\n내진보강공사 무료상담`);
      } else {
        setBannerText(`내진보강공사 및 마이크로파일 & 헬리컬파일 시공 전문 업체\n전국 전문가팀 파견시공\n내진보강공사 무료상담`);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={styles.wrapper}>

      <Header/>
      <Estimate/>
      <Banner img={main_image} text={bannerText}/>

      <div className={styles.main_container}>
        <div className={styles.performance_text}>주요 시공 실적</div>
        <div className={styles.flex_container}>
          <Item src={performance_img1}  text='강원OO초등학교' />
          <Item src={performance_img2}  text='거제OO학교' />
          <Item src={performance_img3}  text='꿈이랑도서관' />
          <Item src={performance_img4}  text='대구OO도서관' />
        </div>
        <div className={styles.flex_container_sub}>
          <Item src={performance_img5}  text='성남 OO중학교' />
          <Item src={performance_img6}  text='화성 OO중학교' />
          <Item src={performance_img7}  text='철원 OO고등학교' />
          <Item src={performance_img8}  text='홍천 OO중학교' />
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default Home;
