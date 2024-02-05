import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo, openModal }) => {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() =>
        openModal({ src: photo.urls.regular, alt: photo.alt_description })
      }
    >
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
