'use client'

import React, { useState, useEffect,useRef } from 'react';
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

  const main_image = ['/mainpage_img1.svg', '/mainpage_img2.svg', '/mainpage_img3.svg', '/mainpage_img4.svg'];
  const main_texts = [
    '안전을 최우선으로 하는 전문건설기업 기탄산업개발 \n 성공적인 시공사례들로 믿을 수 있는 기업',
    '성실과 책임을 다하는 전문건설기업 기탄산업개발 \n 전국 전문가팀 파견시공 가능한 기업',
    '내진보강시공 전문건설기업 기탄산업개발 \n Micro Piles & Helix Piles 전문시공업체',
    '새로운 기술을 선도하는 전문건설기업 기탄산업개발 \n 축척된 기술로 전문팀의 내진공사 전문시공'
];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % main_image.length);
    }, 5000);
    return () => {
      clearInterval(interval); 
    };
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        if (nextSectionRef.current){
          nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
  
    const div = sectionRef.current;
    if (div) {
      div.addEventListener('wheel', onScroll, { passive: false });
    }
  
    return () => {
      if (div) {
        div.removeEventListener('wheel', onScroll);
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header/>
      <Estimate/>
      <div className={styles.banner} ref={sectionRef} >
          <div className={styles.main_image}  style={{backgroundImage:`url(${main_image[index]})`}}/>
          <div className={styles.overlay}/>
          <div className={styles.overlay_text}>{main_texts[index]}</div>
          <div className={styles.side_bar_wrapper}>
            {Array(4).fill(null).map((_, i) => (
              <div key={i} className={styles.side_bar_item} style={{backgroundColor: i === index ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 20%)'}}/>
            ))}
          </div>
      </div>
      <div ref={nextSectionRef}>
        <div className={styles.main_body_container}>
              <div className={styles.main_body_text_container}></div>
        </div>
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
      </div>


      
      <Footer/>
    </div>
  );
}

export default Home;
