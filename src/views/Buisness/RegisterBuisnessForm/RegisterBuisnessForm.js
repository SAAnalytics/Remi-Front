import React from 'react';
import './RegisterBuisnessForm.css';
import brandLogo from '../../../Images/surveySphere.png';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

const RegisterBuisnessForm = (props) => {
  const {
    setOpenAddBuisness,
    open,
  } = props;
  return (<>
  <Dialog className='addBuisnessDialog' open={open} onClose={() => setOpenAddBuisness(false)}>
    <DialogTitle>
      Add Buisness
    </DialogTitle>
    <div className="hotelRegisterContainer">
      <div className="brand-logo">
        <img src={brandLogo} className='hotelRegistarionLogo' height='100%' width='100%' alt="" />
      </div>
      <div className="brand-title">UserName</div>
      <div className="hotelsInputs">
        <label className='hotelFormLabel'>Business Name</label>
        <input className='hotelFormInputs' type="text" placeholder="example Group of Hotels" />
        <label className='hotelFormLabel'>Buisness Email</label>
        <input className='hotelFormInputs' type="email" placeholder="example@test.com" />
        <label className='hotelFormLabel'>Location</label>
        <input className='hotelFormInputs' type="text" placeholder="example@test.com" />
        <label className='hotelFormLabel'>Description</label>
        <input className='hotelFormInputs' type="text" placeholder="example Group of Hotels" />
        <label className='hotelFormLabel'>Buisness Type</label>
        <input className='hotelFormInputs' type="text" placeholder="example Group of Hotels" />
        <button className='hotelFormButton' type="submit" onClick={() => setOpenAddBuisness(false)}>Submit</button>
      </div>
    </div>
    <DialogActions>
      <Button onClick={() => setOpenAddBuisness(false)}>Close</Button>
    </DialogActions>
  </Dialog>
  </>);
};

export default RegisterBuisnessForm;