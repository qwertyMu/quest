const Styles = {
  
    //CreateData Component
    formWrapper: {
      width: "30%",
      margin: "30px auto",
    },
    button: {
      marginTop: 40
    },
  
    //ListCard Component
    card: {
      width: 250,
      backgroundImage: "linear-gradient(#ec483e, #f05c54)",
      float: "left",
      margin: "10px",
      cursor: "pointer",
      transition: "box-shadow .3s",
      position: "relative",
      "&:hover": {
        boxShadow: "0 0 25px rgba(33,33,33,.2)"
      }
    },
    delete: {
      position: "absolute",
      right: 0,
      top: 0
    },
    edit: {
      position: "absolute",
      left: "3px",
      top: 0
    },
    submit: {
      position: "absolute",
      bottom: "3px",
      right: "3px",
      top: 0
    },
    body: {
      color: "rgba(0,0,0,0.6)"
    },
    details: {
      width: "80%",
      margin: "0 auto",
    }
  };
  
  export default Styles;
  