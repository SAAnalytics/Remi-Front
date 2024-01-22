import React, { useState } from 'react';
import './QrCodeSection.css';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import { AddIcCallOutlined, QrCode, QrCode2 } from '@mui/icons-material';
import { Card, Grid, IconButton } from '@mui/material';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';
import CreateQRDialog from './CreateQRDialog';

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


const QrCodeSection = (props) => {
  const {

  } = props;
  const [openQRDialog, setOpenQrDialog={setOpenQrDialog}] = useState(false);
  return (<>
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} mt={4}>
        <Card>
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
              Your Businesses
            </MDTypography>
            {/* <IconButton onClick={() => setOpenAddBuisness(true)} className='addBuisnessButton'>
              <AddIcCallOutlined/>
            </IconButton> */}
          </MDBox>
          <MDBox pt={3}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead className='hotelListTableHead'>
                <tr style={{ textAlign: 'left' }}>
                  <th className='tableHeaderTexts' style={{ padding: '8px' }}>Buisness Name</th>
                  <th className='tableHeaderTexts' style={{ padding: '8px' }}>Buisness Email</th>
                  <th className='tableHeaderTexts' style={{ padding: '8px' }}>Buisness Type</th>
                  <th className='tableHeaderTexts' style={{ padding: '8px' }}>Buisness location</th>
                  <th className='tableHeaderTexts' style={{ padding: '8px' }}>Create Qr</th>
                </tr>
              </thead>
              <tbody>
                {cardsData.map((buisness, index) => (
                  <tr key={index} className={index % 2 == 0 ? `evenRowHotel` : 'oddrowHotel'}>
                    <td className="hotlesTableCells" style={{ padding: '8px' }}>{buisness.buisnessName}</td>
                    <td className="hotlesTableCells" style={{ padding: '8px' }}>{buisness.email}</td>
                    <td className="hotlesTableCells" style={{ padding: '8px' }}>{buisness.buisnessType}</td>
                    <td className="hotlesTableCells" style={{ padding: '8px' }}>{buisness.location}</td>
                    <td className="hotlesTableCells" style={{ padding: '8px' }}>
                      <IconButton onClick={() => setOpenQrDialog(true)}>
                        {/* <RemoveRedEyeIcon/> */}
                        <QrCode2 />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MDBox>
        </Card>
      </Grid>
      <CreateQRDialog open={openQRDialog} setOpenQrDialog={setOpenQrDialog} />
    </DashboardLayout>
  </>)
};

export default QrCodeSection;