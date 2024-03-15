import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/src/styles/gittanGallery.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

interface GalleryItem {
    id: number;
    title: string;
    content: string;
    name: string;
    imageUrl: string;
    creationTime: string;
    
}

const GittanGallery: React.FC = () => {
    const [data, setData] =  useState<GalleryItem[] | null | false>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios({
                method: 'get',
                url: '/api/gallery',
            
            });
            console.log(result.data.data)
            if(result.data.data[0]){
                // console.log("true")
                setData(false);
                // setData(result.data.data);

            }else{
                // console.log("false")
                // setData(false);
                setData(result.data.data);
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
                    <div className={styles.gallery}>
                        {data.map((item: GalleryItem, index) => (
                            
                            <div key={index} className={styles.gallery_item}>
                            <Image 
                                src={item.imageUrl.slice(item.imageUrl.indexOf('/public') + 7)}
                                alt={item.title}
                                width={500} 
                                height={300}
                                className={styles.gallery_image}
                            />
                            <div className={styles.gallery_title}>{item.title}</div>
                            <div className={styles.gallery_content}>{item.creationTime.split('T')[0]}</div>
                        </div>
                        ))}
                    </div>
                  
                ) : (
                    // 데이터가 없을 때 표시할 메시지
                    <div className={styles.board_no_data}>게시글이 없습니다.</div>
                )}
 
                </div>
                {/* 보드푸터 */}
                    <div className={styles.board_footer}>
                        <div className={styles.board_footer_line}/>
                        <div className={styles.board_page_button}>
                            1
                        </div>
                    </div>

                </div>
               
            </div>
            <Footer />
        </div>
    );
};

export default GittanGallery;