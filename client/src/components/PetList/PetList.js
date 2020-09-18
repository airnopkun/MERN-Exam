import React from 'react';
import { Link } from '@reach/router';

export default (props) => {
    const { removeFromDom } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.pets.map((pet, idx)=>{
                        return (
                            <tr>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`} key={idx}>Details </Link>
                                    <Link to={`/pets/edit/${pet._id}`}>Edit</Link>
                                    <br/>
                                </td>

                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
    )
}