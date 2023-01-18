import React, { ChangeEventHandler } from "react";

interface ISearchBoxProps {
  searchChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox: React.FC<ISearchBoxProps> = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
