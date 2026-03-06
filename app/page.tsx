'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/src/styles/page.module.css';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';

// One-line summary: Landing page with slower four-stop Y-axis logo rotation synced to construction background transitions.
const STAGE_IMAGES = ['/mainpage_img1.svg', '/mainpage_img2.svg', '/mainpage_img3.svg', '/mainpage_img4.svg'];
const LOADING_STEPS = [
  'ㄱ',
  '기',
  '기ㅌ',
  '기타',
  '기탄',
  '기탄 ㅅ',
  '기탄 사',
  '기탄 산',
  '기탄 산ㅇ',
  '기탄 산어',
  '기탄 산업',
  '기탄 산업 ㄱ',
  '기탄 산업 개',
  '기탄 산업 개ㅂ',
  '기탄 산업 개바',
  '기탄 산업 개발',
];

const SERVICE_PILLARS = [
  {
    title: '마이크로파일 전문 시공',
    description: '협소 구간과 구조물 인접 현장에서도 안정적으로 보강 시공합니다.',
  },
  {
    title: '헬릭스파일 전문 시공',
    description: '무소음·무진동 중심 공법으로 도심·민원 구간 리스크를 줄입니다.',
  },
  {
    title: '현장 맞춤 기술 제안',
    description: '지반, 공정, 예산 조건에 맞는 공법 조합으로 시행착오를 최소화합니다.',
  },
  {
    title: '전국 책임 시공 운영',
    description: '한 팀이 상담부터 시공 완료까지 책임지고 결과를 만듭니다.',
  },
];

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [logoAngle, setLogoAngle] = useState(0);
  const timeoutRef = useRef<number[]>([]);

  useEffect(() => {
    const STEP_MS = 100;
    const FINAL_HOLD_MS = 0;

    const intervalId = window.setInterval(() => {
      setLoadingStepIndex((prev) => {
        if (prev >= LOADING_STEPS.length - 1) {
          window.clearInterval(intervalId);
          window.setTimeout(() => setIsLoading(false), FINAL_HOLD_MS);
          return prev;
        }

        return prev + 1;
      });
    }, STEP_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    STAGE_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const SPIN_MS = 1800;
    const HOLD_MS = 1700;

    let currentStage = 0;
    let currentAngle = 0;

    const schedule = (fn: () => void, delay: number) => {
      const id = window.setTimeout(fn, delay);
      timeoutRef.current.push(id);
    };

    const run = () => {
      schedule(() => {
        const nextStage = (currentStage + 1) % 4;
        currentAngle += 90;
        setLogoAngle(currentAngle);

        schedule(() => {
          setStageIndex(nextStage);
          currentStage = nextStage;
          run();
        }, SPIN_MS);
      }, HOLD_MS);
    };

    run();

    return () => {
      timeoutRef.current.forEach((id) => window.clearTimeout(id));
      timeoutRef.current = [];
    };
  }, []);

  const activePillar = useMemo(() => SERVICE_PILLARS[stageIndex], [stageIndex]);

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div className={styles.loadingOverlay} aria-live="polite">
          <div className={styles.loadingBrand}>{LOADING_STEPS[loadingStepIndex]}</div>
          <div className={styles.loadingBar}>
            <span className={styles.loadingProgress} />
          </div>
        </div>
      )}

      <Header />

      <main className={styles.heroSection}>
        <div className={styles.heroBackdrop}>
          {STAGE_IMAGES.map((src, idx) => (
            <div key={src} className={`${styles.heroBackdropLayer} ${idx === stageIndex ? styles.heroBackdropLayerActive : ''}`}>
              <Image src={src} alt={`기탄 시공 이미지 ${idx + 1}`} fill priority={idx === 0} sizes="100vw" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <div className={styles.heroShade} />

        <section className={styles.heroContent}>
          <p className={styles.heroEyebrow}>GITTAN INDUSTRIAL DEVELOPMENT</p>
          <h1 className={styles.heroTitle}>여러분의 산업 성공 파트너, <br></br>기탄산업개발</h1>
          <p className={styles.heroDescription}>
            마이크로파일과 헬릭스파일 전문 시공으로 지반 보강의 새로운 기준을 제시합니다.
          </p>
          <div className={styles.inlineCtaWrap}>
            <a className={styles.inlineCtaPrimary} href="tel:+821079905028">
              지금 전화 상담
            </a>
            <a
              className={styles.inlineCtaSecondary}
              href={`sms:+821079905028?body=${encodeURIComponent('안녕하세요. 공사 상담 요청드립니다.')}`}
            >
              문자로 상담 요청
            </a>
          </div>
        </section>

        <section className={styles.logoStageSection}>
          <div className={styles.logoStage}>            <div className={styles.logoCoreShell}>
              <div className={styles.logoCore} style={{ transform: `rotateY(${logoAngle}deg)` }}>
                <Image src="/gittan_favicon_logo.svg" alt="기탄산업개발 심볼 로고" width={230} height={230} className={styles.logoMark} priority />
              </div>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <p className={styles.pillarCardLabel}>AUTO SHOWCASE</p>
            <h2 className={styles.pillarCardTitle}>{activePillar.title}</h2>
            <p className={styles.pillarCardDescription}>{activePillar.description}</p>
            <Link href="/constructionPerformance" className={styles.pillarCardLink}>
              시공 실적 확인하기
            </Link>
          </div>
        </section>
      </main>

      <section className={styles.trustSection}>
        <article className={styles.trustCard}>
          <h3>현장 중심 커뮤니케이션</h3>
          <p>전화와 문자로 즉시 연결되어 의사결정을 빠르게 진행할 수 있습니다.</p>
        </article>
        <article className={styles.trustCard}>
          <h3>리스크 최소화 공법 적용</h3>
          <p>소음, 진동, 공기 리스크를 줄이는 실무형 공법 설계를 제공합니다.</p>
        </article>
        <article className={styles.trustCard}>
          <h3>책임 시공 운영</h3>
          <p>계획부터 마감까지 단일 팀 운영으로 품질 편차를 최소화합니다.</p>
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default Home;



