import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetForm from "../components/PetForm/PetForm";
import Header from "../components/Header/Header";
import {navigate} from "@reach/router";

export default props => {
    const { id } = props;
    const [pet, setPet] = useState();
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePet = pet => {
        axios.put(`http://localhost:8000/api/pets/${id}`, pet)
            .then(res => navigate('/'))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(err)
            })
        
    }
    return (
        <>
            <Header source={"update"} />
            <div>
                {loaded && <h1>Edit {pet.name}</h1>}
                {errors.map((err, idx) => <p key={idx}>{err}</p>)}
                {loaded && (<PetForm onSubmitProp={updatePet} initialSettingsProp={pet}/>)}
            </div>
        </>
    )
}