"use client";
import { useState } from "react";

export default function HeroSearch() {
  const [service, setService] = useState("Full Detail");
  const [vehicle, setVehicle] = useState("Sedan");
  const [date, setDate] = useState("");

  function handleSubmit() {
    console.log({ service, vehicle, date });
    alert("Thanks! We’ll contact you shortly to confirm your appointment.");
  }

  return (
    <div className="box-bottom-search background-card">
      <div className="item-search">
        <label className="text-sm-bold neutral-500">Service</label>
        <select
          className="form-control"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>Basic Wash</option>
          <option>Interior Detail</option>
          <option>Exterior Detail</option>
          <option>Full Detail</option>
          <option>Engine Cleaning</option>
        </select>
      </div>

      <div className="item-search item-search-2">
        <label className="text-sm-bold neutral-500">Vehicle Type</label>
        <select
          className="form-control"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        >
          <option>Sedan</option>
          <option>SUV</option>
          <option>Truck</option>
          <option>Van</option>
        </select>
      </div>

      <div className="item-search item-search-3">
        <label className="text-sm-bold neutral-500">Preferred Date</label>
        <input
          className="form-control"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="item-search bd-none d-flex justify-content-end">
        <button className="btn btn-brand-2 text-nowrap" onClick={handleSubmit}>
          Get a Quote
        </button>
      </div>
    </div>
  );
}
