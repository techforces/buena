"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import type { Property, Building, Unit } from "./Dashboard";
import type { ViewItemType } from "../page";

interface ViewProps {
  type: "property" | "building" | "unit" | null;
  id: string | null;
  setViewItem: (value: ViewItemType) => void;
}

const View = ({ type, id, setViewItem }: ViewProps) => {
  const [data, setData] = useState<Property | Building | Unit | null>(null);

  async function fetchDataById() {
    const typesPlural = {
      property: "properties",
      building: "buildings",
      unit: "units",
    };

    if (!!type && !!id) {
      const response = (await fetch(
        `http://localhost:4000/${typesPlural[type]}/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )) as Response;

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Cannot fetch item");
      }

      return responseData;
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const responseData: Property | Building | Unit = await fetchDataById();
        setData(responseData);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [type, id]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  const itemClasses = "w-full flex flex-col gap-3";
  const labelClasses = "text-xl font-medium text-grey";

  function renderDetails() {
    switch (type) {
      case "property":
        const property = data as Property | null;

        if (!property) return null;

        return (
          <div className="w-full flex flex-col gap-12">
            <div className={itemClasses}>
              <p className={labelClasses}>Type</p>
              <p className="text-lg">{property.type}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Name</p>
              <p className="text-lg">{property.name}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Manager</p>
              <p className="text-lg">{property.manager}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Accountant</p>
              <p className="text-lg">{property.accountant}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>
                Declaration of division (Teilungserklärung)
              </p>
              {/* <p className="text-lg">{property.}</p> */}
            </div>
          </div>
        );
      case "building":
        const building = data as Building | null;

        if (!building) return null;

        return (
          <div className="w-full flex flex-col gap-12">
            <div className={itemClasses}>
              <p className={labelClasses}>Street</p>
              <p className="text-lg">{building.street}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>House Number</p>
              <p className="text-lg">{building.houseNumber}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Other Details</p>
              <p className="text-lg">{building.otherDetails}</p>
            </div>
          </div>
        );
      case "unit":
        const unit = data as Unit | null;

        if (!unit) return null;

        return (
          <div className="w-full flex flex-col gap-8">
            <div className={itemClasses}>
              <p className={labelClasses}>Number</p>
              <p className="text-lg">{unit.number}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Type</p>
              <p className="text-lg capitalize">{unit.type}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Floor</p>
              <p className="text-lg">{unit.floor}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Entrance</p>
              <p className="text-lg">{unit.entrance}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Size</p>
              <p className="text-lg">{unit.size}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Co-ownership share</p>
              <p className="text-lg">{unit.share}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Construction Year</p>
              <p className="text-lg">{unit.constructionYear}</p>
            </div>

            <div className={itemClasses}>
              <p className={labelClasses}>Rooms</p>
              <p className="text-lg">{unit.rooms}</p>
            </div>
          </div>
        );
    }
  }

  return (
    <Modal
      isOpen={!!type}
      handleClose={() => setViewItem({ type: null, id: null })}
      title={`View details`}
    >
      {renderDetails()}
    </Modal>
  );
};

export default View;
