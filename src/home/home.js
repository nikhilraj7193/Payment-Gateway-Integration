import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../animal-charity.png';
import NavLink from 'react-bootstrap/NavLink'
import Carousel from'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';


const Home = () => {

    return (
        <div className='fire-forest-image flex-container' >
          <Navbar className='navbar-custom' expand= 'lg' >
            <img src={logo} alt=''className='logo-image' href="/"></img>
              <NavLink  className='text-title' to="/" href='/' exact>Home</NavLink>
              <NavLink className='text-title' activeClassName="active" to="/about" href='/about'>About</NavLink>
          </Navbar>
          <Carousel className='carousel-card' >
            <Carousel.Item>
            <Card className="cards">
              <h1 className='card-text-heading'>Fires in the Amazon</h1>
              <h5 className='card-text-heading'>Highly-rated charities working on recovery in the rainforest</h5>
              <br></br>
              <p className='card-text-heading'> The Amazon rainforest is on fire. Some reports suggest that as many as 9,000 new wildfires have started in the rainforest over the last week. And, while forest fires in the Amazon are not a new phenomenon, the number of fires currently burning and affected land area are unprecedented.</p>
            </Card>
            </Carousel.Item>
            <Carousel.Item>
            <Card className="cards">
              <h1 className='card-text-heading'>Biodiversity and Indigeneous people Affected</h1>
              <br></br>
              <p className='card-text-heading'>The Amazon produces 20% of the Earth’s oxygen. Not only do the wildfires threaten to disrupt our production of oxygen and Earth’s delicate elemental balance, but they are also affecting countless groups of indigenous people and endangering the rainforest’s rich biodiversity.</p>
            </Card>
            </Carousel.Item>
            <Carousel.Item>
            <Card className="cards">
              <h1 className='card-text-heading'>Thousands of animals perished</h1>
              <br></br>
              <p className='card-text-heading'>It’s been estimated that over one billion animals have been killed nationally. This includes thousands of species which are already endangered and vulnerable. Several other iconic species being burnt alive, and many thousands more injured and homeless.</p>
            </Card>
            </Carousel.Item>
          </Carousel>
          <div className='card-info'>
            <p className='card-info-text'>We must all do our bit to protect our world from climate disaster - failure to act will make extreme weather standard,  with deadly consequences for people and nature  With the money raised, our teams along with local organisations will carry out relief work. Your small donation will make a change to the world.
            </p>
          </div> 
          <span><button type="button" className="donate-button"  disabled></button></span>
        </div>
    )
}

export default Home;