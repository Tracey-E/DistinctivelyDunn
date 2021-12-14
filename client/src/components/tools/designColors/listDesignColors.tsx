import React, { Fragment, useEffect, useState } from "react";
import { DesignColorType, useBagStore } from "../store/store";

const ListDesignColor = () => {
  const [allDesignColors, setAllDesignColors] = useState<DesignColorType[]>([]);
  const getDesignColor = async () => {
    try {
      const response = await fetch("http://localhost:5000/designColors");
      const jsonData = await response.json();

      setAllDesignColors(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDesignColor();
  }, []);

  const selectedDesignColor = useBagStore((s) => s.selectedDesignColor);
  const setSelectedDesignColor = useBagStore((s) => s.setSelectedDesignColor);

  return (
    <Fragment>
      <div className="designColors">
        <label>
          Please choose your design color:
          <select
            required
            className="designColor"
            id="designColor"
            value={selectedDesignColor?.color || ""}
            onChange={(e) => {
              const newDesignColor = allDesignColors.find(
                (c) => c.color === e.target.value
              );
              if (!newDesignColor) {
                console.log("HEY! no design color found");
                return;
              }
              setSelectedDesignColor(newDesignColor);
            }}
          >
            <option value="">--SELECT A DESIGN COLOR--</option>
            {allDesignColors.map((color) => (
              <option
                key={color.id}
                value={color.color}
                placeholder="designColor"
              >
                {color.color}
              </option>
            ))}
          </select>
        </label>
      </div>
    </Fragment>
  );
};

export default ListDesignColor;
