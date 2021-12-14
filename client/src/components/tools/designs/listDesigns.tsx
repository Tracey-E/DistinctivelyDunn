import React, { Fragment, useEffect, useState } from "react";

import { imagesData } from "../../images/designImages/designView";
import logo from "../../../assets/logo/logo1.jpg";
import { DesignType, useBagStore } from "../store/store";

const ListDesigns = () => {
  const [designs, setDesigns] = useState<DesignType[]>([]);
  const getDesigns = async () => {
    try {
      const response = await fetch("http://localhost:5000/designs");
      const jsonData = await response.json();

      setDesigns(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const selectedDesign = useBagStore((s) => s.selectedDesign);
  const setSelectedDesign = useBagStore((s) => s.setSelectedDesign);

  useEffect(() => {
    getDesigns();
  }, []);
  const selectedDesignData =
    selectedDesign && imagesData.find((d) => d.name === selectedDesign.name);
  const backgroundImgUrl = !selectedDesign ? logo : selectedDesignData?.url;
  const backgroundImg = `url("${backgroundImgUrl}")`;
  return (
    <Fragment>
      <div className="design" id="design">
        <label>
          Please choose your design:
          <select
            className="designSelects"
            id="designSelects"
            required
            value={selectedDesign?.name}
            onChange={(e) => {
              const newSelectedDesign = designs.find(
                (d) => d.name === e.target.value
              );
              setSelectedDesign(newSelectedDesign || null);
            }}
          >
            <option value={""}>--PLEASE CHOOSE YOUR DESIGN--</option>
            {designs.map((design) => (
              <option
                defaultValue={design.name}
                value={design.name}
                key={design.id}
              >
                {design.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <div id="description">
          You are able to decide your own bag color, and design color.
          <br /> pictures are for illustration purposes only{" "}
        </div>
      </div>
      <img
        className="designViewer"
        id="designViewer"
        alt=""
        src=""
        style={{ backgroundImage: backgroundImg }}
      />
    </Fragment>
  );
};

export default ListDesigns;
