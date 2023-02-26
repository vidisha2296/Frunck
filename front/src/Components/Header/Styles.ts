import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles({

  upDiv: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "30px",
    height: "32px",
    color: "#a7a0a0",
  },
  signPart: {
    width: "250px",
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      fontSize: "12px",
    },
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display: "flex",
      flexDirection: "row !important",
      position: "absolute",
      marginTop: "19px",
      width: "170px",
      "& p": {
        fontSize: "12px",
      },

    }
  },
  headLast: {
    display: "flex", justifyContent: "flex-end",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      float: "left",
      marginTop: "10px"
    }

  },
  header: {
    height: "80px",
    width: "100%",
    backgroundColor: "white",
    color: "#a7a0a0",
    marginTop: "20px",
    // paddingLeft:"30px",
    // paddingRight:"30px",
    // border:"1px solid #a7a0a0",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    position: "sticky",
    // "@media (max-width: 768px)": {
    //   paddingLeft: 0,
    // },
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      backgroundColor: "white",
      width: "100%",
      height: "auto",
      color: "gray",
      minWidth: "320px",
      //  position:"absolute"
    }
  },
  innerHead: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuPart: {
    // width:"400px",
    display: "flex",
    justifyContent: "space-between",
    gap: "35px",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection: "column",
      backgroundColor: "white",
      color: "gray",
      height: "auto",
      //  position:"absolute"
      "& p": {
        marginBottom: "0px",
        gap: "0px",
        fontSize: "10px"
      }
    },
    "& p": {
      margin: "0px"
    },
  },
  // headerNew: {
  //   backgroundColor: "#400CCC",
  //   paddingRight: "79px",
  //   paddingLeft: "118px",
  //   "@media (max-width: 900px)": {
  //     paddingLeft: 0,
  //   },
  // },
  // logo: {
  //   fontFamily: "Work Sans, sans-serif",
  //   fontWeight: 600,
  //   color: "#FFFEFE",
  //   textAlign: "left",
  // },
  // menuButton: {
  //   fontFamily: "Open Sans, sans-serif",
  //   fontWeight: 700,
  //   size: "18px",
  //   marginLeft: "38px",
  // },
  // toolbar: {
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  // drawerContainer: {
  //   padding: "20px 30px",
  // },
  // toolbarMargin: {
  //   ...theme.mixins.toolbar,
  //   marginBottom: '3em',
  //   [theme.breakpoints.down('md')]: {
  //     marginBottom: '2em',
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     marginBottom: '1.25em',
  //   },
  // },
  // logo: {
  //   height: '8em',
  //   [theme.breakpoints.down('md')]: {
  //     height: '7em',
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     height: '5.5em',
  //   },
  // },
  // logoContainer: {
  //   padding: 0,
  //   '&:hover': {
  //     backgroundColor: 'transparent',
  //   },
  // },
  // tabs: {
  //   marginLeft: 'auto',
  //   '& .MuiButtonBase-root.MuiTab-root': {
  //     fontSize: 20,
  //   },
  //   '& .Mui-selected': {
  //     backgroundColor: '#fce0a2',
  //     color: '#000',
  //     opacity: 0.7,
  //     borderRadius: 2,
  //   },
  // },
  // tab: {
  //   // ...theme.typography.tab,
  //   minWidth: 10,
  //   marginLeft: '25px',
  //   color: 'white',
  // },
  // hamburgerMenuIcon: {
  //   height: '50px',
  //   width: '50px',
  // },
  // menuIconContainer: {
  //   marginLeft: 'auto',
  //   color: 'white',
  //   '&:hover': {
  //     opacity: 1,
  //   },
  // },
  // appbar: {
  //   zIndex: theme.zIndex.modal + 1,
  // },

  // Links: {
  //   padding: "0 20px",
  //   color: "#606C74",
  //      backgroundColor:"rgb(248, 248, 248)",
  //     "& :hover":{
  // backgroundColor:"#eceff1"
  //     }

  // },
  // list:{
  //   justifyContent:'left',
  //   width:'100%',
  //   paddingLeft:'10px'
  // },
  // header: {
  //   backgroundColor: "#400CCC",
  //   paddingRight: "79px",
  //   paddingLeft: "118px",
  //   "@media (max-width: 900px)": {
  //     paddingLeft: 0,
  //   },
  // },
  // logo: {
  //   fontFamily: "Work Sans, sans-serif",
  //   fontWeight: 600,
  //   color: "#FFFEFE",
  //   textAlign: "left",
  // },
  // menuButton: {
  //   fontFamily: "Open Sans, sans-serif",
  //   fontWeight: 700,
  //   size: "18px",
  //   marginLeft: "38px",
  // },
  // toolbar: {
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  // drawerContainer: {
  //   padding: "20px 30px",
  // },


});
