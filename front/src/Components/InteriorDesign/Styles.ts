import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({

    menuPart: {
        // width:"400px",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "150px"
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
        margin: "10px",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "280px",

        }
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
    },
    explore: {
        display: "flex", justifyContent: "center",
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "auto",
        width: "35%",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "84%",
            fontSize: "10px",
            marginLeft: "27px",
            backgroundColor: "black",
            color: "white"

        }
    },
    productImg: {
        width: "370px",
        height: "230px",
        margin: "auto",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: "260px",
            margin: "auto",

        }
    },
    modalImg: {
        maxWidth: "450px",
    },
    mButton:{
        width:"auto",
        padding:"10px",
        borderRadius:"5px",
        backgroundColor:"white",
        color:"gray",
        fontWeight:"600"

    },
    btnContainer:{
        display: "flex", 
        justifyContent: "space-between",
    },
    secBtnContain:{
        display: "grid", 
        gridTemplateColumns:"repeat(4, 1fr)",
        gap:"20px",
        height:"auto",
        // width:"400px"
    },
    wave: {
        position: "relative",
        height: "70px",
        width: "600px",
        background: "#e0efe3" ,
        "&:before":{
            content: "",
            display: "block",
            position: "absolute",
            borderRadius: "100% 50%",
            width: "340px",
            height: "80px",
            backgroundColor:"white",
            right: "-5px",
            top: "40px"
        },
        "& :after":{
            content: "",
            display: "block",
            position: "absolute",
            borderRadius: "100% 50%",
            width: "300px",
            height: "70px",
            backgroundColor:"white",
            left: "0px",
            top: "27px"
        },

      }
    //   #wave:before {
    //     content: "";
    //     display: block;
    //     position: absolute;
    //     border-radius: 100% 50%;
    //     width: 340px;
    //     height: 80px;
    //     background-color: white;
    //     right: -5px;
    //     top: 40px
    //   }
    //   #wave:after {
    //     content: "";
    //     display: block;
    //     position: absolute;
    //     border-radius: 100% 50%;
    //     width: 300px;
    //     height: 70px;
    //     background-color: #e0efe3;
    //     left: 0;
    //     top: 27px;
    //   }


});