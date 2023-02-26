import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
  root: {
    // maxWidth: "100%",
    // background: "#009BAD !important",
    // color: "#ffffff !important",
    height: "auto",
    display:"flex", flexDirection:"row",

    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display:"flex",
      flexDirection:"column",
      height:"auto",
      width: "100%" ,
      }
  },
  "Facebook": {
    backgroundColor: "yellow",
    color: "black",
    fontSize:"30px",
    width:"50px",
    paddingLeft:"10px",
  },

  "Youtube": {
    backgroundColor: "yellow",
    color: "black",
    fontSize:"30px",
    width:"50px",
    paddingLeft:"10px",
  },
  "Twitter": {
    backgroundColor: "yellow",
    color: "black",
    fontSize:"30px",
    width:"50px",
    paddingLeft:"10px",
  },
  "Whatsapp": {
    backgroundColor: "yellow",
    color: "black",
    fontSize:"30px",
    width:"50px",
    paddingLeft:"10px",
  },
  "Instagram": {
    backgroundColor: "yellow",
    color: "black",
    fontSize:"30px",
    width:"50px",
    paddingLeft:"10px",
  },

  "Google": {
    backgroundColor: "yellow",
    color: "black",
    fontSize:"30px",
    width:"50px",
    paddingLeft:"10px",
  },
  


});