import React, { useEffect } from 'react';
import './CreateQRDialog.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import html2canvas from 'html2canvas';;
// import qrCodeImage from '../../../Images/qrDummyImage.webp'
import jsPDF from 'jspdf';
import headerPng from '../../../Images/Untitled.png';
import qrCodeImage from '../../../Images/qr_download.png';
import glassdorIcon from '../../../Images/glassdoor.png';
import mapsIcon from '../../../Images/maps.png';
import instagramIcon from '../../../Images/instagram.png';
import hotelImage from '../../../Images/hotel.png';
// import QRCodeVue3 from 'qrcode-vue3'
import QRCode from "react-qr-code";


const CreateQRDialog = (props) => {
  const {
    open,
    setOpenQrDialog,
    activeUserDetails,
    hotelDetailsRedux,
    getHotelData,
  } = props;

  useEffect(() => {
    const getHotelDataFromRedux = async () => {
      try {
        await getHotelData();
      }
      catch (err) {
        console.error(err);
      }
    };
    getHotelDataFromRedux();
  }, [])

  const { business_id, name } = hotelDetailsRedux;
  // console.log(business_id, hotelDetailsRedux)
  // const { username } = activeUserDetails;
  // console.log(hotelDetailsRedux)
  const handlePdfDownload = () => {
    const capturePart = document.querySelector('.downloaderPart');
    html2canvas(capturePart).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');

      // Get the width and height of the PDF page
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();

      // Calculate the aspect ratio of the canvas image
      const canvasAspectRatio = canvas.width / canvas.height;

      // Determine the dimensions of the image in the PDF
      let imgWidthInPdf, imgHeightInPdf;
      if (canvasAspectRatio > 1) {
        // Landscape orientation
        imgWidthInPdf = pdfWidth;
        imgHeightInPdf = pdfWidth / canvasAspectRatio;
      } else {
        // Portrait orientation
        imgHeightInPdf = pdfHeight;
        imgWidthInPdf = pdfHeight * canvasAspectRatio;
      }

      // Center the image on the PDF page
      const x = (pdfWidth - imgWidthInPdf) / 2;
      const y = (pdfHeight - imgHeightInPdf) / 2;

      // Add image to PDF
      doc.addImage(imgData, 'PNG', x, y, imgWidthInPdf, imgHeightInPdf);

      // Save the PDF
      doc.save('QRCODE.pdf');
    });
  }


  const handleJpgDownload = () => {
    const capturePart = document.querySelector('.downloaderPart');
    html2canvas(capturePart).then((canvas) => {
      // Convert the canvas to a data URL in JPG format
      const imgData = canvas.toDataURL('image/jpeg');

      // Create a link element, set the filename and download the image
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'QRCode.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
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
        Your QR
      </DialogTitle>
      <DialogContent>
        <DialogContentText className='downloaderPart' sx={{ border: '2px solid red' }}>
          <div className="headerScanme">
            <img src={headerPng} className='scaneMeImage' alt="" />
            <div className="subHeaderScanMe">
              Your reviews are precious to us!!D
            </div>
          </div>
          {/* <div style={{ background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)', padding: '10px', display: 'inline-block',  }}>

          </div> */}
          <div className="QrContainer">
            <button className="QRCodeImage" id='qrCodeGenImage'>
              {/* <img src={qrCodeImage} alt="" /> */}
              <QRCode
                size={200}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={`https://rime-wfzm.onrender.com/feedback?business_id=${business_id}`}
                level='M'
                fgColor="#ffbb00"
                bgColor="transparent"
              />
            </button>
          </div>
          <div className="instructionCOntainer">
            <div className="instructionText">
              <span>
                Scan the QR to provide your feedback
              </span>
              <span className="arrowPoineter">
              </span>
            </div>
          </div>
          <div className="usernameContainer">
            <div className="usernameText">
              @{name}
            </div>
          </div>
          <div className="bottomScanMeContainer">
            <div className="leftLogoContainer">
              <img src={hotelImage} className='hotelImageOnQr' alt="Rating" />
            </div>
            <div className="rightPartScanMecontainer">
              <div className="connection">
                <div className="connectionLogoContainer">
                  <img className='connectionIcon glassdorIcon' src={glassdorIcon} alt="" />
                </div>
                <div className="connectionUsernameContainer">
                  @glassdorIcon_203
                </div>
              </div>
              <div className="hrDividerContainer">
                <hr className='connectionDivider' />
              </div>
              <div className="connection">
                <div className="connectionLogoContainer">
                  <img className='connectionIcon' src={mapsIcon} alt="" />

                </div>
                <div className="connectionUsernameContainer">
                  @googleMaps
                </div>
              </div>
              <div className="hrDividerContainer">
                <hr className='connectionDivider' />
              </div>
              <div className="connection">
                <div className="connectionLogoContainer">
                  <img className='connectionIcon' src={instagramIcon} alt="" />

                </div>
                <div className="connectionUsernameContainer">
                  @instagram_101
                </div>
              </div>
            </div>
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { window.open(`https://51a3-103-129-235-102.ngrok-free.app/feedback?business_id=${business_id}`, "_blank")}}>
          Preview
        </Button>
        <Button onClick={() => handlePdfDownload()}>
          Download QR as PDF
        </Button>
        <Button onClick={() => { handleJpgDownload() }}>
          Download QR as Jpg
        </Button>
        <Button onClick={() => setOpenQrDialog(false)}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  </>);
};

export default CreateQRDialog;
