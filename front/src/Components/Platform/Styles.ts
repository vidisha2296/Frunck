import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "auto",
        backgroundColor: "#ffe033",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "20px",
        display:"flex",
        flexDirection:"row",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            // height: "auto",
            width: "100%",
            display:"flex",
            flexDirection:"column",

        }
    },
    threeDiv: {
        fontSize: "40px",
        fontWeight: "600",
        textAlign: "center",
        marginTop: "105px",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
        }
    },

    boxDiv: {
        display: "flex",
        justifyContent: "center",
        width: "265px",
        height: "100px",
        backgroundColor: "white",
        color: "black",
        padding: "10px",
        margin: "15px",
    },
    DesignContainer: {
        display: "grid",
        gridTemplateColumns: "repeat( 3, 1fr)",
        margin: "auto",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            display: "grid",
        gridTemplateColumns: "repeat( 1, 1fr)",
        }
    },
    cart: {
        width: "380px",
        height: "300px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        margin: "10px"
    },

    smallBox: {
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        width: "100px",
        height: "115px",
        backgroundColor: "#a7a0a0",
        margin: "20px"

    },
    mainCart: {
        backgroundColor: "white", height: "100px", width: "100%",
        margin: "30px",
    },
    TextCart: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "10px 0px 0px 0px"
    },
    pText: {
        fontSize: "12px",
        color: "#a7a0a0",
        textAlign: "left"
    },
    HeadText: {
        color: "#a7a0a0",
        textAlign: "left",
        fontWeight: "600",
        margin: "0px"
    }


});