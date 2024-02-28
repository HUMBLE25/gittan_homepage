import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '@/src/styles/introduce.module.css';
const IntroduceCo: React.FC = () => {
    return (
        <div className={styles.container}>

            <Header />
            <div className={styles.main_container}>
                <div className={styles.overlay}/>
                <div className={styles.main_image}/>
                <div className={styles.overlay_text}>회사소개</div>
                <div className={styles.about_container}>
                    <div className={styles.about_text}>ABOUT GITTAN</div>
                </div>
            </div>

            <div className={styles.image_container}>
            <div className={styles.inner_container}>
                <div className={styles.small_image1}/>
                <div className={styles.small_image2} />
            </div>
            <div className={styles.large_image} />
            </div>


            <div className={styles.greeting_container}>
                <div className={styles.greeting_inner_container}>
                    <div className={styles.title}>CEO인사말</div>
                    <div className={styles.content}>기탄산업개발 홈페이지를 찾아주신 여러분 환영합니다.<br /><br />기탄산업개발은 각급 학교, 관공서, 다중밀집 건물 등 내진보강공사가 필요한 곳에 축척된 기술로 <br />전문팀의 내진공사 및 마이크로파일 및 헬리컬파일 전문시공업체입니다.<br />풍부한 설계와 전문적인 기술을 바탕으로 전국 모든 지역 시공경험을 더해 성장하고 있습니다.<br /><br />당사는 더욱 내구성이 안전한 내진보강공사 서비스를 제공하기 위해 끊임없이 지속적인 연구개발을<br />하고 있습니다.<br />지금의 자리에 안주하지 않고  하자 없는 기초 탄탄한 시공을 보장하겠습니다.<br /><br />서울, 경기, 강원, 충청, 전라, 경상, 전국 모든 지역 출장 상주 공사를 해드립니다.<br /><br />감사합니다.</div>
                </div>
                <div className={styles.signature}>-기탄산업개발 대표-</div>
            </div>

        <Footer />
        </div>
    );
};

export default IntroduceCo;
