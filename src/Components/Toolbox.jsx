import React from "react";

const Toolbox = () => {
  return (
    <div className="card shadow p-3 mb-2 mt-1 bg-body rounded">
      <div className="card-header">Drag to Add</div>
      {/* shortcut .card-body */}
      <div className="card-body">
        {/* shortcut ul.list-group.list-group-flush */}
        <ul className="list-group list-group-flush">
          {/* shortcut li.list-group-item */}
          <li className="list-group-item">
            <button className="btn btn-outline-primary">Button</button>
          </li>
          <li className="list-group-item">
            <button className="btn btn-outline-primary">Text</button>
          </li>
          <li className="list-group-item">
            <button className="btn btn-outline-primary">Space</button>
          </li>
          <li className="list-group-item">
            <button className="btn btn-outline-primary">Table</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Toolbox;
