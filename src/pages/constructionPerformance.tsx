import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ConstructionPerformance: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>

            <div style={{ width: 1440, height: 480, left: 0, top: 104, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)' }} />
            <div style={{ left: 602, top: 306, position: 'absolute', color: 'white', fontSize: 64, fontFamily: 'Nanum Gothic', fontWeight: '700', wordWrap: 'break-word' }}>시공실적</div>
            
            {/* <div style={{ height: 237, paddingTop: 58, paddingBottom: 57, paddingLeft: 70, paddingRight: 474, left: 0, top: 1882, position: 'absolute', background: '#373737', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ width: 896, alignSelf: 'stretch', position: 'relative' }}>
                    <div style={{ left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Nanum Gothic', fontWeight: '600', wordWrap: 'break-word' }}>기탄산업개발</div>
                    <div style={{ left: 0, top: 55, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Nanum Gothic', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word' }}>상호명: 기탄산업 개발 | 대표자: 정원근 | 사업자번호: 699-05-02875 | 이메일 : gittan@naver.com<br />TEL: 031-853-5028 | FAX: 0504-327-5028 | 주소: 경기도 의정부시 오목로 235 제일프라자 2층 202호</div>
                </div>
            </div> */}
            <Footer />

            {/* <div style={{ width: 1440, height: 104, paddingLeft: 31, paddingRight: 31, paddingTop: 22, paddingBottom: 22, left: 0, top: 0, position: 'absolute', border: '1px #646464 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                    <img style={{ width: 50, height: 50 }} src="https://via.placeholder.com/50x50" />
                    <div style={{ width: 170, color: 'black', fontSize: 28, fontFamily: 'Nanum Gothic', fontWeight: '600', wordWrap: 'break-word' }}> 기탄산업개발</div>
                </div>
                <div style={{ width: 360, height: 19 }} />
                <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'flex' }}>
                    <div style={{ color: 'black', fontSize: 20, fontFamily: 'Nanum Gothic', fontWeight: '400', wordWrap: 'break-word' }}>회사소개</div>
                    <div style={{ color: 'black', fontSize: 20, fontFamily: 'Nanum Gothic', fontWeight: '400', wordWrap: 'break-word' }}>사업소개</div>
                    <div style={{ color: 'black', fontSize: 20, fontFamily: 'Nanum Gothic', fontWeight: '400', wordWrap: 'break-word' }}>시공실적</div>
                    <div style={{ color: 'black', fontSize: 20, fontFamily: 'Nanum Gothic', fontWeight: '400', wordWrap: 'break-word' }}>견적문의</div>
                    <div style={{ color: 'black', fontSize: 20, fontFamily: 'Nanum Gothic', fontWeight: '400', wordWrap: 'break-word' }}>공식블로그</div>
                </div>
            </div> */}
            
            <Header />

            {/* 시공실적 사진들 */}
            <img style={{ width: 300, height: 252, left: -862, top: -372, position: 'absolute' }} src="https://via.placeholder.com/300x252" />
            <div style={{ left: 190, top: 661, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 60, display: 'inline-flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
                    <img style={{ width: 300, height: 252 }} src="https://via.placeholder.com/300x252" />
                    <img style={{ width: 300, height: 252 }} src="https://via.placeholder.com/300x252" />
                    <img style={{ width: 300, height: 252 }} src="https://via.placeholder.com/300x252" />
                </div>
                <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
                    <img style={{ width: 300, height: 252 }} src="https://via.placeholder.com/300x252" />
                    <div style={{ width: 300, height: 250, background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)' }} />
                    <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>거제OO학교</div>
                    <img style={{ width: 300, height: 252 }} src="https://via.placeholder.com/300x252" />
                </div>
                <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
                    <img style={{ width: 300, height: 252 }} src="https://via.placeholder.com/300x252" />
                    <img style={{ width: 300, height: 252 }} src="https://via.placeholder.com/300x252" />
                    <img style={{ width: 300, height: 252 }} src="https://via.placeholder.com/300x252" />
                </div>
            </div>
        </div>
    );
};

export default ConstructionPerformance;
