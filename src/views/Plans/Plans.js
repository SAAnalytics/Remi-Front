import React from 'react';
import './Plans.css';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import PricingCard from "./PricingCard";
import { Grid } from '@mui/material';


const plansDummyData = [
  {
    planName: 'Plan A',
    price: '$100',
    _id: 'hiuh234huih234nj34nj565nj67n77',
    frequency: 'Weekly',
    hotelCount: 157,
    priceColor: '#e63d39',
    dummyFeatures: [
      { name: 'Email Survey', available: true },
      { name: 'Multi-Property', available: false },
      { name: 'QR Service', available: true },
      { name: '24/7 Support', available: true },
      { name: 'Alerts & Notifications', available: false }
    ]
  },
  {
    planName: 'Plan B',
    price: '$150',
    _id: 'hiuh234huih234nj34nj565nj67n77',
    frequency: 'Monthly',
    hotelCount: 334,
    priceColor: '#16bbcf',
    dummyFeatures: [
      { name: 'Email Survey', available: false },
      { name: 'Multi-Property', available: true },
      { name: 'QR Service', available: true },
      { name: '24/7 Support', available: false },
      { name: 'Alerts & Notifications', available: false }
    ]
  },
  {
    planName: 'Plan C',
    price: '$200',
    _id: 'hiuh234huih234nj34nj565nj67n77',
    frequency: 'Yearly',
    hotelCount: 124,
    priceColor: '#fb9006',
    dummyFeatures: [
      { name: 'Email Survey', available: true },
      { name: 'Multi-Property', available: true },
      { name: 'QR Service', available: false },
      { name: '24/7 Support', available: true },
      { name: 'Alerts & Notifications', available: false }
    ]
  },
  {
    planName: 'Plan D',
    price: '$180',
    _id: 'hiuh234huih234nj34nj565nj67n77',
    frequency: 'Monthly',
    hotelCount: 903,
    priceColor: '#4ba64f',
    dummyFeatures: [
      { name: 'Email Survey', available: false },
      { name: 'Multi-Property', available: false },
      { name: 'QR Service', available: true },
      { name: '24/7 Support', available: true },
      { name: 'Alerts & Notifications', available: true }
    ]
  }
];




const Plans = (props) => {
  return (<>
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} mt={4}>
        <div className="planCardsContainer">
          {plansDummyData.map((data, key) => {
            return (<PricingCard
              planName={data.planName}
              price={data.price}
              _id={data._id}
              hotelCount={data.hotelCount}
              frequency={data.frequency}
              priceColor={data.priceColor}
              buttonText="Edit Plan details"
              features={data.dummyFeatures}
            />)
          })}
        </div>

      </Grid>
    </DashboardLayout>
  </>);
};

export default Plans;