import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createArea } from "../../store/area";
import Geocode from "react-geocode";
import { getAreas } from "../../store/area";

import "./AreaCreate.css";

const AreaCreate = () => {
  const dispatch = useDispatch();

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

  const apiKey = process.env.REACT_APP_GOOGLE_KEY;
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(states[0]);
  const [zipcode, setZipcode] = useState("");
  const [description, setDescription] = useState("");
  const [newArea, setNewArea] = useState("");

  useEffect(() => {}, [newArea]);

  Geocode.setApiKey(apiKey);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");

  const getLat = (address, city, state, zipcode) => {
    return Geocode.fromAddress(`${address} ${city}, ${state} ${zipcode}`).then(
      (response) => {
        const { lat } = response.results[0].geometry.location;
        return lat;
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const getLng = (address, city, state, zipcode) => {
    return Geocode.fromAddress(`${address} ${city}, ${state} ${zipcode}`).then(
      (response) => {
        const { lng } = response.results[0].geometry.location;
        return lng;
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const lat = await getLat(address, city, state, zipcode);
    const lng = await getLng(address, city, state, zipcode);
    const newArea = {
      address,
      city,
      state,
      zipcode,
      description,
      latitude: lat,
      longitude: lng,
    };

    const addedArea = dispatch(createArea(newArea));
    dispatch(getAreas());
    setNewArea(addedArea);
  };

  return (
    <div className="area_create_container">
      <form onSubmit={handleSubmit}>
        <div className="area_create_col1">
          <input
            className="area_create_address"
            type="text"
            required
            placeholder="265 Kaelepulu Dr"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>

          {/* <label>city: </label> */}
          <input
            className="area_create_city"
            type="text"
            required
            placeholder="Kailua"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <div className="area_create_col2">
          {/* <label>state: </label> */}
          <select
            className="area_create_state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>

          {/* <label>zipcode: </label> */}
          <input
            required
            className="area_create_zip"
            type="number"
            placeholder="96734"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          ></input>
        </div>
        <div className="area_create_col3">
          {/* <label>description: </label> */}
          <textarea
            required
            className="area_create_descript"
            placeholder="Share a brief description about this trashed area!"
            maxLength="250"
            // rows="4"
            // cols="40"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="area_create_col4">
          <div className="trashed_button_title">report this area as trashed:</div>
          <button className="area_create_button" type="submit">TRASHED</button>
        </div>
      </form>
    </div>
  );
};

export default AreaCreate;
