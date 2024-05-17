// About.js
import React from 'react';
import PresenterCard from './PresenterCard.js';
import './../../styles/presenters/presenters.css';

const presenters = [
  {
    name: 'Robot Tobor',
    school: 'Example School',
    fieldOfStudy: 'Field of Study',
    presentationTitle: 'Example Presentation Title',
    phone: '(123) 456-7890',
    email: 'robot1@robot1.com',
    image: 'robot1.png',
    bioLink: '#'
  },
  {
    name: 'Tobor Robot',
    school: 'Example School',
    fieldOfStudy: 'Field of Study',
    presentationTitle: 'Example Presentation Title',
    phone: '(123) 456-7890',
    email: 'Tobor@robot2.com',
    image: 'robot2.png',
    bioLink: '#'
  },
  {
    name: 'Botor Borto',
    school: 'Example School',
    fieldOfStudy: 'Field of Study',
    presentationTitle: 'Example Presentation Title',
    phone: '(123) 456-7890',
    email: 'Botor@robot3.com',
    image: 'robot3.png',
    bioLink: '#'
  },
  {
    name: 'Torbo Rtobo',
    school: 'Example School',
    fieldOfStudy: 'Field of Study',
    presentationTitle: 'Example Presentation Title',
    phone: '(123) 456-7890',
    email: 'Torbo@robot4.com',
    image: 'robot4.png',
    bioLink: '#'
  },
  {
    name: 'Obrot Obotr',
    school: 'Example School',
    fieldOfStudy: 'Field of Study',
    presentationTitle: 'Example Presentation Title',
    phone: '(123) 456-7890',
    email: 'obrot@robot5.com',
    image: 'robot5.png',
    bioLink: '#'
  }
];

const renderPresenterCards = () => {
  return presenters.map((presenter, index) => (
    <PresenterCard key={index} presenter={presenter} />
  ));
};

const About = () => (
  <div className="about-container">
    <header className="about-header">
      <h1>Welcome to XYZ Presentations</h1>
    </header>
    <section className="about-section">
      <p>
        Background on presentations
      </p>
    </section>
    <section className="about-section">
      <h2>Timeline of Presentations</h2>
      <ul>
        <li>Names of presentations.</li>
        <li>Other info.</li>
        <li>More info.</li>
      </ul>
    </section>
    <section className="about-section">
      <h2>About the Presenters</h2>
      <div className="presenter-card-container">
        {renderPresenterCards()}
      </div>
    </section>
    <footer className="about-footer">
      <p>&copy; 2024</p>
    </footer>
  </div>
);

export default About;