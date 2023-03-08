import React from 'react';

const Navbar = ({ setChecked, checked, handlePrice, handleCategories }) => {
  return (
    <div className='nav-wrapper'>
      <h5>Filter By :</h5>
      <div className='nav-item'>
        <input type='checkbox' id='check' onChange={() => setChecked(!checked)} />
        <label htmlFor='check'>Open Now</label>
      </div>
      <div>
        <select onChange={(e) => handlePrice(e.target.value)}>
          <option>Price</option>
          <option value='low'>Low Cost</option>
          <option value='medium'>Medium Cost</option>
          <option value='expensive'>Extreme Cost</option>
        </select>
      </div>
      <div>
        <select placeholder='Categories' onChange={(e) => handleCategories(e.target.value)}>
          <option value='asian'>Asian</option>
          <option value='japanese'>Japanese</option>
          <option value='mexican'>Mexican</option>
          <option value='balinese'>Balinese</option>
          <option value='thai'>Thai</option>
          <option value='chinese'>Chinese</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
