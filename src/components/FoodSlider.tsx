// components/FoodSlider.tsx
"use client";

// import { useState } from 'react';
import Image from 'next/image';

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Gourmet Pasta",
    description: "Handmade pasta with authentic Italian sauce",
    price: 23.5,
    image: "/food-roll/desert1.png"
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs",
    price: 23.5,
    image: "/food-roll/Egg omellete.jpg"
  },
  {
    id: 3,
    name: "Cocktail Special",
    description: "Fresh Atlantic salmon with herbs",
    price: 23.5,
    image: "/food-roll/cocktail.png"
  },
  {
    id: 4,
    name: "Desert Pie",
    description: "Fresh Atlantic salmon with herbs",
    price: 23.5,
    image: "/food-roll/desert-pie.png"
  },
  {
    id: 5,
    name: "Beef Steak",
    description: "Premium cut with signature sauce",
    price: 23.5,
    image: "/food-roll/Fattoush salad.png"
  },
  {
    id: 6,
    name: "Hamburger",
    description: "Handmade pasta with authentic Italian sauce",
    price: 23.5,
    image: "/food-roll/hamburger.png"
  },
  {
    id: 7,
    name: "Vegetable Salad",
    description: "Fresh Atlantic salmon with herbs",
    price: 23.5,
    image: "/food-roll/Vegetable salad.png"
  }
];

export default function FoodSlider() {
  const handleAddToCart = () => {
    alert('Item added to cart');
    console.log('Item added to cart');
  };

  return (
    <div className="slider">
      {foodItems.map((item) => (
        <div key={item.id} className="slide">
          <Image 
            src={item.image} 
            alt={item.name} 
            width={200} 
            height={200} 
          />
          <div className="slide-content">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="inner-slide">
              <button className="add-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
              <button className="buy-now-btn">
                <p>Buy Now</p>
                <p>${item.price.toFixed(1)}</p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}