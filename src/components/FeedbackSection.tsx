// components/FeedbackSection.tsx
import Image from 'next/image';

interface Review {
  id: number;
  image: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    image: "/feed-roll/review1.png",
    text: "I had the pleasure of dining at Tasty last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
  },
  {
    id: 2,
    image: "/feed-roll/review2.png",
    text: "I had the pleasure of dining at Tasty last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
  },
  {
    id: 3,
    image: "/feed-roll/review2.png",
    text: "I had the pleasure of dining at Tasty last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
  },
  {
    id: 4,
    image: "/feed-roll/review3.png",
    text: "I had the pleasure of dining at Tasty last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
  },
  {
    id: 5,
    image: "/feed-roll/review3.png",
    text: "I had the pleasure of dining at Tasty last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
  }
];

export default function FeedbackSection() {
  return (
    <section className="feed">
      <div className="feedback">
        <div className="feedback-img">
          <h2>What Our Customers Say!</h2>
          <Image 
            src="/feed-roll/pngwing 2.png" 
            alt="Feedback" 
            width={250} 
            height={250} 
          />
        </div>
        
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <Image 
              src={review.image} 
              alt="Customer" 
              width={100} 
              height={100} 
            />
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}