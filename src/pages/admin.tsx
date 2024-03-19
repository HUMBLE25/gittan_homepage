import React, { useState, useRef } from 'react';
import styles from '@/src/styles/admin.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Admin: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('기탄산업개발');
    const [content, setContent] = useState('');
    const fileInput = useRef<HTMLInputElement>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (fileInput.current && fileInput.current.files && fileInput.current.files.length > 0) {
            const file = fileInput.current.files[0];
            const formData = new FormData();
            // formData에 데이터가 들어 가는지 파악한다.

            // 데이터가 제대로 오는 지도 파악한다.
            console.log('First Form data:', formData);
            formData.append('title', title);
            formData.append('author', author);
            formData.append('content', content);
            formData.append('file', file);
            console.log('End fo Form data:', formData.entries());
            // formData.has()로보면 모두 True가 나온다. 그럼 모두 있다는 거 아닌가?
            // 뭐가 문제인거지?
            // API resolved without sending a response for /api/gallery, this may result in stalled requests.
            // Error uploading file: Error: Unexpected end of form
            // 예상치 못한 form의 종료?? 무슨 뜻이지? 시간의 문제인가? 동기화의 문제 일까?

            try {
                const response = await fetch('/api/gallery', {
                    method: 'POST',
                    body: formData,
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
        } else {
            alert("파일을 선택해주세요.")
        }
    };

    return (
        <div className={styles.wrapper}>
            <Header />
            {/* 배너 */}
            <div className={styles.banner}>
                <div className={styles.banner_img} style={{backgroundImage:`url(/gallery_main_img.svg)`}}/>
                <div className={styles.banner_overlay} />
                <div className={styles.banner_title}>기탄갤러리</div>
                <div className={styles.banner_contents}>기탄산업개발은 성공적인 시공사례들로 신뢰를 드리고 있으며 <br></br> 세로운 기술을 선도하고 안전을 최우선으로 하는 전문기술기업입니다.</div>
            </div>
            {/* 바디 */}
            <div className={styles.body}>
                <div className={styles.form_wrapper}>
                    <div className={styles.form_index}>Home{`>`}기탄갤러리</div>
                    <div className={styles.form_title}>기탄갤러리</div>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <div className={styles.form_item}>
                            <div className={styles.form_item_title}><p>*</p>제목</div>
                            <input className={styles.form_input} 
                            type="text" 
                            placeholder="갤러리 제목을 입력하세요." 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className={styles.form_item}>
                            <div className={styles.form_item_title}><p>*</p>작성자</div>
                            <div className={styles.form_input}>기탄산업개발</div>
                        </div>
                        <div className={styles.form_item}>
                            <div className={styles.form_item_title}><p>*</p>내용</div>
                            <textarea className={styles.form_textarea} 
                            placeholder="갤러리 설명을 입력하세요."
                            value={content} 
                            onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div className={styles.form_item}>
                            <div className={styles.form_item_title}>파일</div>
                            <input className={styles.form_input} type="file" accept="image/*" ref={fileInput} />
                        </div>
                        <div className={styles.form_submit_item}>
                            <button className={styles.form_submit} type="submit">등록</button>
                            <button className={styles.form_cancel}>취소</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Admin;