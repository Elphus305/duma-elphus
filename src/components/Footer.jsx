import { Link } from "react-router-dom"

const Footer = () => {
  return (
<section className="col-md-12 ">
    <div className="row">
    <footer className='footer-container bg-warning '>
      <div className='footer-content col'>
        <div className='footer-section'>
          
            <h4 className='text-center'>About Us</h4>
              <li><p>Welcome to ololua deals and hotels, where modern luxury meets heartfelt hospitality in the heart of Nairobi. Established to offer a serene escape, we provide elegantly designed rooms, personalized service, and exceptional amenities tailored for both leisure and business travelers. Experience the perfect blend of comfort and charm—your home away from home awaits. </p></li>
              <li>
                <p>This is a platform that tries to ease the tiresome process of trying to be able to get a suitable place for value for money and a place to call home</p>
              </li>
              <li><p>
              We are have varios facilities to ensure quality stay and a create wanting for more visits
              </p></li>
          </div>
        </div>
    

      <div className="footer-content ">
        <div className="footer-section col">
         
            
                <h4>info</h4>
                <li><p>Detailed Property Descriptions: Clear, honest information about room types, amenities (e.g., Wi-Fi, pool), and unique selling points.</p></li>
                <li><p>High-Quality Visuals: Professional photos and videos that showcase the property and its surroundings.</p></li>
                <li><p>Real-Time Booking Engine: Enables instant, secure reservations and showcases accurate, real-time availability and pricing.</p></li>
                <li><p>Guest Reviews & Ratings: Transparent feedback to build trust and credibility.</p></li>
                <li><p>Clear Location Information: Maps and details on proximity to attractions or transportation.</p></li>
                <li><p>Contact Information: Easily accessible, responsive customer support options.</p></li>        

            </div> <div className=" footer-content ">
            <div className="footer-section col">
                    <h4>For more info you can find us throgh our varios platforms</h4>
                    <img src="images/instagram.jpeg" alt="" />
                    <a href="http//:www.instgram.com">Instagram</a>
            </div>
        </div>

          </div>
    </footer>
    
    </div>
</section>
  )
}

export default Footer