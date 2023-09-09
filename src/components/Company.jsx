import React from "react";
import brand1 from '../assets/brand-01.png';
import brand2 from '../assets/brand-02.png';
import brand3 from '../assets/brand-03.png';
import brand4 from '../assets/brand-04.png';
import brand5 from '../assets/brand-05.png';
import brand6 from '../assets/brand-06.png';

const Company = () => {
  return (
    <div className="company-profile">
      <div className="company-info" id="company">
        <h2>My Best Client</h2>
        <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>

      {/* brands  */}
      <div className="brands">
            <ul className="brand-list">
                <li>
                    <img src={brand1} alt="" />
                </li>
                <li>
                    <img src={brand2} alt="" />
                </li>
                <li>
                    <img src={brand3} alt="" />
                </li>
                <li>
                    <img src={brand4} alt="" />
                </li>
                <li>
                    <img src={brand5} alt="" />
                </li>
                <li>
                    <img src={brand6} alt="" />
                </li>
            </ul>
      </div>
    </div>
  );
};

export default Company;
