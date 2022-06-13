import React from "react";
import {
  useChangeButtonMutation,
  useChangeCurrentUserMutation,
  useGetButtonQuery,
} from "../redux/slices/apiSlice";

import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const ModifyButton = ({ action, position }) => {

  const [changeButton] = useChangeButtonMutation();
  const { data } = useGetButtonQuery();
  const [changeCurrentUser] = useChangeCurrentUserMutation();


  const handleButtonClick = () => {
    changeButton({ show: !data.show, type: action });
    if (position >= 0) {
      changeCurrentUser({position});
    }
  };

  if (action === "new") {
    return (
      <Button variant="contained" onClick={handleButtonClick}>
        New
      </Button>
    );
  }
  if (action === "edit") {
    return (
      <Button variant="contained" color="warning" onClick={handleButtonClick}>
        <EditIcon />
      </Button>
    );
  }
};

export default ModifyButton;
