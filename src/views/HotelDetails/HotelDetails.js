import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import React, { useState } from 'react';
import './HotelDetails.css';
import RegisterHotelForm from './RegisterHotelForm';
// import BuisnessCards from './BuisnessCards';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import { Box, Card, Divider, Grid, IconButton, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

import dummyLogo from '../../Images/maps.png'

const cardsData = [
  {
    buisnessName: "ABC Corporation",
    email: "abc@example.com",
    location: "New York, NY",
    description: "We provide cutting-edge technology solutions.",
    buisnessType: "Technology"
  },
  {
    buisnessName: "XYZ Services",
    email: "xyz@example.com",
    location: "Los Angeles, CA",
    description: "Your one-stop shop for all your service needs.",
    buisnessType: "Services"
  },
  {
    buisnessName: "QuickMart Grocery",
    email: "quickmart@example.com",
    location: "Chicago, IL",
    description: "A neighborhood grocery store with a wide range of products.",
    buisnessType: "Retail"
  },
  {
    buisnessName: "Green Energy Solutions",
    email: "greenenergy@example.com",
    location: "San Francisco, CA",
    description: "We specialize in renewable energy solutions.",
    buisnessType: "Energy"
  }
];
import { useTheme, useMediaQuery } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import RemoveRedEyeIcon from '';
// import ViewHotelDialog from './ViewHotelDialog';
import EditBuisnessDialog from './EditBuisnessDialog';
import addIcon from '../../Images/addHotelDetails.svg'


const HotelDetails = (props) => {

  const [openAddBuisness, setOpenAddBuisness] = useState(false);
  const [openEditBuisness, setOpenEditBuisness] = useState(false);
  const [openViewBuisness, setOpenViewBuisness] = useState(false);
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [change, setChange] = useState(true);
  return (<>
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} pt={3}>
        <Card
          className={!change ? 'hotelDetailsBackground' : 'addHotelDetailsClass'}
          sx={{
            height: '79vh',
            maxHeight: 'fit-content',
            // backgroundImage: 'url(../../Images/formBack.svg) !important',
          }}>
          <MDBox
            mx={2}
            mt={-3}
            py={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            className='hotelListLabelHeader'
          >
            <MDTypography variant="h6" color="white">
              Your Hotel Details
            </MDTypography>
          </MDBox>

          {change ? <div className="enterHotelDetailsMainContainer">
            <div className="plusIconContainer" onClick={() => {setChange(false);setOpenAddBuisness(true)}}>
              <img src={addIcon} alt="" />
            </div>
          </div> :
            <div className="hoteldetailsMasterContainer">
              <div className="hotelNameContainer" onClick={() => setChange(true)}>
                <div className="logoHotelContainer">
                  <img src={dummyLogo} alt="" />
                </div>
                <div className="hotelNameText">
                  Paras Palace
                </div>
              </div>
              <div>
                <hr />
              </div>
              <div className="furtherDetails">
                <div className="locationContainer">
                  <div className="locationLabel">
                    Location:
                  </div>
                  <div className="locationText">
                    Vrindavan Cottages, Mathura, India
                  </div>
                </div>
                <div className='dividerContainer'>
                  <hr className='dividerHr' />
                </div>
                <div className="locationContainer">
                  <div className="locationLabel">
                    No. of Rooms:
                  </div>
                  <div className="locationText">
                    86 Rooms
                  </div>
                </div>
                <div className='dividerContainer'>
                  <hr className='dividerHr' />
                </div>
                <div className="descriptionContainer">
                  <div className="descriptionLabel">
                    Description:
                  </div>
                  <div className="descriptionText">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At veniam eaque nostrum repellendus eligendi temporibus accusamus? Dolor fuga eius dicta odit aliquid rerum?
                  </div>
                </div>
                <div className='dividerContainer'>
                  <hr className='dividerHr' />
                </div>
                <div className="locationContainer">
                  <div className="locationLabel">
                    Slogan:
                  </div>
                  <div className="locationText">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                <div className='dividerContainer'>
                  <hr className='dividerHr' />
                </div>

                <div className="descriptionContainer">
                  <div className="descriptionLabel">
                    AI Description:
                  </div>
                  <div className="descriptionText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis consectetur qui hic delectus aperiam fugit voluptate non in. Natus neque nostrum magnam..
                  </div>
                </div>
                <div className="descriptionContainer">
                  <div className="descriptionLabel">
                    Your Logo:
                  </div>
                  <div className="descriptionText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis consectetur qui hic delectus aperiam fugit voluptate non in. Natus neque nostrum magnam..
                  </div>
                </div>
              </div>
            </div>}
        </Card>
      </Grid>

      <RegisterHotelForm open={openAddBuisness} setOpenAddBuisness={setOpenAddBuisness} />

      <EditBuisnessDialog open={openEditBuisness} setOpenEditBuisness={setOpenEditBuisness} />
    </DashboardLayout>
  </>)
};
// Buisness.defaultProps = {
//   width: "auto",
//   sorted: "none",
//   align: "left",
// };
// Buisness.propTypes = {
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   children: PropTypes.node.isRequired,
//   sorted: PropTypes.oneOf([false, "none", "asce", "desc"]),
//   align: PropTypes.oneOf(["left", "right", "center"]),
// };
export default HotelDetails;