import PropTypes from "prop-types";
import AttributionsCard from "./attributionsCard";


const ListAttributions = props => {

    const {pk} = props;
    const {attributionsData} = props;

    if ( attributionsData && attributionsData.length ) {
        if ( attributionsData !== undefined ){
            return <div>
            {attributionsData.map(({ sk, nominal, organisation, attribution, file_name, datetime_added, exhibit }, index) => (
                <AttributionsCard 
                    key={index}
                    Sk={sk}
                    Nominal={nominal}
                    Organisation={organisation}
                    Attribution={attribution}
                    FileName={file_name}
                    FoundInsidePhone={file_name.match(/[0-9]+/g)}
                    DateTimeAdded={datetime_added}
                    Exhibit={exhibit}
                    Pk ={pk}
                />     
            ))}
        </div>
        }
    }else{
        return <div>
            No Attributions Data
        </div>
    }
}

ListAttributions.propTypes = {
    pk: PropTypes.string.isRequired,
    attributionsData: PropTypes.array,
  };
  
export default ListAttributions;

