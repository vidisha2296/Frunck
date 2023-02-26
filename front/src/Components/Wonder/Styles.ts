import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({

    root: {

        width: '100%',
        height: "200px",
        backgroundColor: "#f0f2f4",
        margin: "auto",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
        }
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
  
    steeper: {
        width: " 80%",
        margin: " auto",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: '95%',
        }
    }


});