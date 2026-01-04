"use client";

import { useState } from "react";

import Dashboard from "./components/Dashboard";
import AddProperty from "./components/AddProperty";
import AddBuilding from "./components/AddBuilding";
import AddUnit from "./components/AddUnit";

export default function Home() {
  const [propertyModal, setPropertyModal] = useState(false);
  const [buildingModal, setBuildingModal] = useState(false);
  const [unitModal, setUnitModal] = useState(false);

  return (
    <div className="flex flex-col px-5 py-6 gap-6 h-screen text-night">
      <h1 className="text-[2rem]">Property Management Dashboard</h1>

      <Dashboard
        toggleProperty={setPropertyModal}
        toggleBuilding={setBuildingModal}
        toggleUnit={setUnitModal}
      />
      <AddProperty
        isOpen={propertyModal}
        handleClose={() => setPropertyModal(false)}
      />
      <AddBuilding
        isOpen={buildingModal}
        handleClose={() => setBuildingModal(false)}
      />
      <AddUnit isOpen={unitModal} handleClose={() => setUnitModal(false)} />
    </div>
  );
}
