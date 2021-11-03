import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaUserGraduate } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faBriefCase } from "@fortawesome/free-solid-svg-icons";

import Descreption from '../components/Misc/DescreptionCard'
import aboutMeContent from "../data/aboutme/content";


const Index = () => (
  <Main
    description={"Abhilash Reddy Yammanuru's from Arizona State University."}
  >


    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
          
        </div>
      </header>
      <p>  Hi, I&apos;m Abhilash a Masters in Computer Science Student at Arizona State University. I like developing Software applications and anything that involves Artificial Intelligence exites me
        {/* <Link to="/resume">resume</Link> */} 
      </p>
      {/* <article>
        Work<FontAwesomeIcon icon={ faUserGraduate } size="2x"/>
        
      </article>
      <article>
      Education<FontAwesomeIcon icon={ faUserGraduate } size="2x"/>
      </article>
       */}
      
      <Descreption data={aboutMeContent} />
      <p>Feel free to explore the website to know more about me :-)</p>
      
    </article>
  </Main>
);

export default Index;
