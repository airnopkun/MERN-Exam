import React, { useState } from 'react';
import './PetForm.css'

export default (props) => {
    const { initialSettingsProp, onSubmitProp } = props;
    const [name, setName] = useState(initialSettingsProp.name);
    const [type, setType] = useState(initialSettingsProp.type);
    const [description, setDescription] = useState(initialSettingsProp.description);
    const [skills, setSkills] = useState(initialSettingsProp.skills);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, type, description, skills});
    }

    const onSkillsInputChange = (e, idx) => {
        let tempSkills = [...skills];
        tempSkills[idx] = e.target.value;
        setSkills(tempSkills);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div id={"inputs"}>
                <div className={"column"}>
                    <p id={"name-label-input"}>
                        <label>Name</label><br/>
                        <input type="text" onChange = {(e) => setName(e.target.value)} value={name}/>
                    </p>
                    <p>
                        <label>Type</label><br/>
                        <input type="text" step=".01" onChange = {(e) => setType(e.target.value)} value={type}/>
                    </p>
                    <p>
                        <label>Description</label><br/>
                        <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
                    </p>
                </div>
                <div className={"column"} id={"skills-container"}>
                    <p>Skills (optional)</p>
                    <p>
                        <label>Skill 1:</label><br/>
                        <input type="text" onChange={(e) => onSkillsInputChange(e, 0)} value={skills[0]}/>
                    </p>
                    <p>
                        <label>Skill 2:</label><br/>
                        <input type="text" onChange={(e) => onSkillsInputChange(e, 1)} value={skills[1]}/>
                    </p>
                    <p>
                        <label>Skill 3:</label><br/>
                        <input type="text" onChange={(e) => onSkillsInputChange(e, 2)} value={skills[2]}/>
                    </p>
                </div>
            </div>
            <input type="submit" />
        </form>
    )
}
