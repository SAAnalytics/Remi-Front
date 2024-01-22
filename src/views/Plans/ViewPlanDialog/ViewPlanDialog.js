import React, { useEffect } from 'react';
import './ViewPlanDialog.css';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
// import { Dialog, DialogTitle } from '@material-ui';

const ViewPlanDialog = (props) => {
  const {
    open,
    setOpenEditDialog,
  } = props;
  const handleDialogStyles = () => {
    let viewPortWidth = window.innerWidth;
    if (viewPortWidth < 600) {
      return {
        width: '100%',
        maxWidth: '100vw',
        height: '50vh',
      }
    }
    else if (viewPortWidth > 600 && viewPortWidth < 650) {
      return {
        width: '100%',
        maxWidth: '70vw',
        height: '50vh',
      }
    }
    else if (viewPortWidth > 650 && viewPortWidth < 800) {
      return {
        width: '100%',
        maxWidth: '65vw',
        height: '50vh',
      }
    }
    else if (viewPortWidth > 800 && viewPortWidth < 1200) {
      return {
        width: '100%',
        maxWidth: '65vw',
        height: '50vh',
      }
    }
  };
  // const [dialogStyles, setDialogStyles] = useState(handleDialogStyles())





  return (<>
    <Dialog className='editDialogMasterContainer'
      open={open}
      fullWidth
      onClose={() => setOpenEditDialog(false)}
    >
      <DialogTitle>
        Plan Details:
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => setOpenEditDialog(false)}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  </>);
};

export default ViewPlanDialog;
