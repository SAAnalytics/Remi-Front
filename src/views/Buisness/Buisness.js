import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import React, { useState } from 'react';
import './Buisness.css';
import RegisterBuisnessForm from './RegisterBuisnessForm';
// import BuisnessCards from './BuisnessCards';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import { Card, Grid, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
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
// import DataTable from 'examples/Tables/DataTable';
// import { useMaterialUIController } from "context";
import AddIcon from '@mui/icons-material/Add';

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
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ViewHotelDialog from './ViewHotelDialog';
import EditBuisnessDialog from './EditBuisnessDialog';
const Buisness = (props) => {

  const[openAddBuisness, setOpenAddBuisness] = useState(false);
  const[openEditBuisness, setOpenEditBuisness] = useState(false);
  const[openViewBuisness, setOpenViewBuisness] = useState(false);

  return (<>
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} pt={3}>
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
            <IconButton onClick={() => setOpenAddBuisness(true)} className='addBuisnessButton'>
              <AddIcon/>
            </IconButton>
          </MDBox>
          <MDBox pt={3}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead className='hotelListTableHead'>
                <tr style={{ textAlign: 'left' }}>
                  <th className='tableHeaderTexts' style={{ padding: '8px' }}>Buisness Name</th>
                  <th className='tableHeaderTexts' style={{ padding: '8px' }}>Buisness Email</th>
                  <th className='tableHeaderTexts' style={{ padding: '8px' }}>Buisness Type</th>
                  <th className='tableHeaderTexts' style={{ padding: '8px' }}>Buisness location</th>
                  <th className='tableHeaderTexts' style={{ padding: '8px' }}>Actions</th>
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
                      <IconButton onClick={() => setOpenViewBuisness(true)}>
                        <RemoveRedEyeIcon/>
                      </IconButton>
                      <IconButton onClick={() => setOpenEditBuisness(true)}>
                        <ModeEditIcon/>
                      </IconButton>
                      <IconButton>
                        <DeleteIcon/>
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MDBox>
        </Card>
      </Grid>

      <RegisterBuisnessForm open={openAddBuisness} setOpenAddBuisness={setOpenAddBuisness} />
      <ViewHotelDialog open={openViewBuisness} setOpenViewBuisness={setOpenViewBuisness}/>
      <EditBuisnessDialog open={openEditBuisness} setOpenEditBuisness={setOpenEditBuisness}/>
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
export default Buisness;