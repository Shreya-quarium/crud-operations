import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Create.scss";

function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const history = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "https://6447af7b50c25337442beb66.mockapi.io/users",
                {
                    name: name,
                    age: age,
                    email: email,
                    contactNumber: contactNumber,
                    header,
                }
            )
            .then(() => {
                history("/read");
            });
    };
    return (
        <div>
            <div className="create">
                <h2 className="create__title">CRUD OPERATIONS</h2>
                <Link to="/read">
                <button className="create__button">Show Data</button>
            </Link>
            </div>
            <div className="create__form-group">
                <label className="create__label">NAME: </label>
                <input
                    className="create__input"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="create__form-group">
                <label className="create__label">EMAIL ID: </label>
                <input
                    className="create__input"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="create__form-group">
                <label className="create__label">AGE: </label>
                <input
                    className="create__input"
                    type="number"
                    placeholder="age"
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className="create__form-group">
                <label className="create__label">CONTACT NUMBER: </label>
                <input
                    className="create__input"
                    type="number"
                    placeholder="Contact number"
                    onChange={(e) => setContactNumber(e.target.value)}
                />
            </div>
            <button className="create__button" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default Create;
