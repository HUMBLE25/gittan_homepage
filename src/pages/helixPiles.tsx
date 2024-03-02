import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/helixPiles.module.css';
import Link from 'next/link';
const HelixPiles = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            {/* 배너 */}
            <div className={styles.banner}>
                <div className={styles.banner_img} style={{backgroundImage:`url(/bIntroduce_img.svg)`}}/>
                <div className={styles.banner_overlay} />
                <div className={styles.banner_title}>사업소개</div>
                <div className={styles.banner_menu}>
                    <Link  href='/microPiles' className={styles.banner_menuItem1}>MICRO PILES 공법</Link>
                    <Link href='/helixPiles' className={styles.banner_menuItem2}>HELIX PILES 공법</Link>
                </div>
            </div>

            {/* 개념 */}
            <div className={styles.concept_container}>
                <div className={styles.concept_title}>HELIX PILES 공법</div>
                <div className={styles.concept_background}>나선형 회전운동으로 나선형 지지날개가 부착된 고강도 강관파일을 지중에 관입하여 지지력을 최대화하는 무소음, 무진동, 비배토 파일 공법</div>
            </div>

            {/* 공법특징 */}
            <div className={styles.feature_container}>
                <div className={styles.feature_wrapper}>
                    <div className={styles.feature_top}>
                        <div className={styles.feature_icon} />
                        <div className={styles.feature_text}>HELIX PILES 공법 특징</div>    
                    </div>

                    <div className={styles.feature_background} >
                        <div className={styles.feature_description}>
                            <ul>
                                <li>특성화한 장비와 백호우와의 결합만으로 시공시 조립이 간편</li>
                                <li>일체화한 파일시공으로 공기단축 (300m/Day)</li>
                                <li>무소음, 무진동 공법으로 친환경적</li>
                                <li>비배토 공법으로 슬라임이 발행하지 않음</li>
                                <li>어떠한 각도에서도 시공이 가능하므로 경사시공에 용이</li>
                            </ul>
                        </div>
                        <div className={styles.feature_image} />
                    </div>  
                </div>
            </div>

            {/* 적용분야 */}
            <div className={styles.common_container}>
                <div className={styles.common_title}>HELIX PILE 적용 분야</div>
                <div className={styles.apply_background}>
                    <div className={styles.apply_description}>
                        <ul>
                            <li>일반 및 산업용구조물, 토목구조물 지지를 위한 파일공법</li>
                            <li>구조물 보수보강 (재건축포함) 지지를 위한 기초공법</li>
                            <li>벽면 보호공법, 부력방지가 필요한 구조물</li>
                        </ul>
                    </div>
                    <div className={styles.apply_image} />
                </div>
            </div>
            {/* 시공순서 */}
            <div className={styles.common_container}>
                <div className={styles.common_title}>HELIX PILE 시공순서</div>
                <div className={styles.build_background}>
                    <div className={styles.build_image}></div>
                </div>
            </div>
            {/* 시공도면 */}
            <div className={styles.common_container}>
                <div className={styles.common_title}>HELIX PILE 시공도면</div>
                <div className={styles.plan_background}>
                    <div className={styles.plan_image}></div>
                </div>
            </div>
            {/* 시공설명서 */}
            <div className={styles.common_container}>
                <div className={styles.common_title}>HELIX PILE 시공설명서</div>
                <div className={styles.explain_background}>
                    <div className={styles.explain_image} style={{backgroundImage : `url(/helix_explain_img1.svg)`}}></div>    
                    <div className={styles.explain_image} style={{backgroundImage : `url(/helix_explain_img2.svg)`}}></div>
                    <div className={styles.explain_image} style={{backgroundImage : `url(helix_explain_img3.svg)`}}></div>
                </div>
            </div>
            <Footer/>

        </div>
    );
};

        export default HelixPiles;