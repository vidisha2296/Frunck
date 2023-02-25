import { makeStyles } from '@mui/styles';
import Display from './Display';


export const useStyles = makeStyles({
 
  menuPart:{
    // width:"400px",
    display:"flex",
   flexDirection:"row",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection:"column",
      marginTop:"30px",
     }
  },
  displayBox:{
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    maxWidth:"750px",
    height:"300px",
    // backgroundColor:"#a7a0a0",
    margin:"20px"
    
  },
  displayImg:{
    maxWidth:"500px",
    height:"300px",
  },
  bigBox:{
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    minWidth:"200px",
    maxWidth:"100%",
    height:"115px",
    backgroundColor:"#a7a0a0",
    margin:"20px",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      width:"100%",
      minWidth:"240px",
      marginLeft:"30px",
     },
    
  },
  smallBox:{
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width:"100px",
    height:"115px",
    backgroundColor:"#a7a0a0",
    margin:"20px",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      width:"100%",
      minWidth:"240px",
      marginLeft:"30px",
     },
    
  }


});