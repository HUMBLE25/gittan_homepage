'use client';

import React from 'react';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import styles from '@/src/styles/introduceCo.module.css';
const CompanyPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
             <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                    margin: 0px;
                }`}
            </style>
            <Header />

            <header className={styles.banner_container}>
                <div className={styles.overlay}/>
                <div className={styles.main_image}/>
                <p className={styles.overlay_text}>회사소개</p>
                <div className={styles.about_container}>
                    <p className={styles.about_text}>ABOUT GITTAN</p>
                </div>
            </header>

            <main className={styles.greeting_wrapper}>
                <article className={styles.greeting_container}>
                    <h1 className={styles.title}>회사소개</h1>
                    <section className={styles.greeting_inner_container} aria-labelledby="company-ceo-heading">
                        <h2 id="company-ceo-heading" className={styles.title}>CEO인사말</h2>
                        <p className={styles.content}>기탄산업개발은 성공적인 시공사례들로 신뢰를 드리고 있으며 <br></br> 새로운 기술을 선도하고 안전을 최우선으로 하는 전문건설기업입니다.</p>
                        <div className={styles.sub_img}></div>
                    </section>
                    <section className={styles.signature} aria-label="회사 소개 본문">
                        <p>기탄산업개발은 각급 학교, 관공서, 다중밀집 건물 등 내진보강공사가 필요한 곳에 축적된 기술로 전문팀의 내진공사 및 마이크로파일, 헬리컬파일 전문시공을 수행합니다.</p>
                        <p>기탄산업개발은 고객의 안전한 생활을 최우선으로 생각합니다. 더욱 내구성이 높은 내진보강공사 서비스를 제공하기 위해 지속적으로 연구개발을 이어가고 있습니다.</p>
                        <p>풍부한 설계 경험과 전문적인 기술을 바탕으로 전국 시공 경험을 축적해 왔으며, 하자 없는 기초 탄탄한 시공을 목표로 합니다.</p>
                        <p>서울, 경기, 강원, 충청, 전라, 경상 등 전국 모든 지역 출장 상주 공사가 가능합니다.</p>
                        <p>견적문의는 아래의 메일로 희망시공일시, 공사내용, 도면, 물량 내역서를 첨부하여 보내주세요.</p>
                        <p>메일 : gittan@naver.com</p>
                        <p>연락처 : 031-853-5535</p>
                    </section>
                </article>
            </main>

        <Footer />
        </div>
    );
};

export default CompanyPage;