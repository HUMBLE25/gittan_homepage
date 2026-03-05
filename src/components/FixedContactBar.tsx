import React from 'react';
import styles from '@/src/styles/fixedContactBar.module.css';

// One-line summary: Provides a fixed bottom CTA bar for immediate call and SMS contact actions.
const FixedContactBar: React.FC = () => {
  const phoneDisplay = '010-7990-5028';
  const phoneIntl = '+821079905028';
  const smsBody = encodeURIComponent('안녕하세요. 공사 상담 요청드립니다. 현장 위치/공사 내용 확인 부탁드립니다.');

  return (
    <div className={styles.wrapper} role="navigation" aria-label="빠른 상담 연락 채널">
      <a className={`${styles.button} ${styles.call}`} href={`tel:${phoneIntl}`} aria-label="전화 상담">
        전화 {phoneDisplay}
      </a>
      <a className={`${styles.button} ${styles.sms}`} href={`sms:${phoneIntl}?body=${smsBody}`} aria-label="문자 상담">
        문자 상담
      </a>
    </div>
  );
};

export default FixedContactBar;
