import styles from '@/src/styles/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>

        <div className={styles.footer_call_wrapper} >
            <div className={styles.main_image} style={{backgroundImage:`url(/introduce_main_img.svg)`}}></div>
            <div className={styles.overlay}></div>
            <div className={styles.main_text}> 
                <a href="tel:+318535535" className={styles.call_number}>TEL : 031-853-5535</a>
            </div>
        </div>

        <div className={styles.footer_container}>
            <div className={styles.footer_text_wrapper}>
                <div className={styles.footer_title_logo}></div>
                <div className={styles.footer_content_container}>
                    <div className={styles.footer_content}> 
                        <div>상호명 : 기탄산업 개발 </div> 
                        <div>&nbsp;| 대표자 : 정원근 </div> 
                        <div>&nbsp;| 사업자번호 : 699-05-02875 </div> 
                        <div>&nbsp;| 이메일 : gittan@naver.com </div>
                    </div>
                    <div className={styles.footer_content}> 
                        <div><a href="tel:+318535535" className={styles.call_number}>TEL : 031-853-5535</a> </div> 
                        <div>&nbsp;| FAX : 0504-327-502 </div> 
                        <div>&nbsp;| 주소 : 경기도 의정부시 오목로 235 제일프라자 2층 202호 </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
};

export default Footer;