// Modal.tsx
import React from 'react';
import axios from 'axios';
import styles from '../styles/modal.module.css'
import { GalleryItem } from '../pages/gittanGallery';

interface ModalProps {
  item: GalleryItem;
  onClose: () => void;
  onDeleteSuccess?: () => void;
}

const ModalG: React.FC<ModalProps> = ({ item, onClose, onDeleteSuccess }) => {
  const onDelete = async () => {
    try {
      // 예제 URL '/api/gallery/{id}', 실제 URL에 맞게 수정하세요.
      await axios.delete(`/api/gallery?id=${item.id}`);
      alert('Item deleted successfully'); // 사용자에게 삭제 성공 알림
      onDeleteSuccess?.(); // 삭제 성공 후 데이터 갱신을 위한 부모 컴포넌트의 함수 호출
      onClose(); // 모달 닫기
      location.reload();
    } catch (error) {
      console.error('Delete item failed', error);
      alert('Failed to delete the item'); // 사용자에게 삭제 실패 알림
    }
  };
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <button onClick={onClose} className={styles.close_button}>&larr;</button>
          <button onClick={onDelete} className={styles.delete_button}>Delete</button>
        </div>
        <div className={styles.title}>{item.title}</div>
        <img className={styles.Image} src={item.imageUrl} alt="Gallery" />
        <div className={styles.item}>{item.content}</div>
        {/* <div className={styles.item}>Uploaded by: {item.name}</div> */}
        {/* <div className={styles.item}>Date: {item.creationTime.split('T')[0]}</div> */}

      </div>
    </div>
  );
};

export default ModalG;
