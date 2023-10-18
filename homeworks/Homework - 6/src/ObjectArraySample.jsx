import React from "react";
import { productsData } from "./data/productsData";

function ObjectArraySample() {
  return (
    <>
      <table className="w3-table w3-bordered w3-border w3-hoverable">
        <thead className="w3-indigo">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((item) => {
            return (
              <tr className="w3-hover-pale-green">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantityPerUnit}</td>
                <td>{item.unitsInStock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ObjectArraySample;
