import './Homepage.scss';
import logo from './media/logo_square.png';
import { NavLink } from 'react-router-dom';
import './Course.scss';
import courseVideo from './media/course-vid.mp4';
import youtube from './media/youtube.png';
import copyright from './media/copyright.png'
import { Button } from '@mui/material';

function Course() {
    return (
      <div className='home-page'>
         <div className='nav-bar'>
            <NavLink className="logo" exact="true" activeclassname="active" to='/'>
               <img src={logo} alt=""/>
            </NavLink>
         </div>

         <div className='course-title'>
            {/* <video controls>
               <source src={courseVideo} type="video/mp4" />
               Your browser does not support the video tag.
            </video> */}
         </div>
         <div className='yt-link'>
            <a href="https://www.youtube.com/watch?v=t4z7Ly-5kxg&ab_channel=AirbnbWithJonathanLee" target="_blank" rel="noreferrer">
               <img src={youtube} alt=""/> 
            </a>
         </div>
         <div className='cal-link'>
            <a href="https://calendly.com/jonathanleebnb/consultation-call" target="_blank" rel="noreferrer">
               <Button variant="contained" size="large" disableElevation>
                  BOOK A CONSULTATION
               </Button>
            </a>
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

export default Course;