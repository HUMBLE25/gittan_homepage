import styles from '@/src/styles/footer.module.css';

const Footer = () => {
    const handleCall = () => {
        window.location.href = "tel:+821088594055";
      };
    return (
        <div className={styles.container}>

            <div  onClick={handleCall} className={styles.footer_call_wrapper} >
                <div className={styles.main_image} style={{backgroundImage:`url(/introduce_main_img.svg)`}}></div>
                <div className={styles.overlay}></div>
                <div className={styles.main_text}>
                    <div className={styles.main_title}>고객센터</div>
                    <div className={styles.icon_item_number}>
                        <div className={styles.icon} style={{backgroundImage:`url(/icon_call.png)`}}></div>031.853.5535 <br/>
                    </div>
                    <div className={styles.icon_item}>
                        상담시간 : 9:00 ~ 20:00 | 점심 : 12:00 ~ 13:00
                    </div>
                    <div className={styles.icon_item}>
                        문의메일 : gittan@naver.com 
                    </div>
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
                            <div><a href="tel:+82318535535" className={styles.call_number}>TEL : 031-853-5535</a> </div> 
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