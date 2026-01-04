"use client";

import { useState } from "react";

import Button from "./Button";
import Modal from "./Modal";
import Input from "./Input";

interface AddBuildingProps {
  isOpen?: boolean;
  handleClose?: () => void;
}

const AddBuilding = ({ isOpen, handleClose }: AddBuildingProps) => {
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [otherDetails, setOtherDetails] = useState("");

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(street);
    setStreet("");
    handleClose?.();
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title="Add new building">
      <form className="w-full flex flex-col gap-8 items-center">
        <div className="w-full flex flex-col gap-6">
          <Input
            name="street"
            label="Street"
            placeholder="Enter street"
            value={street}
            setter={setStreet}
          />
          <Input
            name="house-number"
            label="House number"
            placeholder="Enter house number"
            value={houseNumber}
            setter={setHouseNumber}
          />
          <Input
            name="other details"
            label="Other details"
            placeholder="Enter details"
            value={otherDetails}
            setter={setOtherDetails}
          />
        </div>

        <Button
          label="Add building"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
        />
      </form>
    </Modal>
  );
};

export default AddBuilding;
