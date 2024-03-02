'use client'

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/microPiles.module.css';
import Link from 'next/link';
const MicroPiles: React.FC  = () => {
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

            {/* 개념*/}
            <div className={styles.concept_container}>
                <div className={styles.concept_title}>MICRO PILES 공법</div>
                <div className={styles.concept_background}>기존건물의 기초보강, 굴착장비의 진입이 불가능한 협소한 지역 시공시 연약지반, 사면의 보강 등에 적합한 파일 공법</div>
            </div>
            {/* 공법특징*/}
            <div className={styles.feature_container}>
                <div className={styles.feature_wrapper}>
                    <div className={styles.feature_top}>
                        <div className={styles.feature_icon} />
                        <div className={styles.feature_text}>MICRO PILES 공법 특징</div>    
                    </div>

                    <div className={styles.feature_background} >
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
            </div>

            {/* 적용분야 */}
            <div className={styles.common_container}>
                <div className={styles.common_title}>MICRO PILE 적용 분야</div>
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
            </div>

            {/* 시공순서 */}
            <div className={styles.common_container}>
                <div className={styles.common_title}>MICRO PILE 시공순서</div>
                <div className={styles.build_background}>
                    <div className={styles.build_image}></div>
                </div>
            </div>

            {/* 시공도면 */}
            <div className={styles.common_container}>
                <div className={styles.common_title}>MICRO PILE 시공도면</div>
                <div className={styles.plan_background}>
                    <div className={styles.plan_image}></div>
                </div>
            </div>

            {/* 시공설명서 */}
            <div className={styles.common_container}>
                <div className={styles.common_title}>MICRO PILE 시공설명서</div>
                <div className={styles.explain_background}>
                <div className={styles.explain_image} style={{backgroundImage : `url(/micro_explain_img3.svg)`}}></div>    
                <div className={styles.explain_image} style={{backgroundImage : `url(/micro_explain_img2.svg)`}}></div>
                <div className={styles.explain_image} style={{backgroundImage : `url(/micro_explain_img1.svg)`}}></div>
                </div>
            </div>

        <Footer />
    </div>
    );
};

export default MicroPiles;