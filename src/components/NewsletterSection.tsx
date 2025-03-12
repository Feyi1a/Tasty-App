// components/NewsletterSection.tsx
"use client";

import { FormEvent, useState } from 'react';
import Image from 'next/image';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="food-bar">
        <div>
          <Image 
            src="/feed-roll/foodie-girl.png" 
            alt="food-girl" 
            width={250} 
            height={250} 
          />
        </div>
        <div>
          <h2>Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
      </div>
      <div>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get special offers and updates delivered to your inbox</p>
        <form id="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}