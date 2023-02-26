import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    whyCart: {
        backgroundColor: "#ffe033", width: "260px ", height: "180px", padding: "10px"
    },
    why: {

        backgroundColor: "black",
        width: "100px",
        color: "white",
        borderRadius: "20px",
        margin: "auto",
        fontSize: "25px",
        padding: " 0px 1px 5px 2px"
    },

    DesignCon: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        margin: "auto",
        paddingTop: "30px",

        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            display: "grid",
            gridTemplateColumns: "repeat( 1, 1fr)",
        }
    },
    productIcon: {
        width: "50px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "white",
        margin: "auto"
    },
    productDetails: {
        textAlign: "center",
        fontSize: "13px"

    },
    proTitle: {
        fontSize: "17px"
    }


});