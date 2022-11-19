import PropTypes from "prop-types";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const InteractionsModalLogic = props => {  

    const {pk, parameters} = props;

    return(
        <>
            {parameters.interaction === "PHONECALL"
            ? <h2><PhoneIphoneIcon fontSize="tiny" sx={{position: "relative", bottom: "-2px"}} />{pk}</h2>
            : <>{pk}</>
            }
            {parameters.direction === "INBOUND"
            ? "Received an " 
            : "Made an " 
            }
            <b>{parameters.direction} {parameters.interaction}</b>
            {parameters.direction === "INBOUND"
            ? " from: " 
            : " to: " 
            }
            <h3 style={{border: "solid white 1px", borderRadius: "8px"}}>
                {parameters.interaction === "PHONECALL"
                ? <><PhoneIphoneIcon fontSize="tiny" sx={{position: "relative", bottom: "-2px"}} />{parameters.local_partner}</>
                : <>{parameters.partner}</>
                }
            </h3>
            <h4>@ {parameters.datetime}.</h4>
            {parameters.interaction === "PHONECALL"
            ? <h4>The interaction lasted {parameters.duration}.</h4>
            : <></>
            }
        </>
    )
}

InteractionsModalLogic.propTypes = {
    pk: PropTypes.string.isRequired,
    parameters: PropTypes.object.isRequired
  };
  
  export default InteractionsModalLogic;