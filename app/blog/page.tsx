'use client';

import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

// One-line summary: Blog hub page that directs users to the official Naver blog.
export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0c1017', color: '#eaf0ff' }}>
      <Header />
      <main style={{ maxWidth: '980px', margin: '0 auto', padding: '72px 20px 88px' }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>공식 블로그</h1>
        <p style={{ marginTop: '14px', lineHeight: 1.7, color: '#c9d5ea' }}>
          기탄산업개발의 최신 시공 소식과 현장 사례는 네이버 블로그에서 확인하실 수 있습니다.
        </p>
        <a
          href="https://blog.naver.com/gittan"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '24px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '44px',
            padding: '0 18px',
            borderRadius: '10px',
            fontWeight: 700,
            textDecoration: 'none',
            color: '#fff',
            background: 'linear-gradient(135deg, #2e68ff 0%, #5e94ff 100%)',
          }}
        >
          네이버 블로그 바로가기
        </a>
      </main>
      <Footer />
    </div>
  );
}
