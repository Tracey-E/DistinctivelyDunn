import React, { Fragment, useEffect, useState } from "react";
import { BagColorType, useBagStore } from "../store/store";

const ListBagColors = () => {
  const [allBagColors, setBagColors] = useState<BagColorType[]>([]);
  const getBagColors = async () => {
    try {
      const response = await fetch("http://localhost:5000/bagColors");
      const jsonData = await response.json();

      setBagColors(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBagColors();
  }, []);

  const selectedBagColor = useBagStore((s) => s.selectedBagColor);
  const setSelectedBagColor = useBagStore((s) => s.setSelectedBagColor);

  // https://shortcut.school/vs-code

  return (
    <Fragment>
      <div className="color">
        <label>
          Please choose your bag color:
          <select
            required
            className="bagColor"
            id="bagColor"
            value={selectedBagColor?.name || ""}
            onChange={(e) => {
              const newSelectedBagColor = allBagColors.find(
                (b) => b.name === e.target.value
              );
              if (!newSelectedBagColor) {
                console.log("HEY! no bag color found");
                return;
              }
              setSelectedBagColor(newSelectedBagColor);
            }}
          >
            <option value={""}>--SELECT A BAG COLOR--</option>
            {allBagColors.map((bagColor) => (
              <option
                key={bagColor.id}
                value={bagColor.name}
                placeholder="bagColour"
              >
                {bagColor.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    </Fragment>
  );
};

export default ListBagColors;
