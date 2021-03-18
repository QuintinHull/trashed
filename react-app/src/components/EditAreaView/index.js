import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getArea } from "../../store/area";
import Geocode from "react-geocode";
import { updateArea } from "../../store/area";
import { useParams } from "react-router-dom";

import "./EditAreaView.css"

const EditAreaView = ({ singleArea }) => {
  const { id } = useParams();
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

  const [address, setAddress] = useState(singleArea?.address);
  const [city, setCity] = useState(singleArea?.city);
  const [state, setState] = useState(singleArea?.state);
  const [zipcode, setZipcode] = useState(singleArea?.zipcode);
  const [description, setDescription] = useState(singleArea?.description);
  const [updatedArea, setUpdatedArea] = useState("");
  const apiKey = process.env.REACT_APP_GOOGLE_KEY;

  useEffect(() => {}, [updatedArea]);

  useEffect(() => {
    dispatch(getArea(id));
  }, [dispatch, id]);

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
    const areaId = await singleArea.id;
    const updatedArea = {
      id: areaId,
      address,
      city,
      state,
      zipcode,
      description,
      latitude: lat,
      longitude: lng,
    };
    console.log(updatedArea);
    const areaWithChange = dispatch(updateArea(updatedArea));
    dispatch(getArea(areaId));
    setUpdatedArea(areaWithChange);
  };

  if (!singleArea) {
    return null;
  }

  return (
    <div className="edit_area_container">
      <form onSubmit={handleSubmit}>
        <div className="area_edit_col1">
          <input
          className="area_edit_address"
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
          <input
          className="area_edit_city"
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <div className="area_edit_col2">
          <select className="area_edit_state" value={state} onChange={(e) => setState(e.target.value)}>
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
          <input
          className="area_edit_zip"
            type="number"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          ></input>
        </div>
        <div className="area_edit_col3">
          <textarea
          className="area_edit_descript"
            maxLength="250"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="area_edit_col4">
          <div className="edit_trashed_button_title">edit your area:</div>
          <button className="area_edit_button" type="submit">update</button>
        </div>
      </form>
    </div>
  );
};

export default EditAreaView;
