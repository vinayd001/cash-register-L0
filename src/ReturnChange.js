import "./styles.css";

import React from "react";

export default function ReturnChange({ show, notes, cashLeft }) {
  return (
    show && (
      <div className="return-change-container">
        <label htmlFor="return-change">Return Change</label>
        <div id="output">
          <table>
            <tbody>
              <tr>
                <th>Notes</th>
                {notes.map((note) => {
                  return <th key={note}>{note}</th>;
                })}
              </tr>
              <tr>
                <th>No. of Notes</th>
                {cashLeft.map((noteCount) => {
                  if (noteCount > 0) {
                    return <td key={noteCount.index}>{noteCount}</td>;
                  } else {
                    return <td key={noteCount.index}></td>;
                  }
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  );
}
