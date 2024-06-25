import './Homepage.scss';
import logo from './media/logo_square.png';
import portrait from './media/portrait.png'
import copyright from './media/copyright.png'
import step1 from './media/step1.png';
import step2 from './media/step2.png';
import step3 from './media/step3.png';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Homepage() {
    return (
      <div className='home-page'>
         <div className='nav-bar'>
            <NavLink className="logo" exact="true" activeclassname="active" to='/'>
               <img src={logo} alt=""/>
            </NavLink>
         </div>

         <div className='header'>
            <div className='header-left'>
               <img src={portrait} alt=""/>
            </div>
            <div className='header-right'>
               <div className='header-text'>
                  <div className='title'>
                     How To Start And Grow A 
                     $10K/Month <span className="important">Airbnb Business In 2024</span>
                  </div>
                  <div className='subtitle'>
                     <br />
                     In this free training, I'll reveal the exact method I've used to grow a 7-figure 
                     Airbnb business at 26 without owning a single property or any previous experience.
                     <br /> <br />
                     In less than 2 years I went from working a 9-5 to building a portfolio of 19+ properties 
                     that are generating more than <strong>$25,000/month</strong> in net profit.
                     <br /> <br /> <br />
                     <NavLink to="/course">
                        <Button variant="contained" size="large" disableElevation>
                           WATCH NOW
                        </Button>
                     </NavLink>
                  </div>
               </div>
            </div>
         </div>

         <div className='overview-title'>
            <div className='overview-bg'>
               In This Free Training You Will Learn:
            </div>
         </div>

         <div className='overview'>
            <div className='overview-steps'>
               <div className='step-card'>
                  <div className='card-title'>
                     Step 1:
                     <br />
                     The Business Model
                  </div>
                  <br /> <br />
                  <img src={step1} alt=''/>
                  <br /> <br />
                  <div className='card-subtitle'>
                     How The Airbnb Business Model Works And 
                     How You Can Get Started In 2024
                  </div>
               </div>
               <div className='step-card'>
               <div className='card-title'>
                     Step 2:
                     <br />
                     Market Research
                  </div>
                  <br /> <br />
                  <img src={step2} width="150px" height="150px" alt=''/>
                  <br /> <br />
                  <div className='card-subtitle'>
                     How To Find Profitable Properties 
                     That Can Generate $1,000 - $5,000/Month
                  </div>
               </div>
               <div className='step-card'>
               <div className='card-title'>
                     Step 3:
                     <br />
                     Landlords
                  </div>
                  <br /> <br />
                  <img src={step3} width="150px" height="150px" alt=''/>
                  <br /> <br />
                  <div className='card-subtitle'>
                     The Exact Script I've Used To Negotiate 
                     With Landlord And Secure 19+ Properties
                  </div>
               </div>
            </div>
         </div>
         <hr />
         <div className='footer'>
            <div className='footer-block'>
               <img src={copyright} alt=''/>
               Airbnb Academy
            </div>
         </div>
      </div>
   );
}

export default Homepage;