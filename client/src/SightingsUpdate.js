import React from 'react';
import {useState} from 'react'
import { targetSighting } from "./SightingService";

const SightingsUpdate = ({updateSighting, targetSighting}) => {

    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        targetSighting(formData).then((data)=>{
            updateSighting(data);
        })
    }

    // const handleUpdate = () => {
    //     targetSighting(sighting._id).then(()=>{
    //         updateSighting(sighting._id);
    //     })
    // }
    
    return (
        <div>
            <form onSubmit={onSubmit} id="sightings-form" >
                <div className="formWrap">
                    <label htmlFor="species">Species:</label>
                    <input onChange={onChange} type="text" id="species" />
                </div>
                <div className="formWrap">
                    <label htmlFor="location">Location:</label>
                    <input onChange={onChange} type="text" id="location" />
                </div>
                <div className="formWrap">
                    <label htmlFor="date">Date:</label>
                    <input onChange={onChange} type="date" id="date" />
                </div>
                <input type="submit" value="Update Sighting" id="save" />
            </form>
        </div>
    )
}

export default SightingsUpdate