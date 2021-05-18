import { deleteSighting } from "./SightingService";
import { targetSighting } from "./SightingService";

const SightingCard = ({sighting, removeSighting, targetSighting, updateSighting, handleUpdate}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }

    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
        </>
    )
}

export default SightingCard;