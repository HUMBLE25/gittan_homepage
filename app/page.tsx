'use client'

import React, { useState, useEffect,useRef } from 'react';
import styles from '@/src/styles/page.module.css';
import Link from 'next/link';
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
    }, 2500);
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
          <div className={styles.scroll_bar_wrapper}>
            <div className={styles.scroll_item} style={{backgroundImage: `url(/scroll_item.svg)`}}/>
            <div className={styles.side_bar_wrapper}>
              {Array(4).fill(null).map((_, i) => (
                <div key={i} className={styles.side_bar_item} style={{backgroundColor: i === index ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 20%)'}}/>
              ))}
            </div>
          </div>
      
      </div>

      <div ref={nextSectionRef}>
        <div className={styles.main_info_container}>
              <div className={styles.main_info_text_container}>
                <div className={styles.main_info_title}>GITTANCOMPANY <span>INFO</span></div>
                <div className={styles.main_info_text}>내진보강공사의 모든 것, 전문가를 직접 파견하여 해결해드립니다.</div>
              </div>
              <div className={styles.main_info_img_container}>
                <Link href="/introduceCo" className={styles.main_info_item1}>
                  <div className={styles.main_info_img} style={{backgroundImage : `url(/main_contents_img1.svg)`}}/>
                  <div className={styles.overlay}/>
                  <div className={styles.main_info_contents_title}>인사말</div>
                  <div className={styles.main_info_contents_text}>기탄산업개발은 축척된 기술로 안전을 최우선하여<br></br> 신뢰를 주는 전문시공업체입니다.</div>
                </Link>
                <div className={styles.main_info_section}>
                  <Link href="/microPiles" className={styles.main_info_item2}>
                    <div className={styles.main_info_img} style={{backgroundImage : `url(/main_contents_img2.svg)`}}/>
                    <div className={styles.overlay}/>
                    <div className={styles.main_info_contents_title2}>사업소개 : MICRO PILES</div>
                    <div className={styles.main_info_contents_text2}>MICRO PILES 공법으로 협소한 지역 시공까지 가능합니다.</div>
                  </Link>
                  <Link href="/helixPiles" className={styles.main_info_item2}> 
                    <div className={styles.main_info_img} style={{backgroundImage : `url(/main_contents_img3.svg)`}}/>
                    <div className={styles.overlay}/>
                    <div className={styles.main_info_contents_title2}>사업소개 : HELIX PILES</div>
                    <div className={styles.main_info_contents_text2}>HELIX PILES 공법으로 무소음, 무진동 시공이 가능합니다.</div>
                  </Link>
                </div>
              </div>
        </div>

      <div className={styles.main_container}>
        <div className={styles.performance_text}>시공 <span>실적</span></div>
        <div className={styles.item_container}>
            <div className={styles.flex_container}>
              <Link className={styles.item_link} href="https://blog.naver.com/gittan">
                <Item src={performance_img1}  text='강원OO초등학교' />
              </Link>
              
              <Link className={styles.item_link} href="https://blog.naver.com/gittan/223347597544"> 
                <Item src={performance_img2}  text='거제OO학교' />
              </Link>
              
              <Link className={styles.item_link} href="https://blog.naver.com/gittan/223353406695">
                <Item src={performance_img3}  text='꿈이랑도서관' />
              </Link>
              
              <Link className={styles.item_link} href="https://blog.naver.com/gittan">  
                <Item src={performance_img4}  text='대구OO도서관' />
              </Link>
              
            </div>
            <div className={styles.flex_container_sub}>
            <Link className={styles.item_link} href="https://blog.naver.com/gittan">  
              <Item src={performance_img5}  text='성남 OO중학교' />
            </Link>
            <Link className={styles.item_link} href="https://blog.naver.com/gittan">  
              <Item src={performance_img6}  text='화성 OO중학교' />
            </Link>
            <Link className={styles.item_link} href="https://blog.naver.com/gittan">  
              <Item src={performance_img7}  text='철원 OO고등학교' />
            </Link>
            <Link className={styles.item_link} href="https://blog.naver.com/gittan/223264843125">  
              <Item src={performance_img8}  text='홍천 OO중학교' />
            </Link>
            </div>
        </div>
       
      </div>
      </div>


      
      <Footer/>
    </div>
  );
}

export default Home;
