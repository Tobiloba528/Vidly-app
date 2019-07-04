import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-contro my-3"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
      style={{ width: "100%", borderRadius: "3px"}}
    />
  );
};

export default SearchBox;
