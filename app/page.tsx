import React from 'react';
import Image from 'next/image'
import PerformanceItem from '@/src/components/PerformanceItem';
import styles from '@/src/styles/page.module.css';


const Home: React.FC = () => {
  const gittan_logo = require('../public/gittan_logo.svg');
  const main_img = require('../public/main_img.svg');
  const performance_img1 = require('../public/performance_img1.svg');
  const performance_img2 = require('../public/performance_img2.svg');
  const performance_img3 = require('../public/performance_img3.svg');
  const performance_img4 = require('../public/performance_img4.svg');

  return (
    <div className={styles.container}>

        <div className={styles.header_container}>
        <div className={styles.flexStart}>
          <Image className={styles.logo_image} src={gittan_logo} alt='' />
          <div className={styles.logoText}> 기탄산업개발</div>
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



      <div className={styles.footer_container}>
        <div className={styles.footer_text_wrapper}>
          <div className={styles.footer_title_text }>기탄산업개발</div>
          <div className={styles.footer_content_text}>상호명: 기탄산업 개발 | 대표자: 정원근 | 사업자번호: 699-05-02875 | 이메일 : gittan@naver.com<br />TEL: 031-853-5028 | FAX: 0504-327-5028 | 주소: 경기도 의정부시 오목로 235 제일프라자 2층 202호</div>
        </div>
      </div>

    </div>
  );
}

export default Home;
