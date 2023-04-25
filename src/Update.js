import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './update.scss'

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setAge(localStorage.getItem("age"));
        setContactNumber(localStorage.getItem("contactNumber"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id...", id);
        axios
            .put(`https://6447af7b50c25337442beb66.mockapi.io/users/${id}`, {
                name: name,
                age: age,
                email: email,
                contactNumber: contactNumber,
            })
            .then(() => {
                navigate("/read");
            });
    };

    return (
        <>
    <h2>UPDATE USER DETAILS</h2>
            <div className="update__input-container">
                <label className="update__label">NAME: </label>
                <input className="update__input" type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="update__input-container">
                <label className="update__label">EMAIL ADDRESS: </label>
                <input className="update__input" type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="update__input-container">
                <label className="update__label">AGE: </label>
                <input className="update__input" type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className="update__input-container">
                <label className="update__label">CONTACT NUMBER: </label>
                <input className="update__input" type="number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                />
            </div>
            <Link to="/read">
                <button
                    className="update__button"
                    onClick={handleUpdate}
                >Update</button>
            </Link>
            <Link to="/read">
                <button className="update__button">Back</button>
            </Link>

        </>
    )
}

export default Update;
