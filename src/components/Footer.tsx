'use client';

import styles from '@/src/styles/footer.module.css';
import FixedContactBar from '@/src/components/FixedContactBar';

// One-line summary: Renders company footer information and a persistent phone/SMS conversion bar.
const Footer = () => {
  const handleCall = () => {
    window.location.href = 'tel:+821079905028';
  };

  return (
    <>
      <div className={styles.container}>
        <div onClick={handleCall} className={styles.footer_call_wrapper}>
          <div className={styles.main_image} style={{ backgroundImage: 'url(/introduce_main_img.svg)' }}></div>
          <div className={styles.overlay}></div>
          <div className={styles.main_text}>
            <div className={styles.main_title}>
              고객센터 ( <p className={styles.main_sub_title}>클릭하면 바로 전화 연결</p> )
            </div>
            <div className={styles.icon_item_number}>
              <div className={styles.icon} style={{ backgroundImage: 'url(/icon_call.png)' }}></div>
              010-7990-5028 <br />
            </div>
            <div className={styles.icon_item}>상담시간 : 09:00 ~ 20:00</div>
            <div className={styles.icon_item}>문의메일 : gittan@naver.com</div>
          </div>
        </div>

        <div className={styles.footer_container}>
          <div className={styles.footer_text_wrapper}>
            <div className={styles.footer_title_logo}></div>
            <div className={styles.footer_content_container}>
              <div className={styles.footer_content}>
                <div>상호명: 기탄산업개발 </div>
                <div>&nbsp;| 대표자: 정원근</div>
                <div>&nbsp;| 사업자번호: 699-05-02875 </div>
                <div>&nbsp;| 이메일: gittan@naver.com </div>
              </div>
              <div className={styles.footer_content}>
                <div>
                  <a href="tel:+821079905028" className={styles.call_number}>
                    TEL : 010-7990-5028
                  </a>
                </div>
                <div>&nbsp;| FAX : 0504-327-5028</div>
                <div>&nbsp;| 주소 : 경기도 의왕시 오방산단3로 25 공장형사무실동 614호(삼동)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FixedContactBar />
    </>
  );
};

export default Footer;
