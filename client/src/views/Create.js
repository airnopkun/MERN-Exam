import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetForm from '../components/PetForm/PetForm';
import Header from "../components/Header/Header";

export default () => {
    const initialFormSettings = {
        name: "",
        type: "",
        description: "",
        skills: ["", "", ""]
    }
    const [pets, setPets] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPets(res.data.pets);
            });
    }, [])

    const createPet = pet => {
        axios.post('http://localhost:8000/api/pets/new', pet)
            .then(res=>{
                console.log(res)
                setPets([...pets, res.data])
            })
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
        <div>
            <Header source={"create"} />
            <h1>Add a Pet</h1>
            {errors.map((err, idx) => <p key={idx}>{err}</p>)}
            <PetForm onSubmitProp={createPet} initialSettingsProp={initialFormSettings}/>
        </div>
    )
}