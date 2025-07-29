import React from "react";
import "./App.css";
import logo from "./assets/logo.png"; // Put your logo in src/assets/

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <header>
        <h1>Anker Soundcore P40i True Wireless</h1>
        <p>Big bass. Clean calls. All at under $40.</p>
        <img
          src="https://m.media-amazon.com/images/I/61e9Npl3upL._AC_SX569_.jpg"
          alt="Soundcore P40i"
          className="product-img"
        />
        <a
          href="https://www.amazon.com/dp/B0CQXG17RL?tag=more4kids0a-20"
          className="buy-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now on Amazon
        </a>
      </header>

      <div className="section-divider" />

      <section className="features">
        <h2>Why Pick the P40i?</h2>
        <ul>
          <li>Over 10,000 5-star reviews, often compared to Bose</li>
          <li>10 hrs on a charge + 20 more with the case</li>
          <li>Custom EQ via app & deep bass</li>
        </ul>
      </section>

      <section class="accessories">
        <h2>Recommended Accessories</h2>
          <div class="accessory-grid">
            <div class="accessory-card">
              <img src="https://m.media-amazon.com/images/I/81b8-M0WEyL._AC_SX679_.jpg" alt="Earbud Case" />
              <p>RLSOCO Hard Case for Anker Soundcore P40i</p>
             <a href="https://www.amazon.com/dp/B0D1KBB2B8/ref=cm_sw_r_as_gl_api_gl_i_47C9G898B1Y5H51P5PZJ?linkCode=ml1&tag=more4kids0a-20&linkId=d71f4085597afc5615333887ed7127d3" target="_blank" rel="noopener noreferrer">Shop Now</a>
            </div>
            <div class="accessory-card">
              <img src="https://m.media-amazon.com/images/I/61HY2hCMfDL._AC_SX679_.jpg" alt="earbud tips kit" />
              <p>Ear Tips Kit Memory Foam </p>
              <a href="https://www.amazon.com/dp/B0DMF3VY9H/ref=cm_sw_r_as_gl_api_gl_i_CQPAG2X45KN98CYH2SKE?linkCode=ml1&tag=more4kids0a-20&linkId=4e12084549ec84cf8f337926008fe655" target="_blank" rel="noopener noreferrer">Shop Now</a>
            </div>
            <div class="accessory-card">
              <img src="https://m.media-amazon.com/images/I/613YtdrAKpL._AC_SX679_.jpg" alt="Magnetic Earbuds Strap" />
              <p>Geekria 2 Pack Earbuds Magnetic Anti-Lost Strap</p>
              <a href="https://www.amazon.com/dp/B08GY8Q3ZQ?tag=more4kids0a-20" target="_blank" rel="noopener noreferrer">Shop Now</a>
            </div>
          </div>
      </section>

      <div className="section-divider" />

      <footer>
        <p>As an Amazon Associate, I earn from qualifying purchases.</p>
      </footer>
    </div>
  );
}

export default App;
