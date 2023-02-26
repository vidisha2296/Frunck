

  import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    paper: {
        marginTop: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: "30px",
        marginBottom:"50px",
        height:"auto",

      },
      submit: {
        margin: "30px !important",
        backgroundColor:"black !important",
        color:"yellow !important",
        width:"80px"
      },
    
});