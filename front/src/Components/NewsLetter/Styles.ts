
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "150px",
    margin: "auto",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      height: "auto",
      width: "100%",
      marginBottom:"20px"
    }
  },
  letterBorder: {
    border: "1px solid gray",
    borderRadius: "20px",
    height: "80px",
    width: "80%",
    margin: "auto", padding: "6px",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      height: "auto",
      width: "95%",
      margin:"7px"
    }
  },
  letterDiv: {
    width: '30%', margin: "10px 10px 10px 10px", height: "80px",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      width: "100%",
      height: "auto",
    }
  },
  innerBox: {
    display: "flex", justifyContent: "center", height: "80px",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display: "flex",
      flexDirection: "column",
      height: "auto",
    },
  },
  inputDiv:{
    width: '50%',
     margin: "auto" ,
     ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      width: "100%",
      // height: "auto",
    }
  },
  inputField:{
    width: "300px", height: " 35px ", color: "gray",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      width: "98%",
      // height: "auto",
    }
  }



});