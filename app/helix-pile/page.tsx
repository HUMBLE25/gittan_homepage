import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import styles from '@/src/styles/helixPiles.module.css';

export const metadata: Metadata = {
  title: '헬릭스파일 공법 | 기탄산업개발',
  description:
    '헬릭스파일 공법의 특징, 적용 분야, 시공 순서, 시공 도면, 시공 설명서를 안내합니다.',
  keywords: [
    '헬릭스파일',
    'HELIX PILE',
    '나선형 파일',
    '비배토 파일 공법',
    '기초공법',
    '기탄산업개발',
  ],
  alternates: {
    canonical: '/helix-pile',
  },
  openGraph: {
    title: '헬릭스파일 공법 | 기탄산업개발',
    description:
      '나선형 회전운동을 이용한 헬릭스파일 공법의 특징과 적용 분야, 시공 정보를 확인하세요.',
    url: '/helix-pile',
    type: 'article',
    siteName: '기탄산업개발',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HelixPiles() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <header className={styles.banner}>
        <div
          className={styles.banner_img}
          style={{ backgroundImage: `url(/bIntroduce_img.svg)` }}
        />
        <div className={styles.banner_overlay} />
        <p className={styles.banner_title}>사업소개</p>
        <nav className={styles.banner_menu} aria-label="공법 메뉴">
          <Link href="/micropile" className={styles.banner_menuItem1}>
            MICRO PILES 공법
          </Link>
          <Link href="/helix-pile" className={styles.banner_menuItem2}>
            HELIX PILES 공법
          </Link>
        </nav>
      </header>

      <main className={styles.contents_container}>
        <article className={styles.article}>
          <h1 className={styles.article_heading}>헬릭스파일 공법</h1>

          <section className={styles.concept_container}>
            <p className={styles.concept_background}>
              나선형 회전운동으로 나선형 지지날개가 부착된 고강도 강관파일을 지중에
              관입하여 지지력을 최대화하는 무소음, 무진동, 비배토 파일 공법
            </p>
          </section>

          <section className={styles.feature_container} aria-labelledby="helix-feature-heading">
            <div className={styles.feature_wrapper}>
              <div className={styles.feature_top}>
                <div className={styles.feature_icon} />
                <h2 id="helix-feature-heading" className={styles.feature_text}>
                  헬리컬파일 공법 특징
                </h2>
              </div>

              <div className={styles.feature_background}>
                <div className={styles.feature_description}>
                  <ul>
                    <li>특성화한 장비와 백호우와의 결합만으로 시공시 조립이 간편</li>
                    <li>일체화한 파일시공으로 공기단축 (300m/Day)</li>
                    <li>무소음, 무진동 공법으로 친환경적</li>
                    <li>비배토 공법으로 슬라임이 발생하지 않음</li>
                    <li>어떠한 각도에서도 시공이 가능하므로 경사시공에 용이</li>
                  </ul>
                </div>
                <div className={styles.feature_image} />
              </div>
            </div>
          </section>

          <section className={styles.common_container} aria-labelledby="helix-apply-heading">
            <h2 id="helix-apply-heading" className={styles.common_title}>
              HELIX PILE 적용 분야
            </h2>
            <div className={styles.apply_background}>
              <div className={styles.apply_description}>
                <ul>
                  <li>일반 및 산업용 구조물, 토목구조물 지지를 위한 파일공법</li>
                  <li>구조물 보수보강(재건축 포함) 지지를 위한 기초공법</li>
                  <li>벽면 보호공법, 부력방지가 필요한 구조물</li>
                </ul>
              </div>
              <div className={styles.apply_image} />
            </div>
          </section>

          <section className={styles.common_container} aria-labelledby="helix-build-heading">
            <h2 id="helix-build-heading" className={styles.common_title}>
              HELIX PILE 시공순서
            </h2>
            <div className={styles.build_background}>
              <div className={styles.build_image}></div>
            </div>
          </section>

          <section className={styles.common_container} aria-labelledby="helix-plan-heading">
            <h2 id="helix-plan-heading" className={styles.common_title}>
              HELIX PILE 시공도면
            </h2>
            <div className={styles.plan_background}>
              <div className={styles.plan_image}></div>
            </div>
          </section>

          <section className={styles.common_container} aria-labelledby="helix-guide-heading">
            <h2 id="helix-guide-heading" className={styles.common_title}>
              HELIX PILE 시공설명서
            </h2>
            <div className={styles.explain_background}>
              <div
                className={styles.explain_image}
                style={{ backgroundImage: `url(/helix_explain_img1.svg)` }}
              ></div>
              <div
                className={styles.explain_image}
                style={{ backgroundImage: `url(/helix_explain_img2.svg)` }}
              ></div>
              <div
                className={styles.explain_image}
                style={{ backgroundImage: `url(/helix_explain_img3.svg)` }}
              ></div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}