// components/Footer.tsx
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="foot1" style={{ gap: '5px' }}>
        <h2 style={{ 
          color: 'red', 
          backgroundColor: 'antiquewhite', 
          borderRadius: '12px', 
          padding: '6px 2px' 
        }}>
          Tasty Delights
        </h2>
        <p>What we do here is all about better Dinnings.</p>
        <div className="social">
          <a href="#">
            <Image src="/Images/facebook-3-logo.svg" alt="facebook" width={35} height={35} />
          </a>
          <a href="#">
            <Image src="/Images/twitter-3-logo.svg" alt="Twitter" width={35} height={35} />
          </a>
          <a href="#">
            <Image src="/Images/instagram-2016-logo.svg" alt="instagram" width={35} height={35} />
          </a>
          <a href="#">
            <Image src="/Images/linkedin-icon-2-logo.svg" alt="LinkedIn" width={35} height={35} />
          </a>
        </div>
      </div>
      
      <div className="foot2">
        <h2>About</h2>
        <ul>
          <li>About Us</li>
          <li>Why Us</li>
          <li>Partner with Us</li>
          <li>Trust Board</li>
        </ul>
      </div>
      
      <div className="foot3">
        <h2>Menus</h2>
        <ul>
          <li>Pasta</li>
          <li>Salmon</li>
          <li>Deserts</li>
          <li>DIshes</li>
          <li>Beefs</li>
        </ul>
      </div>
      
      <div className="foot4">
        <h2>Contact Us</h2>
        <div>&#128383; Phone</div>
        <div>Store location</div>
        <div>&#9993; Customerservice@mail.com</div>
      </div>
      
      <div className="foot5"></div>
    </footer>
  );
}