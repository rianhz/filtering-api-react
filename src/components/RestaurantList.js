import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';

const RestaurantList = ({ restaurant, checked, setRestaurant }) => {
  return (
    <div>
      <h1>List</h1>
      <div className='card-wrapper'>
        {restaurant.map((el, i) => {
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
                <button className='learn'>LEARN MORE</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
