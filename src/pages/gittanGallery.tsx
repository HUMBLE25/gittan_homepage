import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/src/styles/gittanGallery.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/modal';

export interface GalleryItem {
    id: number;
    title: string;
    content: string;
    name: string;
    imageUrl: string;
    creationTime: string;
    
}

const GittanGallery: React.FC = () => {
    const [data, setData] =  useState<GalleryItem[] | null >(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(6);
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get<{data: GalleryItem[]}>('/api/gallery');
                setData(result.data.data.length ? result.data.data : null);
            } catch (error) {
                console.error("Fetching data failed.", error);
                setData(null);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log('Selected Item:', selectedItem);
    }, [selectedItem]);

    // 현재 페이지 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

    // 페이지 번호를 클릭시 다음 페이지로 이동
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers: number[] = [];
    if (Array.isArray(data)) {
        for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
    }
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
                {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
                {currentData && currentData.length > 0 ? (
                        <div className={styles.gallery}>
                            {currentData.map((item, index) => (
                                <div key={index} className={styles.gallery_item} onClick={() => setSelectedItem(item)}>
                                    <div style={{backgroundImage: `url(${item.imageUrl})`}} className={styles.gallery_image}/>
                                    <div className={styles.gallery_title}>{item.title}</div>
                                    <div className={styles.gallery_content}>{item.creationTime.split('T')[0]}</div>
                                </div>
                            ))}
                              {Array.from({ length: 9 - data.length }).map((_, index) => (
                         <div key={`empty-${index}`} className={styles.gallery_item}></div>
                         ))}
                        </div>
                    ) : (
                        <div className={styles.board_no_data}>게시글이 없습니다.</div>
                    )}
                </div>
                {/* 보드푸터 */}
                <div className={styles.board_footer}>
                    <div className={styles.pagination}>
                        {pageNumbers.map(number => (
                            <a key={number} onClick={() => paginate(number)} className={styles.pageLink}>
                                {number}
                            </a>
                        ))}
                    </div>
                </div>
                </div>
            </div>
            <Footer />
            
        </div>
    );
};

export default GittanGallery;