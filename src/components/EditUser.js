import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  },[]);
  const editUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(
      `http://localhost:5000/users/${id}`
    );
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  }
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={editUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field is-flex is-justify-content-space-between">
            <div className="control">
              <button className="button is-success" type="submit">
                Update
              </button>
            </div>
            <div className="control">
                <Link to="/" className="button is-danger">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
