import React from "react";

interface BulletTextProps {
  txt: string;
}

export const BulletText: React.FC<BulletTextProps> = ({ txt }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "17.77px",
          height: "13.5px",
          backgroundColor: "#D9D9D9",
          marginRight: "10px",
        }}
      ></div>
      <div>{txt}</div>
    </div>
  );
};
