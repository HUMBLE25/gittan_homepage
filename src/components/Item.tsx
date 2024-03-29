import React from 'react';
import Styles from '@/src/styles/item.module.css';

interface ItemProps {
    src: string;
    text: string;
}

const PerformanceItem: React.FC<ItemProps> = ({ src, text }) => (
    <div className={Styles.container}>
        <div className={Styles.performance_image}  style={{backgroundImage: `url(${src})`}}/>
        <div className={Styles.layer}/>
        <div className={Styles.text}>
            {text}
        </div>
    </div>
);

export default PerformanceItem;