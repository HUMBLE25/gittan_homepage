import React from 'react';
import styles from '@/src/styles/banner.module.css';

interface BannerProps {
    img: string;
    text: string;
}

const Banner: React.FC<BannerProps> = ({ img, text }) => (
    <div className={styles.container}>
        <div className={styles.main_image} style={{ backgroundImage: `url(${img})` }} />
        <div className={styles.overlay} />
        <div className={styles.overlay_text}>{text}</div>
    </div>
)

export default Banner;