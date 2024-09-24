import './FilterRow.css';
import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

function FilterRow({ data }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="row" onClick={handleClick}>
      <div className="visible">
        <div className="company rowsame">{data?.Company}</div>
        <div className="product rowsame">{data?.Name}</div>
        <div className="geo rowsame">{data?.Vertical}</div>
        <div className="showbtn">
          <div className="show-icon">
          <IoIosArrowDropdown />
          </div>
        </div>
        {/* Hover image */}
        <div className={`hover-image ${clicked ? 'hide-hover' : ''}`}>
          <img src={data.Image} alt="" />
        </div>
      </div>

      {/* Expanded details on click */}
      <div className={clicked ? 'expanded' : 'collapsed'}>
        <div className="row-left">
          <img src={data.Image} alt="" />
        </div>
        <div className="row-mid">
          <div className="row-mid-subs">
            <h6>Services</h6>
            <h4>{data.Services}</h4>
          </div>
          <div className="row-mid-subs">
            <h6>Vertical</h6>
            <h4>{data.Vertical}</h4>
          </div>
          <div className="row-mid-subs">
            <h6>GEO</h6>
            <h4>{data.GEO}</h4>
          </div>
          <div className="row-mid-subs">
            <h6>Platform</h6>
            <h4>{data.Platform}</h4>
          </div>
        </div>
        <div className="row-right">
          <h6>Results</h6>
          <h4>{data.Results}</h4>
        </div>
      </div>
    </div>
  );
}




export default FilterRow;
