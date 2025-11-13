import React, { useRef } from "react";

import '../styles/Services.css';

const services = [
  {
    icon: '💻',
    title: 'Custom Software Development',
    description: 'Tailored applications built to meet your business goals with full-stack development capabilities.',
    color: 'red'
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Responsive, SEO-friendly websites using the latest technologies like React, Node.js and Next.js.',
    color: 'blue'
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Build intuitive mobile apps for iOS and Android that offer smooth performance and great UX.',
    color: 'orange'
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Create engaging, user-centered interfaces that enhance usability and conversion rates.',
    color: 'green'
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Migrate, deploy, and manage cloud infrastructures with AWS, Azure or Google Cloud.',
    color: 'purple'
  },
  {
    icon: '📊',
    title: 'Agile Consulting',
    description: 'Drive team productivity with agile coaching, scrum practices, and product management.',
    color: 'pink'
  }
];

const ExpertiseBlock = () => {
  return (
    <section className="expertise-block">
      <div className="expertise-header">
        <h2>Our Services</h2>
        <p>
          We provide modern and scalable digital solutions to help your business thrive in the digital world.
        </p>
      </div>
      <div className="expertise-grid">
        {services.map((service, index) => (
          <div className="expertise-card" key={index}>
            <div className={`icon ${service.color}`}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseBlock;
