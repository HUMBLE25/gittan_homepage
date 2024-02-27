// Footer.tsx
import styles from '@/src/styles/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_text_wrapper}>
                <div className={styles.footer_title_text}>기탄산업개발</div>
                <div className={styles.footer_content_text}>상호명: 기탄산업 개발 | 대표자: 정원근 | 사업자번호: 699-05-02875 | 이메일 : gittan@naver.com<br />TEL: 031-853-5028 | FAX: 0504-327-5028 | 주소: 경기도 의정부시 오목로 235 제일프라자 2층 202호</div>
            </div>
        </div>
    );
};

export default Footer;