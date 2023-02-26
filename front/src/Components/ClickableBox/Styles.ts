import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        background: "white !important",
        color: "gray !important",
        height: "150px",
        marginTop: "20px",
        marginBottom: "20px",

        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            // height:"auto",
            width: "100%",
        }
    },
    boxContainer: {
        display: "flex",
        justifyContent:"space-between",
        flexDirection: "row",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            display: "flex",
            flexDirection: "column",
        }
    },
    box: {
        // border: "1px solid gray",
        height: "100px",
        width: "100%",
        margin:"30px",
        borderRadius:"10px",
        backgroundColor: "#f0f2f4",
        textAlign:"center",
      
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            height: "auto",
            width: "100%",
        }
    }



});