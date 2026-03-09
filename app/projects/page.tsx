'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import styles from '@/src/styles/constructionPerformance.module.css';

const PROJECT_GROUPS = [
    [
        { src: '/cPerformance1.svg', alt: '강원 OO초등학교', title: '강원 OO초등학교' },
        { src: '/cPerformance2.svg', alt: '꿈이랑도서관', title: '꿈이랑도서관' },
        { src: '/cPerformance3.svg', alt: '대구OOO도서관', title: '대구OOO도서관' },
    ],
    [
        { src: '/cPerformance4.svg', alt: '성남 OO중학교', title: '성남 OO중학교' },
        { src: '/cPerformance5.svg', alt: '거제 OO학교', title: '거제 OO학교' },
        { src: '/cPerformance6.svg', alt: '수원 OO초등학교', title: '수원 OO초등학교' },
    ],
    [
        { src: '/cPerformance7.svg', alt: '화성 OO중학교', title: '화성 OO중학교' },
        { src: '/cPerformance8.svg', alt: '철원 OO고등학교', title: '철원 OO고등학교' },
        { src: '/cPerformance9.svg', alt: '홍천 OO중학교', title: '홍천 OO중학교' },
    ],
];

const ProjectsPage: React.FC = () => {
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
                <p className={styles.overlay_text}>시공실적</p>
            </header>

            <main className={styles.projects_main}>
                <article className={styles.img_wrapper}>
                    <h1 className={styles.projects_heading}>시공실적</h1>
                    {PROJECT_GROUPS.map((group, groupIndex) => (
                        <section key={groupIndex} className={styles.img_container} aria-label={`시공실적 그룹 ${groupIndex + 1}`}>
                            {group.map((project) => (
                                <figure key={project.src} className={styles.imgCard}>
                                    <div className={styles.imgFrame}>
                                        <Image src={project.src} alt={project.alt} fill sizes="(max-width: 768px) 30vw, 25vw" className={styles.img} />
                                    </div>
                                    <figcaption className={styles.imgCaption}>{project.title}</figcaption>
                                </figure>
                            ))}
                        </section>
                    ))}
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectsPage;