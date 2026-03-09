import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import styles from '@/src/styles/microPiles.module.css';

export const metadata: Metadata = {
  title: '마이크로파일 공법 | 기탄산업개발',
  description:
    '기존 구조물 기초보강, 협소 구간 시공, 연약지반 및 사면 보강에 적합한 마이크로파일 공법의 특징·적용 분야·시공 정보를 안내합니다.',
  keywords: [
    '마이크로파일',
    'MICRO PILE',
    '기초보강',
    '언더피닝',
    '협소지역 시공',
    '기탄산업개발',
  ],
  alternates: {
    canonical: '/micropile',
  },
  openGraph: {
    title: '마이크로파일 공법 | 기탄산업개발',
    description:
      '마이크로파일 공법의 특징, 적용 분야, 시공 순서, 시공 도면, 시공 설명서를 확인하세요.',
    url: '/micropile',
    type: 'article',
    siteName: '기탄산업개발',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MicroPiles() {
  return (
    <div className={styles.wrapper}>

      <Header />

      {/* 배너 + 메뉴 */}
      <header className={styles.banner}>
        <div className={styles.banner_img} style={{ backgroundImage: `url(/bIntroduce_img.svg)` }} />
        <div className={styles.banner_overlay} />
        <p className={styles.banner_title}>사업소개</p>
        <nav className={styles.banner_menu} aria-label="공법 메뉴">
          <Link href="/micropile" className={styles.banner_menuItem1}>
           마이크로파일 공법
          </Link>
          <Link href="/helix-pile" className={styles.banner_menuItem2}>
            헬리컬파일 공법
          </Link>
        </nav>
      </header>

      {/* 핵심 콘텐츠 */}
      <main className={styles.contents_container}>
        <article className={styles.article}>
          <h1 className={styles.article_heading}>마이크로파일 공법</h1>

          <section className={styles.concept_container}>
            <p className={styles.concept_background}>
              기존건물의 기초보강, 굴착장비의 진입이 불가능한 협소한 지역 시공시 연약지반, 사면의 보강 등에 적합한 파일 공법
            </p>
          </section>

          {/* 공법특징 */}
          <section className={styles.feature_container} aria-labelledby="micro-feature-heading">
            <div className={styles.feature_wrapper}>
              <div className={styles.feature_top}>
                <div className={styles.feature_icon} />
                <h2 id="micro-feature-heading" className={styles.feature_text}>
                  마이크로파일 공법 특징
                </h2>
              </div>

              <div className={styles.feature_background}>
                <div className={styles.feature_description}>
                  <ul>
                    <li>소구경으로 대구경 파일의 지지력 확보 가능</li>
                    <li>압축력과 인장력을 동시에 발휘하므로 부력앙카를 겸할 수 있음</li>
                    <li>건설장비의 규모가 작아 건물내부, Strut 하부 등 협소한 현장에서 시공이 용이함</li>
                    <li>시멘트 밀크를 사용하므로 천공 및 주변 지반 균열부에 충진이 가능</li>
                    <li>소구경이라 Pile 간의 간격을 좁힐 수 있어 군말뚝의 지지력 감소와 부마찰력 문제를 최소화 함</li>
                  </ul>
                </div>
                <div className={styles.feature_image} />
              </div>
            </div>
          </section>

          {/* 적용분야 */}
          <section className={styles.common_container} aria-labelledby="micro-apply-heading">
            <h2 id="micro-apply-heading" className={styles.common_title}>
              MICRO PILE 적용 분야
            </h2>
            <div className={styles.apply_background}>
              <div className={styles.apply_description}>
                <ul>
                  <li>기존 구조물의 언더피닝 (Under Pinning) 시공시</li>
                  <li>기존건물(구조물)의 기초 보강</li>
                  <li>대형 굴착장비의 진입이 불가능한 협소한 지역의 기초 시공</li>
                  <li>압축 및 인장이 동시에 작용하는 타워, 굴뚝 및 송전탑의 기초</li>
                  <li>중파된 PHC PILE 보강 및 편차 발생 시</li>
                  <li>지반 및 굴착조건이 양호하지 않은 경우</li>
                </ul>
              </div>
              <div className={styles.apply_image} />
            </div>
          </section>

          {/* 시공순서 */}
          <section className={styles.common_container} aria-labelledby="micro-build-heading">
            <h2 id="micro-build-heading" className={styles.common_title}>
              MICRO PILE 시공순서
            </h2>
            <div className={styles.build_background}>
              <div className={styles.build_image}></div>
            </div>
          </section>

          {/* 시공도면 */}
          <section className={styles.common_container} aria-labelledby="micro-plan-heading">
            <h2 id="micro-plan-heading" className={styles.common_title}>
              MICRO PILE 시공도면
            </h2>
            <div className={styles.plan_background}>
              <div className={styles.plan_image}></div>
            </div>
          </section>

          {/* 시공설명서 */}
          <section className={styles.common_container} aria-labelledby="micro-guide-heading">
            <h2 id="micro-guide-heading" className={styles.common_title}>
              MICRO PILE 시공설명서
            </h2>
            <div className={styles.explain_background}>
              <div
                className={styles.explain_image}
                style={{ backgroundImage: `url(/micro_explain_img3.svg)` }}
              ></div>
              <div
                className={styles.explain_image}
                style={{ backgroundImage: `url(/micro_explain_img2.svg)` }}
              ></div>
              <div
                className={styles.explain_image}
                style={{ backgroundImage: `url(/micro_explain_img1.svg)` }}
              ></div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}