import React from "react";

const CountdownForm = ({ input, handleInputChange, error }) => {
  return (
    <form className="countdown_form">
      <label htmlFor="mins">Enter Minutes</label>
      <input
        type="text"
        id="mins"
        value={input}
        onChange={handleInputChange}
      />
      {error && <span className="error">{error}</span>}
    </form>
  );
};

export default CountdownForm;