import './home-page.css'
import useLocalStorage from 'use-local-storage'
import { MdOutlineCarRepair } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { IoSchool } from "react-icons/io5";
import { TbBrandCss3 } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
















import { Link } from 'react-router-dom';



function Home_page() {
  

     
     
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = ()=>{
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className='home-page-con'>
      <div className="nav-con">
    

        <div className="nav-title-con">

       
         
           <div className="nav-title">
           FD
           </div>

     
        </div>

        <div className="nav-info-con">
        <div className="nav-info-links-con">

       

            <div className="nav-info-link">Home</div>
            <div className="nav-info-link">What I Do</div>
            <div className="nav-info-link">About</div>
            <div className="nav-info-link">Contact</div>



        </div>
       
       

        </div>

      </div>
 {/**************************************************************************** */}

      <div className="hero-con">
        <div className="welcome-con">

         
          <div className="welcome-text-name">HEY, I'M FARUK</div>
          <div className="welcome-text-name-job">A Full Stack Web Developer</div>
          
        </div>
       {/* <img className="hero-con-img" src={card} alt="" />
        <img className="hero-con-img2" src={card2} alt="" /> */}

      </div>
 {/**************************************************************************** */}

       <div className="features-con">

       <div className="features-img-con" >
          <div className="features-img" >What I Do</div>
        </div>
        
        <div className="features-list-con">
        <div className="features-list">
            <h3 className='features-list-title'>Beautiful and User-friendly Website</h3>
            <p className='features-list-text'>Choosing a modern design that reflects your brand identity for a clean and uncluttered design. Use a consistent color scheme, typography, and layout throughout the site.
Ensure a logical and intuitive flow for navigation. Users should easily find what they're looking for without unnecessary clicks.</p>
          </div>
          <div className="features-list">
            <h3 className='features-list-title'>Front-end Development</h3>
            <p className='features-list-text'>User Interface (UI) Design: Create visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript.
Client-Side Programming: Develop interactive and dynamic features using front-end frameworks like React and
Cross-Browser Compatibility: Ensure that the web application works seamlessly across different browsers and devices.</p>
          </div>
          <div className="features-list">
            <h3 className='features-list-title'>Back-end Development</h3>
            <p className='features-list-text'>Server-Side Programming: Build the server-side logic and functionality using server-side languages like Node.js.
Database Management: Design, implement, and manage databases (e.g., MySQL, MongoDB) to store and retrieve data efficiently.
Server Configuration: Set up and configure servers to host web applications, and manage server-side aspects of the application's architecture.</p>
          </div>
          <div className="features-list">
            <h3 className='features-list-title'>RESPONSIVE WEB APP</h3>
            <p className='features-list-text'>Create flexible layouts that can adapt to different screen sizes. This involves using relative units like percentages instead of fixed units like pixels for layout elements.
Employ responsive images and media queries to ensure that images and multimedia content scale appropriately based on the device's screen size and resolution.</p>
          </div>
        

        </div>

      

       </div>

       {/**************************************************************************** */}

      <div className="hero-con hero-con-about">
         <div className="features-list">
            <h3 className='features-list-title features-list-title-about'>ABOUT ME</h3>
            <p className='features-list-text features-list-text-about'>I'M FARUK ABDELA HUSSEN a full stack web developer. My web development journey has been a fascinating. From the early days of navigating the basics of HTML and CSS to the more recent explorations into advanced JavaScript frameworks, every step has been a building block in my evolving skill set.Over time, I embraced frameworks like React. The process of turning code into visually appealing and functional websites became both a science and an art.As the horizon expanded, so did my understanding of backend technologies. Exploring languages like Node.js opened up new possibilities, allowing me to create robust and scalable web applications.I am eager to dive into the specifics of your project, learn more about your objectives, and ensure that the final result exceeds your expectations.

</p>
          </div>

      </div>
 {/**************************************************************************** */}


        {/***************************************************************************************************** */}
        <div className="features-of-platform-con-topic">SOME OF MY WORK</div>

        <div className='display-courses-con'>
      
      
      <Link to={'https://go-go-v1.netlify.app/'} className='display-courses' > 
      <MdOutlineCarRepair className='display-courses-pic' />

        <div className="display-courses-middle-con">
          <div className="display-courses-middle-name-con">
            <div className="display-courses-middle-name display-courses-middle-name-title">GO GO</div>
            <div className="display-courses-middle-name"  >Taxi booking platform</div>
          </div>
        </div>
    
      </Link>
      <Link to={'https://admintele.netlify.app/'} className='display-courses' > 
      <TbTargetArrow className='display-courses-pic' />
       
       
        <div className="display-courses-middle-con">
          <div className="display-courses-middle-name-con">
            <div className="display-courses-middle-name display-courses-middle-name-title">HIT</div>
            <div className="display-courses-middle-name"  >Goal setting and reporting system</div>
          </div>
        </div>
    
      </Link>
      <Link to={''} className='display-courses' > 
      <IoSchool className='display-courses-pic' />

       
       
        <div className="display-courses-middle-con">
          <div className="display-courses-middle-name-con">
            <div className="display-courses-middle-name display-courses-middle-name-title">WE LEARN</div>
            <div className="display-courses-middle-name"  >Online learning</div>
          </div>
        </div>
    
      </Link>
     
    
    
     
       
         </div>
  {/**************************************************************************** */}
  <div className="features-of-platform-con-topic">SOME OF MY SKILLS</div>


       <div className="features-of-platform-con">

          <div className="features-of-platform-item-con">
           <div className='features-of-platform-item-top-con'>
          <div className='features-of-platform-item-top'>HTML</div>
           </div>
           <div className='features-of-platform-items'>
           <AiOutlineHtml5 className='features-of-platform-items'/>


           </div>
          </div>


          <div className="features-of-platform-item-con">
           <div className='features-of-platform-item-top-con'>
          <div className='features-of-platform-item-top'>CSS </div>
           </div>
           <div className='features-of-platform-items'>

           <TbBrandCss3 className='features-of-platform-items'/>
           </div>


          </div>


          <div className="features-of-platform-item-con">
           <div className='features-of-platform-item-top-con'>
          <div className='features-of-platform-item-top'>JAVA SCRIPT</div>
           </div>
           <div className='features-of-platform-items'>
           <TbBrandJavascript className='features-of-platform-items' />



           </div>
          </div>


          <div className="features-of-platform-item-con">
           <div className='features-of-platform-item-top-con'>
          <div className='features-of-platform-item-top'>REACT JS</div>
           </div>
           <div className='features-of-platform-items'>
           <FaReact className='features-of-platform-items'/>


           </div>
          </div>

          <div className="features-of-platform-item-con">
           <div className='features-of-platform-item-top-con'>
          <div className='features-of-platform-item-top'>Next JS</div>
           </div>
           <div className='features-of-platform-items'>
           <TbBrandNextjs className='features-of-platform-items' />


           </div>
          </div>

          <div className="features-of-platform-item-con">
           <div className='features-of-platform-item-top-con'>
          <div className='features-of-platform-item-top'>NODE JS</div>
           </div>
           <div className='features-of-platform-items'>
           <FaNodeJs className='features-of-platform-items' />


           </div>
          </div>
          
          <div className="features-of-platform-item-con">
           <div className='features-of-platform-item-top-con'>
          <div className='features-of-platform-item-top'>MYSQL</div>
           </div>
           <div className='features-of-platform-items'>
           <SiMysql className='features-of-platform-items' />


           </div>
          </div>

          <div className="features-of-platform-item-con">
           <div className='features-of-platform-item-top-con'>
          <div className='features-of-platform-item-top'>Mongodb</div>
           </div>
           <div className='features-of-platform-items'>
           <SiMongodb className='features-of-platform-items' />


           </div>
          </div>

        </div>
       

         <div className="features-of-platform-con-topic">GET IN TOUCH</div>

       <div className='contact-info-con'>
        <div className='contact-info-list'> <CiLocationOn className='contact-info-list-icon'/> <div>ADDIS ABABA, ETHIOPIA</div> </div>
        <div className='contact-info-list'><MdPhoneIphone className='contact-info-list-icon' /> <div>(+251)925090339</div></div>
        <div className='contact-info-list'> <CiMail className='contact-info-list-icon'/> <div>farukabdellah@gmail.com</div></div>
       </div>

       <div className='contact-info-con'>
       <div className='contact-info-list'> <CiLinkedin className='contact-info-list-icon'/> </div>
        <div className='contact-info-list'> <CiFacebook className='contact-info-list-icon'/> </div>
        <div className='contact-info-list'><TbBrandTelegram className='contact-info-list-icon' /> </div>
        <div className='contact-info-list'> <FaWhatsapp className='contact-info-list-icon'/> </div>

       </div>

<div className='footer-con'>
Copyright © 2024. All Rights Reserved. Website Designed by Faruk Abdellah
</div>

    </div>
  )
}

export default Home_page