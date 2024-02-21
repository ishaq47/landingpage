import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaRegWindowRestore,
  FaTwitter,
} from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import phone from "../phone.jpg";
import coding from "../coding.jpg";
import laptop from "../laptop.jpg";
import profile1 from "../pexels-andrea-piacquadio-3785079.jpg";
import profile2 from "../pexels-pixabay-415829.jpg";
import profile3 from "../pexels-george-dolgikh-1310522.jpg";

function LandingPage() {
  return (
    <div>
      {/* nabvar  */}
      <div className="d-flex justify-content-between h-12 my-2 align-items-center  mx-md-5   ">
        <h4 style={{ marginRight: "100px" }}>startBootstrap</h4>
        <button className="btn btn-primary px-3 py-3">Sign Up</button>
      </div>
      {/* end navbar
       */}

      <div
        style={{ height: "600px" }}
        className="intro  mb-5 d-flex flex-column  align-items-center justify-content-center "
      >
        <h1 className="text-white fw-bold  ">
          Generate more leads
          <br /> with a professional
          <br /> landing page!
        </h1>
        <div className=" d-flex   gap-2  my-3  ">
          <input
            className="container1 pt-3 flex px-2 align-items-center py-3    rounded-2 border-0 "
            type="email"
            placeholder="Email Address"
         
          />
          <button className="btn btn-primary px-4  ">Submit</button>
        </div>
      </div>
      {/* intro page ends  */}

      <div className="d-md-flex   justify-content-around  align-items-md-center  my-5 " style={{height:"500px"}}>
        <div className=" my-5 text-center   ">
          <FaRegWindowRestore
            className="mb-3 text-primary"
            style={{ height: "50px", width: "50px" }}
          />
          <h2>Fully Responsive</h2>
          <p>
            This theme will look great on any device,
            <br /> no matter the size!
          </p>
        </div>
        <div className=" my-5  text-center ">
          <FaBootstrap
            className="mb-3 text-primary "
            style={{ height: "50px", width: "50px" }}
          />
          <h2>Bootstrap 5 Ready</h2>
          <p>
            Featuring the latest build of the <br />
            new Bootstrap 5 framework!
          </p>
        </div>
        <div className=" my-5  text-center ">
          <FiLayout
            className=" mb-3 text-primary"
            style={{ height: "50px", width: "50px" }}
          />
          <h2>Easy to Use</h2>
          <p>
            Ready to use with your own content,
            <br /> or customize the source files!
          </p>
        </div>
      </div>
      {/* end the section */}

      <div className="my-md-5">
        <div className="d-md-flex">
          <div
            className=" maindiv"
            
          >
            {" "}
            <h2>Fully Responsive Design</h2>
            <p>
              When you use a theme created by Start Bootstrap, you know that the
              theme will look great on any device, whether it's a phone, tablet,
              or desktop the page will behave responsively!
            </p>
          </div>
          <div >
            <img className="imagelogo"  src={phone} />
          </div>
        </div>
        <div className="d-flex flex-md-row flex-row-md-reverse  flex-column-reverse   justify-content-center align-items-center ">
          <div className="  " >
            <img className="imagelogo "  src={coding} />
          </div>
          <div className="">
          <div
            className="maindiv d-flex flex-column  justify-content-center "
          
          >
            <h2>Updated For Bootstrap 5 </h2>
            <p>
              Newly improved, and full of great utility classes, Bootstrap 5 is
              leading the way in mobile responsive web development! All of the
              themes on Start Bootstrap are now using Bootstrap 5!{" "}
            </p>
          </div>
          </div>
        </div>
        <div className="d-md-flex ">
          <div
            className="maindiv "
            
          >
            <h2>Easy to Use & Customize </h2>
            <p>
              Landing Page is just HTML and CSS with a splash of SCSS for users
              who demand some deeper customization options. Out of the box, just
              add your content and images, and your new landing page will be
              ready to go!{" "}
            </p>
          </div>
          <div>
            <img className="imagelogo"  src={laptop} />
          </div>
        </div>
      </div>
      {/* end section  */}

      {/* profile section  */}
      <div
        className="my-5  d-md-flex flex-column align-items-center justify-content-center"
        style={{ height: "500px" }}
      >
        <h2 className="d-flex justify-content-center ">
          What people are saying...
        </h2>
        <div className="profile d-md-flex   justify-content-around  align-items-md-center  my-5  ">
          <div className="profiletext text-center d-flex flex-column   my-2 ">
            <img
              className="profileimg rounded-circle object-fit-cover  d-flex align-self-center my-1  "
            
              src={profile3}
            />
            <h3>Margaret E.</h3>
            <p >"This is fantastic! Thanks so much guys!"</p>
          </div>
          <div className=" profiletext text-center  d-flex flex-column 0 my-2">
            <img
              className="profileimg rounded-circle object-fit-cover   d-flex align-self-center my-1  "
            
              src={profile1}
            />
            <h3>Fred S.</h3>
            <p >
              "Bootstrap is amazing. I've been using it to create lots of super
              nice landing pages."
            </p>
          </div>
          <div className="profiletext text-center d-flex flex-column my-2">
            <img
              className="profileimg rounded-circle object-fit-cover d-flex align-self-center my-1  "
              
              src={profile3}
            />
            <h3>Sarah W.</h3>
            <p>
              "Thanks so much for making these free resources available to us!"
            </p>
          </div>
        </div>
      </div>
      {/* ends profile section  */}
      {/* footer section  */}
      <div className="footer1">
        <div
          className=" footer d-flex flex-column gap-3 align-items-center justify-content-center  "
          style={{ height: "300px" }}
        >
          <h1 className="text-white">Ready to get started? Sign up now!</h1>
          <div className="d-flex gap-3 m-2  ">
            <input
              className="container1 pt-3 d-flex px-2 align-items-center py-3   rounded-2 border-0 " 
              type="email"
              placeholder="Email Address"
              
            />
            <button className="btn btn-primary px-4   ">Submit</button>
          </div>
        </div>
        <div className="d-md-flex justify-content-between my-5 mx-md-5">
          <div>
            <ul className="d-flex gap-2 list-unstyled text-primary  ">
              <li>About</li>
              <li>Contact</li>
              <li>Term of Use</li>
              <li>Privacy Policy</li>
            </ul>
            <p>© Your Website 2023. All Rights Reserved.</p>
          </div>

          <div className="d-flex  gap-3 text-primary align-items-md-center justify-content-center  ">
          <FaFacebook style={{width:"30px", height:"30px"}} />
          <FaTwitter style={{width:"30px", height:"30px"}} />
          <FaInstagram style={{width:"30px", height:"30px"}} />
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default LandingPage;
