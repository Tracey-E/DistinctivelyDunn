import React, { Fragment, useState } from "react";

const InputBagColor = () => {
  const [name, setName] = useState("");

  const onSubmitForm = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    try {
      const body = { name };
      const response = await fetch("http://localhost:5000/bagColor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err: any) {
      console.error(err?.message);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    return setName(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          className="bagcolourinput"
          value={name}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </Fragment>
  );
};

export default InputBagColor;
