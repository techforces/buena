"use client";

import { useState } from "react";

import Button from "./Button";
import Modal from "./Modal";
import Input from "./Input";

interface AddUnitProps {
  isOpen?: boolean;
  handleClose?: () => void;
}

const AddUnit = ({ isOpen, handleClose }: AddUnitProps) => {
  const [propertyName, setPropertyName] = useState("");

  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
  const [floor, setFloor] = useState("");
  const [entrance, setEntrance] = useState("");
  const [size, setSize] = useState("");
  const [share, setShare] = useState("");
  const [constructionYear, setConstructionYear] = useState("");
  const [rooms, setRooms] = useState("");

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(propertyName);
    setPropertyName("");
    handleClose?.();
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title="Add new property">
      <form className="w-full flex flex-col gap-8 items-center">
        <div className="w-full flex flex-col gap-6">
          <Input
            name="unit-number"
            label="Number"
            placeholder="Enter property name"
            value={propertyName}
            setter={setPropertyName}
          />
          <div className="flex flex-col gap-3">
            <span className="text-xl font-medium">Type</span>
            <div className="flex gap-3 w-full">
              <button className="w-full px-7 py-6 border rounded-2xl border-pale-200 text-lg">
                Apartment
              </button>
              <button className="w-full px-7 py-6 border rounded-2xl border-pale-200 text-lg">
                Office
              </button>
            </div>
            <div className="flex gap-3 w-full">
              <button className="w-full px-7 py-6 border rounded-2xl border-pale-200 text-lg">
                Garden
              </button>
              <button className="w-full px-7 py-6 border rounded-2xl border-pale-200 text-lg">
                Parking
              </button>
            </div>
          </div>
          <Input
            name="floor"
            label="Floor"
            placeholder="Enter floor number"
            value={floor}
            setter={setFloor}
          />
          <Input
            name="entrance"
            label="Entrance"
            placeholder="How to enter?"
            value={entrance}
            setter={setEntrance}
          />

          <Input
            name="size"
            label="Size"
            placeholder="Enter number"
            value={size}
            setter={setSize}
          />

          <Input
            name="ownership-share"
            label="Co-ownership share"
            placeholder="Enter number"
            value={share}
            setter={setShare}
          />

          <Input
            name="construction-year"
            label="Construction year"
            placeholder="Enter year"
            value={constructionYear}
            setter={setConstructionYear}
          />

          <Input
            name="rooms"
            label="Rooms"
            placeholder="Enter number"
            value={rooms}
            setter={setRooms}
          />
        </div>

        <Button
          label="Add unit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
        />
      </form>
    </Modal>
  );
};
export default AddUnit;
