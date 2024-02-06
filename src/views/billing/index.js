/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import {
  mapDispatchToProps,
} from './props';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import './Billing.css';
// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "views/billing/components/PaymentMethod";
import Invoices from "views/billing/components/Invoices";
import BillingInformation from "views/billing/components/BillingInformation";
import Transactions from "views/billing/components/Transactions";
import { useEffect } from "react";
import { connect } from "react-redux";

import stripeImg from '../../Images/stripe.svg';
import { Button } from "@mui/material";

const Billing = (props) =>  {
  const {
    handlebilling,
  } = props;
  // useEffect(() => {
  //   const handleBillingRedirection = async () => {

  //   };
  //   handleBillingRedirection();
  // }, []);

  const handleBillingClick = async () => {
    try {
      await handlebilling();
    }
    catch (err) {
      alert("Something went wrong!!")
    };
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <div className="billingPageContainer">
          <img src={stripeImg} alt="" />
          <div className="stripeText">
            <Button sx={{ color: "white !important" }} variant="contained" onClick={() => handleBillingClick()}>Billing Information</Button>
          </div>
        </div>
      <Footer />
    </DashboardLayout>
  );
}

export default connect(null, mapDispatchToProps)(Billing);
