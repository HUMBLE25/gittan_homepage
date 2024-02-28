import React from 'react';
import Styles from '@/src/styles/performanceItem.module.css';
interface performanceItemProps {
    src: string;
    text: string;
}

const PerformanceItem: React.FC<performanceItemProps> = ({ src, text }) => (
    <div className={Styles.container}>
        <div className={Styles.performance_image}  style={{backgroundImage: `url(${src})`}}/>
        <div className={Styles.layer}/>
        <div >
            {text}
        </div>
    </div>
);

export default PerformanceItem;