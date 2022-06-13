import React from "react";

import ModifyButton from "./ModifyButton";

const Header = () => {
  return (
    <div className="header">
      <h1>User List</h1>
      <ModifyButton action={"new"} />
    </div>
  );
};

export default Header;
