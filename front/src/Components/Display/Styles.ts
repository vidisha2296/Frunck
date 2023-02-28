import { makeStyles } from '@mui/styles';
import Display from './Display';


export const useStyles = makeStyles({

  menuPart: {
    // width:"400px",
    marginTop: "20px",
    marginBottom: "20px",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection: "column",
      marginTop: "30px",
    }
  },
  displayBox: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    maxWidth: "700px",
    height: "300px",
    // backgroundColor:"#a7a0a0",
    margin: "20px"

  },
  displayImg: {
    maxWidth: "500px",
    height: "300px",
  },
  bigBox: {
    // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width: "280px",
    // maxWidth: "100%",
    height: "115px",
    backgroundColor: "#d9d9d9",
    marginRight: "20px",
    borderRadius: "5px",
    "& p": {
      width: "100px",
      textAlign: "center",
      margin: " 30px 20px 25px 85px",
    },
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      // width: "100%",
      // minWidth: "300px",
      marginLeft: "30px",
      marginBottom: "30px",
    },

  },
  smallBox: {
    // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width: "170px",
    height: "115px",
    backgroundColor: "#d9d9d9",
    marginRight: "20px",
    borderRadius: "5px",
    "& p": {
      width: "100px",
      textAlign: "center",
      margin: "35px",
    },

    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      // width: "90%",
      minWidth: "280px",
      marginLeft: "30px",
      marginBottom: "30px",
      "& p": {
        width: "100px",
        margin: " 30px 20px 25px 85px",
        textAlign: "center",
      },

    },

  },
  boxContain: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    marginBottom: "20px",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display: "flex",
      flexDirection: "column",

    },
  }


});