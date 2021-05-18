import SightingCard from "./SightingCard";
import SightingsUpdate from './SightingsUpdate'

const SightingsGrid = ({ sightings, removeSighting, targetSighting, updateSighting }) => {
    const sightingsList = sightings.map((sighting) => {
        return (
            <div id="card">
                <div id="card-info">
                    <SightingCard
                        sighting={sighting}
                        key={sighting._id}
                        removeSighting={removeSighting}
                        targetSighting={targetSighting}
                         />
                </div>
                <div id = "update-form">
                    <SightingsUpdate targetSighting={targetSighting} updateSighting={updateSighting}/>
                </div>
            </div>

    )});

    return (
        <>
            {sightingsList}
        </>
    );

}

export default SightingsGrid;