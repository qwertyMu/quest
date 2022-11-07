import PropTypes from "prop-types";
import InteractionsCard from "./interactionsCard";


const ListInteractions = props => {

    const {pk} = props;
    const {interactionsData} = props;

    if ( interactionsData && interactionsData.length ) {
        return <div>
            {interactionsData.map(({ direction, interaction, partner, duration, datetime, exhibit, organisation, file_name, datetime_added }, index) => (
                <InteractionsCard 
                    key={index}
                    Interaction={interaction}
                    Direction={direction}
                    Partner={partner}
                    Duration={duration}
                    DateTime={datetime}
                    Exhibit={exhibit}
                    Organisation={organisation}
                    FileName={file_name}
                    DateTimeAdded={datetime_added}
                    Pk={pk}
                />
            ))}
        </div>
    }else{
        return <div>
            No Interactions Data
        </div>
    }
}

ListInteractions.propTypes = {
    pk: PropTypes.string.isRequired,
    interactionsData: PropTypes.array,
  };
  
export default ListInteractions;