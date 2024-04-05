import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import styles from '@/src/styles/estimate.module.css';
const Estimate: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleCloseClick = () => {
        setIsVisible(false);
    };
    const router = useRouter()
    const handleGotoContact = () => {
        try{
            router.push("/contact")
        }catch(error){
            console.log(error);
        }
    };

    return (
        <div className={styles.container} style={{ display: isVisible ? 'block' : 'none' }}>
            <div className={styles.image_container} onClick={handleGotoContact}>
                <div className={styles.image} />
                <div className={styles.company_name}>기탄산업개발</div>
                <div className={styles.inquiry_text}>견적문의</div>
                <div className={styles.text}>희망시공일시, 공사내용, 도면, 물량 내역서를 첨부하여 <br />아래의 메일로 문의해주세요. <br />메일 : gittan@naver.com <br/>연락처 : 031-853-5535</div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.footer_content}>
                        <div className={styles.do_not_show}>오늘하루 열지 않기</div>
                        <input className={styles.checkbox} type='checkbox'></input>
                    </div>
                <button className={styles.close_button} onClick={handleCloseClick}>닫기</button>
            </div>
      </div>

    );
};

export default Estimate;