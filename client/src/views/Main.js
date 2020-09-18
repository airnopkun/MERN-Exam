import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetList from "../components/PetList/PetList";
import Header from "../components/Header/Header";
import './styles/Main.css'

export default () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPets(res.data.pets);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = petID => {
        setPets(pets.filter(pet => pet._id !== petID))
    }

    return (
        <div id={"main"}>
            <Header source={"main"} />
            <div id={"petList"}>
                {loaded && <PetList pets={pets} removeFromDom={removeFromDom}/>}
            </div>
        </div>
    )
}