"use client";

import Button from "./Button";
import Modal from "./Modal";
import Input from "./Input";
import { useState } from "react";
import InputPropertyType from "./InputPropertyType";
import FileUpload from "./FileUpload";

interface AddPropertyProps {
  isOpen?: boolean;
  handleClose?: () => void;
}

const AddProperty = ({ isOpen, handleClose }: AddPropertyProps) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [manager, setManager] = useState("");
  const [accountant, setAccountant] = useState("");
  const [fileBinary, setFileBinary] = useState();

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(name);
    setName("");
    handleClose?.();
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title="Add new property">
      <form className="w-full flex flex-col gap-8 items-center">
        <div className="w-full flex gap-8">
          <InputPropertyType
            imgSrc="/weg.png"
            title="WEG Property"
            description="Communities of owners who share responsibility for common areas. Legally complex, with voting and joint decisions."
            selected={type === "WEG"}
            onClick={() => setType("WEG")}
          />

          <InputPropertyType
            imgSrc="/mv.png"
            title="MV Property"
            description="Rental properties managed for landlords. Focused on tenant contracts, rent collection, and maintenance."
            selected={type === "MV"}
            onClick={() => setType("MV")}
          />
        </div>
        <div className="w-full flex flex-col gap-6">
          <Input
            name="property-name"
            label="Property name"
            placeholder="Enter property name"
            value={name}
            setter={setName}
          />
          <Input
            name="property-manager"
            label="Property manager"
            placeholder="Enter property manager"
            value={manager}
            setter={setManager}
          />
          <Input
            name="property-accountant"
            label="Property accountant"
            placeholder="Enter property accountant"
            value={accountant}
            setter={setAccountant}
          />
          <FileUpload label="Declaration of division (Teilungserklärung)" />
        </div>

        <Button
          label="Add property"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
        />
      </form>
    </Modal>
  );
};

export default AddProperty;
