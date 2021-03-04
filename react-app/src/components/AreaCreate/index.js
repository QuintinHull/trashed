import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArea } from "../../store/area";
import Geocode from "react-geocode";
import { useHistory } from "react-router-dom";

const AreaCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const states = [
    "HI",
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(states[0]);
  const [zipcode, setZipcode] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <form>
        <label>address: </label>
        <input
          type="text"
          required
          placeholder="265 Kaelepulu Dr"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <label>city: </label>
        <input
          className="area-create-input"
          type="text"
          required
          placeholder="Kailua"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <label>state: </label>
        <select value={state} onChange={(e) => setState(e.target.value)}>
          {states.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
        <label>zipcode: </label>
        <input
          type="number"
          placeholder="96734"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        ></input>
        <label>description: </label>
        <textarea
          placeholder="Tell us about this trashed area!"
          maxLength="250"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">trashed</button>
      </form>
    </div>
  );
};

export default AreaCreate;
