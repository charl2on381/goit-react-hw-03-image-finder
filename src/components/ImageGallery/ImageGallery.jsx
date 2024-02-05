import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {photos.map(photo => (
        <ImageGalleryItem key={photo.id} photo={photo} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
