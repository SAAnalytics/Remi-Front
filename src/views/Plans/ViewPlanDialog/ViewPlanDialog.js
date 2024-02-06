import React, { useEffect } from 'react';
import './ViewPlanDialog.css';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
// import { Dialog, DialogTitle } from '@material-ui';
import { loadStripe } from '@stripe/stripe-js';

const ViewPlanDialog = (props) => {
  const {
    open,
    setOpenEditDialog,
    selectPlan,
    _id,
    productId,
    priceId,
    planName,
    metaId,
    sessionId,
  } = props;


  const handleSalectPlan = async () => {
    try {
      await selectPlan(priceId)
    }
    catch (err) {
      alert('Something went wrong!!')
    };
  };



  useEffect(() => {
    const handlePayment = async () => {
      try {
        const stripePromise = loadStripe('pk_test_51OZaW0SFypkk6r7Ei4RY1mGeV3DlzpUOYqCeOMICM8QNBv5L5t7D8qONAZYEuqOAS9Ju65sm7ZBjMOnDujsqYbuf00TGAb4kyf');
        const stripe = await stripePromise;
  
        // Call your backend to create the Checkout Session
        // Assuming you have a function to fetch the Session ID from your backend
        // const sessionId = await fetchCheckoutSessionId();
    
        // When the customer clicks on the button, redirect them to Checkout.
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });
    
        if (error) {
          console.log(error.message);
          // Optionally, handle the error
          // alert(error.message);
        }
      }
      catch(err) {
  
      }
    };
    handlePayment();
  }, [sessionId]);

  // const [dialogStyles, setDialogStyles] = useState(handleDialogStyles())





  return (<>
    <Dialog className='editDialogMasterContainer'
      open={open}
      fullWidth
      onClose={() => setOpenEditDialog(false)}
    >
      <DialogTitle>
        Thanks for selecting out {planName} plan!!
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => {handleSalectPlan(); setOpenEditDialog(false)}}>Select Plan</Button>
        <Button onClick={() => setOpenEditDialog(false)}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  </>);
};

export default ViewPlanDialog;
