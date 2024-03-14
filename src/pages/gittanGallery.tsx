import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/src/styles/gittanGallery.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GittanGallery: React.FC = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios({
                method: 'get',
                url: '/api/gallery',
            
            });
            console.log("data : ", result.data[0]==null);
            if(!result.data[0]){
                console.log("data is null")
                setData(false);
            }else{
                setData(result.data);
            }
            
        };

        fetchData();
    }, []);

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
                {data ? (
                    // 데이터가 있을 때 표시할 내용
                    <div>data available</div>
                    // data.map(item => (
                    //     <div key={item.id}>
                    //         {/* 데이터를 화면에 표시하는 코드 */}
                    //     </div>
                    // ))
                ) : (
                    // 데이터가 없을 때 표시할 메시지
                    <div className={styles.board_no_data}>게시글이 없습니다.</div>
                )}

                </div>
                {/* 보드푸터 */}
                    <div className={styles.board_footer}>

                    </div>

                </div>
               
            </div>
            <Footer />
        </div>
    );
};

export default GittanGallery;