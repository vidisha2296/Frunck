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
            width:"100%",
        }
    },
    box: {
        // border: "1px solid gray",
        height: "100px",
        minWidth: "550px",
        margin:"30px",
        borderRadius:"6px",
        backgroundColor: "#f0f2f4",
        textAlign:"center",
        "& p": {
            width:"150px",
            textAlign: "center",
            margin:"35px auto",
          },
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            height: "100px",
            width: "250px",
            // padding:"40px",
            "& p": {
                width:"150px",
                textAlign: "center",
                margin:"15px auto",
              },
        }
    }



});