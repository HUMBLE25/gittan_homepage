import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '@/src/styles/introduceCo.module.css';
const IntroduceCo: React.FC = () => {
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

            <div className={styles.banner_container}>
                <div className={styles.overlay}/>
                <div className={styles.main_image}/>
                <div className={styles.overlay_text}>회사소개</div>
                <div className={styles.about_container}>
                    <div className={styles.about_text}>ABOUT GITTAN</div>
                </div>
            </div>

            <div className={styles.greeting_wrapper}>
                <div className={styles.greeting_container}>
                    <div className={styles.greeting_inner_container}>
                        <div className={styles.title}>CEO인사말</div>
                        <div className={styles.content}>기탄산업개발은 성공적인 시공사례들로 신뢰를 드리고 있으며 <br></br> 새로운 기술을 선도하고 안전을 최우선으로 하는 전문건설기업입니다.</div>  
                        <div className={styles.sub_img}></div>
                    </div>
                    <div className={styles.signature}>
                        기탄산업개발은 각급 학교, 관공서, 다중밀집 건물 등 내진보강공사가 필요한 곳에 축척된 기술로 전문팀의 내진공사 및 마이크로파일 및 헬리컬파일 전문시공업체입니다.<p></p>
                        기탄산업개발은 고객이 가장 안전한 생활을 최우선으로 생각합니다. 그렇기에 더욱 내구성이 안전한 내진보강공사 서비스를 제공하기 위해 끊임없이 지속적인 연구개발을 하고 있습니다.<p></p>
                        풍부한 설계와 전문적인 기술을 바탕으로 전국 모든 지역 시공경험을 더해 성장하고 있으며 지금의 자리에 안주하지 않고 하자 없는 기초 탄탄한 시공을 약속하겠습니다. <p></p>    
                        서울, 경기, 강원, 충청, 전라, 경상, 전국 모든 지역 출장 상주 공사를 해드립니다.<br></br>
                        감사합니다. <br></br>
                        견적문의는 아래의 메일로 희망시공일시, 공사내용, 도면, 물량 내역서를 첨부하여 <br></br>보내주세요.<p></p>
                        메일 : gittan@naver.com<br></br>
                        연락처 : 031-853-5535
                    </div>
                </div>
            </div>

        <Footer />
        </div>
    );
};

export default IntroduceCo;