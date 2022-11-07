import PropTypes from "prop-types";
import { useQuery } from '@apollo/client';
import { GET_ATTRIBUTIONS } from "../queries";


const GetAttributionsData = props => {

    const { pk } = props;

    let { loading, error, data } = useQuery(GET_ATTRIBUTIONS, {
      variables: { pk },
    });
    let attributionsData = ['No Data'];
    if ( loading ) return <h2>LOADING... </h2>;
    if ( error ) return `Error! ${error}`;
    if ( data ){
      attributionsData = data.listAttributions.items;
      return attributionsData
      // 17th October... As it stands I'm not getting any data back or even hitting this fucntion from what I can tell. 
    }
}

GetAttributionsData.propTypes = {
    pk: PropTypes.string.isRequired,
  };
  
export default GetAttributionsData;