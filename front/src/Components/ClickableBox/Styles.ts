import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        // background: "#009BAD !important",
        color: "#ffffff !important",
        height: "150px",
        marginTop: "20px",
        marginBottom: "20px",

        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            height:"auto",
            width: "100%" ,
            }
    },
    box: {
        border: "1px solid gray",
        height: "100px",
        width: "100%",
        backgroundColor: "gray",
        margin: "20px",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            height:"auto",
            width: "100%" ,
            }
    }



});