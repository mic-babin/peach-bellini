import React, { useState } from "react";
import { Overlay, Text, Button, Warning } from "./age-wall.styles";

const AgeWall = ({ setIsOpen }) => {
  const close = () => {
    setIsOpen(false);
    localStorage.setItem("bellini-age", true);
  };
  const [warning, setWarning] = useState(false);

  const showWarning = () => {
    setWarning(true);
  };

  return (
    <Overlay>
      <Text>
        Are you of legal <br />
        drinking age?
      </Text>
      <div className="d-flex">
        {!warning && (
          <>
            <Button
              onClick={() => {
                close();
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                showWarning();
              }}
            >
              No
            </Button>
          </>
        )}
      </div>
      {warning && (
        <Warning className="px-5">
          **You are not old enough to view this content.
        </Warning>
      )}
    </Overlay>
  );
};

export default AgeWall;
