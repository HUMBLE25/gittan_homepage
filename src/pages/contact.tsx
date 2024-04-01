import React, { useState } from 'react';
import styles from '@/src/styles/contact.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 폼 데이터를 처리하는 로직, 예를 들어 API에 POST 요청을 보내는 등의 작업을 추가하세요.
        console.log(formData);
    };
    const optionText = "*는 필수 입력란입니다.";
    return (
        <div className={styles.wrapper}>
            <Header/>
            {/* 배너 */} 
            <div className={styles.banner}>
                <div className={styles.banner_img} style={{backgroundImage:`url(/gallery_main_img.svg)`}}/>
                <div className={styles.banner_overlay} />
                <div className={styles.banner_title}>기탄갤러리</div>
                <div className={styles.banner_contents}>기탄산업개발은 성공적인 시공사례들로 신뢰를 드리고 있으며 <br></br> 세로운 기술을 선도하고 안전을 최우선으로 하는 전문기술기업입니다.</div>
            </div>
            {/* 바디 */}
            <div className={styles.body}>
                <div className={styles.board_wrapper}>
                    <div className={styles.board_header}>
                        <div className={styles.board_title_wrapper}>
                            <div className={styles.board_box}></div>
                            <div className={styles.board_title}>PhotoGallery</div>    
                        </div>
                        <div className={styles.board_index}>Home{`<`}PhotoGallery</div>
                    </div>  
                {/* 보드 바디 */}
                <div className={styles.board_body}>
                <form onSubmit={handleSubmit} className={styles.inquiryForm}>
                    <div className={styles.item}>
                        <div className={styles.subitem}>이름<span>*</span></div>
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
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder= {optionText}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.subitem}>이메일</div>
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
                        <div className={styles.subitem}>희망공사일시<span>*</span></div>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder= {optionText}
                        className={styles.inputField}
                    />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.subitem}>추가내용<span>*</span></div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder= {optionText}
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