import React, { useState } from 'react';
import styles from '@/src/styles/contact.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        hopeDate:'',
        subject: '',
        message: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
        // API 추가
        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // 내용 타입을 JSON으로 설정
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error(`Server responded with status code ${response.status}`);
            }
            const data = await response.json();
            alert(data.message)
            location.reload();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    const optionText = "필수 입력란입니다.";
    return (
        <div className={styles.wrapper}>
            <Header/>
            {/* 배너 */} 
            <div className={styles.banner}>
                <div className={styles.banner_img} style={{backgroundImage:`url(/contactImg.svg)`}}/>
                <div className={styles.banner_overlay} />
                <div className={styles.banner_title}>견적문의</div>
                {/* <div className={styles.banner_contents}>기탄산업개발은 성공적인 시공사례들로 신뢰를 드리고 있으며 <br></br> 세로운 기술을 선도하고 안전을 최우선으로 하는 전문기술기업입니다.</div> */}
            </div>
            {/* 바디 */}
            <div className={styles.body}>
                <div className={styles.board_wrapper}>
                {/* 보드 바디 */}
                <div className={styles.board_body}>
                <form onSubmit={handleSubmit} className={styles.inquiryForm}>
                    <div className={styles.item}>
                        <div className={styles.subitem}>업체명<span>*</span></div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder= {optionText}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.subitem}>연락처<span>*</span></div>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder= {optionText}
                        className={styles.inputField}
                    />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.subitem}>이메일<span>*</span></div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder= {optionText}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.subitem}>희망공사일시<span>*</span></div>
                    <input
                        type="text"
                        name="hopeDate"
                        value={formData.hopeDate}
                        onChange={handleChange}
                        placeholder= {optionText}
                        className={styles.inputField}
                    />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.subitem}>공사내용<span>*</span></div>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder= {optionText}
                        className={styles.inputField}
                    />
                    </div>
                    <div className={styles.textitem}>
                        <div className={styles.subitem}>추가내용</div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            // placeholder= {optionText}
                            className={styles.textareaField}
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>문의하기</button>
                    </form>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;