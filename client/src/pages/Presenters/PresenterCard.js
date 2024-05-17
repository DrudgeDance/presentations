// PresenterCard.js
import React, { useEffect, useState } from 'react';
import './../../styles/presenters/presenters.css';

const PresenterCard = ({ presenter }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`./../../assets/images/${presenter.image}`);
        setImageSrc(image.default);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };
    loadImage();
  }, [presenter.image]);

  return (
    <div className="presenter-card">
      <div className="profile-photo-container">
        {imageSrc && <img src={imageSrc} alt={presenter.name} className="profile-photo" />}
      </div>
      <div className="text-center">
        <h3 className="presenter-name">{presenter.name}</h3>
        <p className="presenter-detail">{presenter.school}</p>
        <p className="presenter-detail">{presenter.fieldOfStudy}</p>
        <p className="presenter-detail">{presenter.presentationTitle}</p>
        <p className="presenter-detail">{presenter.phone}</p>
        <p className="presenter-detail">{presenter.email}</p>
        <div className="list-item-content__button-container">
          <a className="list-item-content__button" href={presenter.bioLink}>Read Bio</a>
        </div>
      </div>
    </div>
  );
};

export default PresenterCard;