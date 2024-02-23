import React from "react";
import "./Table.css";
export const Table = () => {
  return (
    <table className="component-craftsman-table">
      <thead>
        <tr>
          <th>Movie Title</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Gross</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Star Wars</td>
          <td>Adventure, Sci-fi</td>
          <td>1977</td>
          <td>$460,935,665</td>
        </tr>
        <tr>
          <td>Howard The Duck</td>
          <td>"Comedy"</td>
          <td>1986</td>
          <td>$16,295,774</td>
        </tr>
        <tr>
          <td>American Graffiti</td>
          <td>Comedy, Drama</td>
          <td>1973</td>
          <td>$115,000,000</td>
        </tr>
      </tbody>
    </table>
  );
};
