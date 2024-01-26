import React from 'react';
import './RegisterHotelForm.css';
import brandLogo from '../../../Images/surveySphere.png';
import { Autocomplete, Box, Button, Dialog, DialogActions, DialogTitle, TextField } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

const RegisterHotelForm = (props) => {
  const {
    setOpenAddBuisness,
    open,
  } = props;
  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad'] // Add more locations

  return (<>
    <Dialog className='addBuisnessDialog' open={open} onClose={() => setOpenAddBuisness(false)}>
      <DialogTitle>
        Enter Hotel Details
      </DialogTitle>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          margin: 'auto',
          maxWidth: '500px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '15px',
          boxShadow: '0 8px 24px 0 rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease-in-out',
          '& .MuiTextField-root': {
            m: 1,
            width: { xs: '100%', sm: '400px' }
          },
          '& .MuiButton-root': {
            margin: '10px',
          },
          '&:hover': {
            boxShadow: '0 10px 28px 0 rgba(0,0,0,0.3)',
            transform: 'translateY(-3px)'
          },

        }}
        className='formContainerHotel'
        noValidate
        autoComplete="off"
      >
        <TextField className='formTextField' label="Hotel Name" variant="outlined" required />
        <Autocomplete
          freeSolo
          // sx={{ width: '90%',}}
          className='formTextField'
          options={locations.map((option) => option)}
          renderInput={(params) => <TextField {...params} label="Location" />}
        />
        <TextField className='formTextField' label="Description" multiline rows={4} variant="outlined" required />
        <TextField className='formTextField' label="AI Description" multiline rows={4} variant="outlined" required />
        <TextField className='formTextField' label="Number of Rooms" type="number" variant="outlined" required />
        <TextField className='formTextField' label="Slogan" variant="outlined" required />
        <Button
          variant="contained"
          component="label"
          startIcon={<ImageIcon sx={{ color: 'white !important' }} />}
          sx={{ color: 'white !important' }}
        >
          Upload Logo
          <input type="file" hidden />
        </Button>
        <Button variant="contained" sx={{ color: 'white !important' }} color="primary" type="submit">
          Submit
        </Button>
      </Box>
      <DialogActions>
        <Button onClick={() => setOpenAddBuisness(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  </>);
};

export default RegisterHotelForm;