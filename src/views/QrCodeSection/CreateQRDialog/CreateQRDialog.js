import React from 'react';
import './CreateQRDialog.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import html2canvas from 'html2canvas';;
import qrCodeImage from '../../../Images/qrDummyImage.webp'
import jsPDF from 'jspdf';

const CreateQRDialog = (props) => {
  const {
    open,
    setOpenQrDialog,
  } = props;

const handlePdfDownload = () => {
  const capturePart = document.querySelector('.downloaderPart');
  html2canvas(capturePart).then((canvas) => {
    const imgData = canvas.toDataURL('img/png');
    const doc = new jsPDF('p', 'mm', 'a4');
    const widthC = doc.internal.pageSize.getWidth();
    const heightC = doc.internal.pageSize.getHeight();
    doc.addImage(imgData, 'PNG', 0, 0, widthC, heightC);
    doc.save('QRCODE.pdf');
  })
}

  return (<>
    <Dialog
      open={open}
      onClose={() => setOpenQrDialog(false)}
      PaperProps={{
        style: {
          width: '70rem', // Set your desired width
          height: '90vh', // Set your desired height
        },
      }}
    >
      <DialogTitle>
        Create QR
      </DialogTitle>
      <DialogContent>
        <DialogContentText className='downloaderPart' sx={{ border: '2px solid red'}}>
          <div style={{ padding: '20px', }}> Rishabh Bhdwa sala</div>
          <div style={{ padding: '20px', }}> Rishabh Bhdwa sala</div>
          <div style={{ padding: '20px', }}> Rishabh Bhdwa sala</div>
          <div style={{ padding: '20px', }}> Rishabh Bhdwa sala</div>
          <div style={{ padding: '20px', }}> Rishabh Bhdwa sala</div>
          <div style={{ padding: '20px', }}> SCAN ME</div>
          <div style={{ padding: '20px', }}> SCAN ME</div>
          <img src={qrCodeImage} alt="qrCodeImage" />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenQrDialog(false)}>
          CLOSE
        </Button>
        <Button onClick={() => handlePdfDownload()}>
          Download QR
        </Button>
      </DialogActions>
    </Dialog>
  </>);
};

export default CreateQRDialog;