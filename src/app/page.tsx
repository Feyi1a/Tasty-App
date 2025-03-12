// app/page.tsx
"use client";

import { useState } from 'react';
// import Image from 'next/image';
import './globals.css';
import FoodSlider from '@/components/FoodSlider';
import FeedbackSection from '@/components/FeedbackSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import SignupModal from '@/components/SignupModal';

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const showModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <main>
      <nav>
        <div className="logo">Tasty Delights</div>
        <div className="nav-links">
          <a href="#" onClick={() => showModal('login')}>Login</a>
          <a href="#" onClick={() => showModal('signup')}>Sign Up</a>
          <a href="#menu">Menu</a>
          <a href="#location">Location</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Experience Culinary Excellence</h1>
          <p>Discover the finest dishes from around the world</p>
          <button onClick={() => showModal('signup')}>Explore Now</button>
        </div>
      </section>

      <section id="menu" className="slider-container">
        <h2>Our Specialties</h2>
        <FoodSlider />
      </section>

      <FeedbackSection />

      <section id="location">
        <div id="map"></div>
      </section>

      <NewsletterSection />

      {activeModal === 'login' && (
        <LoginModal onClose={closeModal} />
      )}

      {activeModal === 'signup' && (
        <SignupModal onClose={closeModal} />
      )}

      <Footer />
    </main>
  );
}