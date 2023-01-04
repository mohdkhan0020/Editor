import React from "react";
// import { Container } from "reactstrap";
import { Container } from "./Container";
import { Element } from "@craftjs/core";

const Table = () => {
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];

  return (
    <>
      <div>
        <Element is={Container} id={Table} canvas>
          <div
            className="Apps"
            style={{
              width: "100%",
              // height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <table
              style={{
                border: "2px solid forestgreen",
                width: "400px",
                height: "100px",
              }}
            >
              <tr style={{ borderBottom: "1px solid black" }}>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key} style={{ textAlign: "center" }}>
                    <td>{Text}</td>
                    <td>{Text}</td>
                    <td>{Text}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </Element>
      </div>
    </>
  );
};

export default Table;
