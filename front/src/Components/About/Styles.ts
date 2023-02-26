import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles({

    menuPart: {
        // width:"400px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        margin: "30px auto",
        width: "100%",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            display: "flex",
            flexDirection: "column !important",
        },
    },
    mainDiv: {
        textAlign: "justify",
        maxWidth: "620px",
        margin: "10px 0px 10px 97px",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "86%",
            margin: "15px",
        },

    },
    headerText: {
        backgroundColor: "#ffe033",
        color: "black",
        width: "25%",
        fontWeight: "600",
        fontSize: "25px",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
            fontSize: "25px",
        },
    },
    subHeading: {
        fontSize: "23px",
        color: "black",
        width: "61%",
        margin: "0px 0px 15px 0px",
        fontWeight: "600",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
            fontSize: "15px",
        },

    },
    subHeading1: {
        fontSize: "12px",
        color: "#a7a0a0",
        margin: "0px 0px 15px 0px",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
            fontSize: "12px",
        },
    },
    subHeading2: {
        fontSize: "12px",
        color: "#6d6868",
        margin: "0px 0px 15px 0px",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
            fontSize: "12px",
        },
    },
    subHeading3: {
        fontSize: "12px",
        color: "#232121",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
            fontSize: "12px",
        },

    },
    smallBox: {
        width: "200px",
        height: "150px",
        backgroundColor: "#d9d9d9",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "250px",
          marginLeft:"30px",
        },
    },
    BoxContent: {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "10px",
        width: " 50%",
        marginTop: " 23%",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
        },
    }

});