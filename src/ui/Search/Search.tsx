import React from "react";
import { useState } from "react";

import Input from "../../kit/Input";
import Icon from "../../kit/Icon";

const Search: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Input
        placeholder="Search book title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      >
        <Icon key={"search-icon"} name={"search-icon"} />
      </Input>
    </>
  );
};

export default Search;
