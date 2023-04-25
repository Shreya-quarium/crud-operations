import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import './read.scss'; 

const Read = () => {
    const [data, setData] = useState([])

    async function getData () {
        axios.get("https://6447af7b50c25337442beb66.mockapi.io/users")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
    }
    function handleDelete(id) {
        axios.delete(`https://6447af7b50c25337442beb66.mockapi.io/users/${id}`
        )
            .then(() => {
                getData()
            })
    }
    const setToLocalStorage = (id, name, email, age, contactNumber) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("age", age);
        localStorage.setItem("contactNumber", contactNumber);
    };


    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className='read__header'>
                <Link to="/crud-operations">
                    <button className='read__header__button'>Add User</button>
                </Link>
            </div>
            <table className="read__table">
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Contact Number</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tr>
                                    <td>{eachData.id}</td>
                                    <td>{eachData.name}</td>
                                    <td>{eachData.email}</td>
                                    <td>{eachData.age}</td>
                                    <td>{eachData.contactNumber}</td>
                                    <td>
                                        <Link to="/update">
                                            <button
                                                className='read__header__button'
                                                onClick={() =>
                                                    setToLocalStorage(
                                                        eachData.id,
                                                        eachData.name,
                                                        eachData.email,
                                                        eachData.age,
                                                        eachData.contactNumber,
                                                    )
                                                }
                                            >Update</button>
                                        </Link>

                                    </td>
                                    <td>
                                        <button
                                            className='read__header__button'
                                            onClick={() => handleDelete(eachData.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Read