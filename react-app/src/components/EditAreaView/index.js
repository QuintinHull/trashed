import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArea } from "../../store/area";
import Geocode from "react-geocode";
import { updateArea } from "../../store/area";
import { useParams } from "react-router-dom";

const EditAreaView = () => {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const singleArea = useSelector((state) => state.areas.area);

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
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [description, setDescription] = useState("");
  const apiKey = process.env.REACT_APP_GOOGLE_KEY;
  const [updatedArea, setUpdatedArea] = useState("");

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

  const handleSubmit = async (event, id) => {
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

    const areaWithChange = dispatch(updateArea(updatedArea));
    dispatch(getArea(id));
    setUpdatedArea(areaWithChange);
  };

  return (
    <div>
      <div> ---- edit area ---- </div>
      <form onSubmit={handleSubmit}>
        <label>address: </label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <label>city: </label>
        <input
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
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default EditAreaView;
