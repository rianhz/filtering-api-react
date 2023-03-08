import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import './App.css';
import Modals from './components/Modals';
import Navbar from './components/Navbar';

function App() {
  const [restaurant, setRestaurant] = useState([]);
  const [checked, setChecked] = useState(false);
  const [price, setPrice] = useState('');
  const [categories, setCategories] = useState('');
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('https://6406bf75862956433e58b05e.mockapi.io/restaurants').then((response) => {
      setRestaurant(response.data);
    });
  }, []);

  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    setShow(true);

    const dats = restaurant.find((el) => el.id === e);
    setDetails(dats);
  };

  console.log(details);
  const handlePrice = (e) => {
    setPrice(e);
  };

  const handleCategories = (e) => {
    setCategories(e);
  };

  return (
    <div className='App'>
      <h1>Restaurants</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum!
      </p>
      <Navbar setChecked={setChecked} checked={checked} setPrice={setPrice} handlePrice={handlePrice} handleCategories={handleCategories} />
      <div>
        <h1>List</h1>
        <div className='card-wrapper'>
          {restaurant
            .filter((el) => {
              if (checked) {
                return el.status === true;
              } else if (price === 'low') {
                return el.price <= 5000;
              } else if (price === 'medium') {
                return el.price <= 10000 && el.price > 5000;
              } else if (price === 'expensive') {
                return el.price > 10000;
              } else if (categories === 'asian') {
                return el.categories === 'Asian';
              } else if (categories === 'mexican') {
                return el.categories === 'Mexican';
              } else if (categories === 'thai') {
                return el.categories === 'Thai';
              } else if (categories === 'japanese') {
                return el.categories === 'Japanese';
              } else if (categories === 'balinese') {
                return el.categories === 'Balinese';
              } else if (categories === 'chinese') {
                return el.categories === 'Chinese';
              } else {
                return el;
              }
            })
            .map((el, i) => {
              return (
                <div className='card' key={i}>
                  <div className='card-image'>
                    <img src={el.image} alt='img' />
                  </div>
                  <div className='card-body'>
                    <h3>{el.restaurant_name}</h3>
                    {el.rating === 5 ? (
                      <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    ) : el.rating === 4 ? (
                      <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    ) : el.rating === 3 ? (
                      <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    ) : el.rating === 2 ? (
                      <div>
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    ) : el.rating === 1 ? (
                      <div>
                        <AiFillStar />
                      </div>
                    ) : (
                      ''
                    )}
                    <div className='card-footer'>
                      <span>
                        {el.categories} - {el.price}
                      </span>
                      <span>{el.status === true ? 'Open Now' : 'Closed'}</span>
                    </div>
                    <Button className='learn' onClick={() => handleShow(el.id)}>
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
        <Modals show={show} handleClose={handleClose} details={details} />
      </div>
    </div>
  );
}

export default App;
