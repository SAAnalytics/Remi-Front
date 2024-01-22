// PricingCard.js
import React, { useState } from 'react';
import './PricingCard.css'; // Make sure to create a CSS file with the same name
import ViewPlanDialog from '../ViewPlanDialog';
import { Button } from '@mui/material';


const PricingCard = ({ planName, price, frequency, hotelCount, _id, features, buttonText, priceColor }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);

  return (
    <div className="pricing-card">
      <div className="card-header">
        <h2 className='carPlanName'>{planName}</h2>
        <div className='hotelCountForplan'>Hotels Enrolled: {hotelCount}</div>
        <p className="price" style={{ backgroundColor: priceColor }}>
          <span>
            {price}
          </span>
          <span className="frequency">/{frequency}</span>
        </p>
      </div>
      <ul className="features-list">
        <div className='featuresHeader'>Features:</div>
        {features.map((feature, index) => (
          <li key={index} className={feature.available ? 'available plansFeature' : 'unavailable plansFeature'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <Button className="start-trial-btn" onClick={() => setOpenEditDialog(true)}>View</Button>
      <ViewPlanDialog open={openEditDialog} setOpenEditDialog={setOpenEditDialog} />
    </div>
  );
};

export default PricingCard;
