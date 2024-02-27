import React from 'react';
import Image from 'next/image'

interface performanceItemProps {
    src: string;
    alt: string;
    text: string;
}

const PerformanceItem: React.FC<performanceItemProps> = ({ src, alt, text }) => (
    <div style={{width: 300, height: 200, position: 'relative'}}>
        <Image style={{width: 300, height: 200, left: 0, top: 0, position: 'absolute'}} src={src} alt={alt} />
        <div style={{width: 300, height: 200, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.30)'}} />
        <div style={{left: 105, top: 91, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Nanum Gothic', fontWeight: '700', wordWrap: 'break-word'}}>
            {text}
        </div>
    </div>
);

export default PerformanceItem;
