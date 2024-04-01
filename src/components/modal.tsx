// Modal.tsx
import React from 'react';
import styles from '../styles/modal.module.css'
import { GalleryItem } from '../pages/gittanGallery';

interface ModalProps {
  item: GalleryItem;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button onClick={onClose} className={styles.close_button}>X</button>
        <div className={styles.title}>{item.title}</div>
        {/* <div className={styles.Image} style={{backgroundImage: `url(${item.imageUrl})`}}></div> */}
        <img className={styles.Image} src={item.imageUrl} alt="Gallery" />
        <div className={styles.item}>{item.content}</div>
        {/* <div className={styles.item}>Uploaded by: {item.name}</div> */}
        {/* <div className={styles.item}>Date: {item.creationTime.split('T')[0]}</div> */}

      </div>
    </div>
  );
};

export default Modal;
