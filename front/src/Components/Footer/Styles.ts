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
  


});