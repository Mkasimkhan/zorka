import React, { useState } from 'react';
import FilterRow from '../FilterRow/FilterRow';
import { data } from '../../Data/Data'; 
import './Filter.css';

function Filter() {
  const [service, setService] = useState('');
  const [geo, setGeo] = useState('');
  const [vertical, setVertical] = useState('');

  // Function to filter data based on selected filters
  const filteredData = data.filter(item => {
    return (
      (service === '' || item.Services === service) &&
      (geo === '' || item.GEO === geo) &&
      (vertical === '' || item.Vertical === vertical)
    );
  });

  return (
    <section className='filter-section'>
      <div className="filter-section-heading">
        <h1>Other Works</h1>
      </div>
      <div className="filter-section-filter-container">
        <div className='filter-select'>
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">All Services</option>
            <option value="Influencer Marketing">Influencer Marketing</option>
            <option value="Performance Marketing">Performance Marketing</option>
          </select>

          <select value={geo} onChange={(e) => setGeo(e.target.value)}>
            <option value="">All GEOs</option>
            <option value="Africa">Africa</option>
            <option value="CIS">CIS</option>
            <option value="Eastern Europe">Eastern Europe</option>
            <option value="Latin America">Latin America</option>
            <option value="WorldWide">WorldWide</option>
          </select>

          <select value={vertical} onChange={(e) => setVertical(e.target.value)}>
            <option value="">All Verticals</option>
            <option value="Delivery">Delivery</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Finance">Finance</option>
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Games">Games</option>
            <option value="Health">Health</option>
            <option value="Retail">Retail</option>
            <option value="Social">Social</option>
            <option value="Travel">Travel</option>
            <option value="Utilities">Utilities</option>
          </select>
        </div>

        <div className="filter-rows">
          {filteredData.map((item, index) => (
            <div className="filter-row">
              <FilterRow key={index} data={item} />
              </div>
            
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Filter;
