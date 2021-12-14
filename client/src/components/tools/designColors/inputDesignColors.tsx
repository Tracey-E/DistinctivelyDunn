import React, { Fragment, useState } from "react";

const InputDesignColors = () => {
  const [color, setColor] = useState("");

  const onSubmitForm =  async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    try {
      const body = {color };
      const response = await fetch("http://localhost:5000/designColors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
     
     
    } catch (err: any) {
      console.error(err?.message);
    }

   
   
  };
  const handleChange = (e) => {
 return    setColor(e.target.value),
     e.preventDefault()
    
     
  }
  

  return (
    <Fragment>
      <form  onSubmit={onSubmitForm}>
        <input
          type="text"
          className="designcolourinput"
          value={color}
          onChange={handleChange}
        />
        <button >Add</button>
      </form>
    </Fragment>
  );
};

export default InputDesignColors;
