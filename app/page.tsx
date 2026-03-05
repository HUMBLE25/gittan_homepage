'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '@/src/styles/page.module.css';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import Item from '@/src/components/Item';

// One-line summary: Main landing page focused on company info and fast conversion to direct contact.
const Home: React.FC = () => {
  const performanceImg = [
    '/performance_img1.svg',
    '/performance_img2.svg',
    '/performance_img3.svg',
    '/performance_img4.svg',
    '/cPerformance4.svg',
    '/cPerformance7.svg',
    '/cPerformance8.svg',
    '/cPerformance9.svg',
  ];

  const mainImages = ['/mainpage_img1.svg', '/mainpage_img2.svg', '/mainpage_img3.svg', '/mainpage_img4.svg'];
  const mainTexts = [
    '안전을 최우선으로 시공하는 토목 전문 기업\n기탄기업개발',
    '상담부터 시공까지 빠르게 대응하는\nMicro Piles & Helix Piles 전문 시공',
    '현장 조건에 맞춘 맞춤형 공법 제안으로\n공사 리스크를 줄입니다',
    '전국 출장이 가능한 전문 시공팀이\n책임 있게 완료합니다',
  ];

  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % mainImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [mainImages.length]);

  useEffect(() => {
    const onScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
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
      <Header />

      <div className={styles.banner} ref={sectionRef}>
        <div className={styles.main_image} style={{ backgroundImage: `url(${mainImages[index]})` }} />
        <div className={styles.main_overlay} />
        <div className={styles.overlay_text}>{mainTexts[index]}</div>
        <div className={styles.scroll_bar_wrapper}>
          <div className={styles.scroll_item} style={{ backgroundImage: 'url(/scroll_item.svg)' }} />
          <div className={styles.side_bar_wrapper}>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className={styles.side_bar_item}
                  style={{ backgroundColor: i === index ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 20%)' }}
                />
              ))}
          </div>
        </div>
      </div>

      <div ref={nextSectionRef}>
        <div className={styles.main_info_container}>
          <div className={styles.main_info_text_container}>
            <div className={styles.main_info_title}>
              GITTANCOMPANY <span>INFO</span>
            </div>
            <div className={styles.main_info_text}>토목 보강공사 전 공정을 직접 시공하는 전문 업체입니다.</div>
          </div>
          <div className={styles.main_info_img_container}>
            <Link href="/introduceCo" className={styles.main_info_item1}>
              <div className={styles.main_info_img} style={{ backgroundImage: 'url(/main_contents_img1.svg)' }} />
              <div className={styles.overlay} />
              <div className={styles.main_info_contents_title}>회사소개</div>
              <div className={styles.main_info_contents_text}>기탄기업개발의 시공 철학과 운영 원칙을 안내합니다.</div>
            </Link>
            <div className={styles.main_info_section}>
              <Link href="/microPiles" className={styles.main_info_item2}>
                <div className={styles.main_info_img} style={{ backgroundImage: 'url(/main_contents_img2.svg)' }} />
                <div className={styles.overlay} />
                <div className={styles.main_info_contents_title2}>사업안내 : MICRO PILES</div>
                <div className={styles.main_info_contents_text2}>좁은 공간에서도 안정적으로 시공 가능한 공법입니다.</div>
              </Link>
              <Link href="/helixPiles" className={styles.main_info_item2}>
                <div className={styles.main_info_img} style={{ backgroundImage: 'url(/main_contents_img3.svg)' }} />
                <div className={styles.overlay} />
                <div className={styles.main_info_contents_title2}>사업안내 : HELIX PILES</div>
                <div className={styles.main_info_contents_text2}>무소음·무진동 중심의 친환경 보강 공법을 제공합니다.</div>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main_container}>
          <div className={styles.performance_text}>
            시공 <span>실적</span>
          </div>
          <div className={styles.item_container}>
            <div className={styles.flex_container}>
              <Link className={styles.item_link} href="https://blog.naver.com/gittan">
                <Item src={performanceImg[0]} text='강원 초등학교' />
              </Link>
              <Link className={styles.item_link} href="https://blog.naver.com/gittan/223347597544">
                <Item src={performanceImg[1]} text='거제 중학교' />
              </Link>
              <Link className={styles.item_link} href="https://blog.naver.com/gittan/223353406695">
                <Item src={performanceImg[2]} text='구미 보강공사' />
              </Link>
              <Link className={styles.item_link} href="https://blog.naver.com/gittan">
                <Item src={performanceImg[3]} text='대구 체육관' />
              </Link>
            </div>
            <div className={styles.flex_container_sub}>
              <Link className={styles.item_link} href="https://blog.naver.com/gittan">
                <Item src={performanceImg[4]} text='성남 중학교' />
              </Link>
              <Link className={styles.item_link} href="https://blog.naver.com/gittan">
                <Item src={performanceImg[5]} text='화성 중학교' />
              </Link>
              <Link className={styles.item_link} href="https://blog.naver.com/gittan">
                <Item src={performanceImg[6]} text='천원 고등학교' />
              </Link>
              <Link className={styles.item_link} href="https://blog.naver.com/gittan/223264843125">
                <Item src={performanceImg[7]} text='인천 중학교' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
