"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSearch() {
  const router = useRouter();
  const [service, setService] = useState("Full Detail");
  const [vehicle, setVehicle] = useState("Sedan");
  const [date, setDate] = useState("");

  function handleSubmit() {
    const params = new URLSearchParams({
      service,
      vehicle,
    });

    if (date) {
      params.set("date", date);
    }

    router.push(`/contact?${params.toString()}`);
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
          <option>Engine Bay Detail</option>
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
