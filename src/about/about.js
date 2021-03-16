import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../animal-charity.png';
import NavLink from 'react-bootstrap/NavLink'




const About = () => {
    return (
        <div className='green-forest-image' >
          <Navbar className='navbar-custom' expand= 'lg' >
            <img src={logo} alt=''className='logo-image' href="/"></img>
              <NavLink  className='text-title' to="/" href='/' exact>Home</NavLink>
              <NavLink className='text-title' activeClassName="active" to="/about" href='/about'>About</NavLink>
          </Navbar>
          <div className= 'jumbotron'>
            <p className='card-text-about'>
            <h4>Global Wildlife Conservation</h4> We are the world’s largest global network of government and civil society organisations. Its mission is to provide public, private and non-governmental organisations with the knowledge to enable human progress and economic development, whilst also promoting wildlife conservation. Its firm belief is that these improvements cannot happen independently of each other.
            <br></br>
            Global Wildlife Conservation is made up of over 1200 member organisations working in 160 countries. The organisations work together to collect data on biodiversity. From this they have gleaned that 40% of the world’s oxygen comes from rainforests, 50% of chemical medicines are based on nature and 100% of our food comes from nature – we need nature to sustain us. Using this knowledge, they train individuals, communities and businesses to exist in the most positive way for the environment, whilst also flourishing financially.
            </p>
          </div>
          <div className='card-info-contact'>
            <p className='card-info-text-contact'> JOIN HANDS WITH THE WORLD TO SUPPORT THE CAUSE ! DONATE HERE ....
            </p>
          </div> 
          <span><button type="button" className="donate-button-contact"  disabled></button></span>
        </div>  
    )
}


export default About;