import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, navigate } from "@reach/router";
import DeleteButton from "../components/DeleteButton/DeleteButton";
import Header from "../components/Header/Header";
import './styles/Detail.css'

export default (props) => {
    const [pet, setPet] = useState({})
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => {
                setPet(res.data)
                setLoaded(true);
            });
    }, []);
    return(
        <div>
            <Header source={"detail"} />
            <h2>Details about: {pet.name}</h2>
            <div id={"large-container"}>
                <div id={"medium-container"}>
                    <div className={"container"} id={"type-container"}>
                        <p className={"columns"}>Pet type: </p>
                        <p className={"columns"}>{pet.type}</p>
                    </div>
                    <div className={"container"} id={"description-container"}>
                        <p className={"columns"}>Description: </p>
                        <p className={"columns"}>{pet.description}</p>
                    </div>
                    <div className={"container"} id={"skills-container"}>
                        <p className={"columns"}>Skills: </p>
                        <div className={"columns"}>
                            {loaded && pet.skills.map((skill, idx) => {
                                return(
                                    <p key={idx}>{skill}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <Link to={`/pets/edit/${pet._id}`}>
                Edit
            </Link>
            <br/>
            <DeleteButton petName={pet.name} petId={pet._id} successCallback={() => navigate('/')} />
        </div>
    )
}
