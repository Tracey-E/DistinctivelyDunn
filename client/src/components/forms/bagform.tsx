import React, { Fragment } from "react";

import { useBagStore,useBasketStore } from "../tools/store/store";
import "./form.css";

import ListBagColors from "../tools/bagColor/listBagColor";
import ListDesigns from "../tools/designs/listDesigns";
import ListDesignColor from "../tools/designColors/listDesignColors";

const makeRandomId = () => {
  // a random 16-digit number
  return Math.round(Math.random() * 10 ** 16);
};

const BagForm = () => {
  const addBag = useBagStore((state) => state.addBag);
  const selectedDesign = useBagStore((state) => state.selectedDesign);
  const selectedBagColor = useBagStore((state) => state.selectedBagColor);
  const selectedDesignColor = useBagStore((state) => state.selectedDesignColor);

  const  increaseCount = useBasketStore((state)=> state.increaseCount)

  const add = (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    // add it to the store
    if (!selectedDesign || !selectedBagColor || !selectedDesignColor) {
      return;
    }
    addBag({
      id: makeRandomId(),
      price:5.00,
      designName: selectedDesign.name,
      designId: selectedDesign.id,
      designColorName: selectedDesignColor.color,
      designColorId: selectedDesignColor.id,
      bagColorName: selectedBagColor.name,
      bagColorId: selectedBagColor.id,
    });
    
      increaseCount(useBasketStore, +1)
  };

  return (
    <Fragment>
      <div className="bagForm" id="bagForm">
        <form className="form" id="Form">
          <h2>Design your bag</h2>
          <ListBagColors />
          <ListDesignColor />
          <ListDesigns />

          <button type="submit" onClick={add}>
            Add to Basket
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default BagForm;
