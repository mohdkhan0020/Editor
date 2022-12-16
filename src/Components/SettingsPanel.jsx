import React from "react";

const SettingsPanel = () => {
  return (
    <div className="card shadow p-3 mb-5 mt-1 bg-body rounded">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          {/* shortcut h5>span.badge.bg-primary */}
          <span className="badge text-black">
            Selected
            <select name="" id="" className="ml-5 p-2 sz-5">
              <option value="width">width</option>
              <option value="height">height</option>
              <option value="margin">margin</option>
              <option value="padding">padding</option>
              <option value="border">border</option>
              <option value="font">font</option>
              <option value="fontSize">fontSize</option>
              <option value="bold">bold</option>
            </select>
          </span>
        </div>
      </div>
      <div className="card-body">
        <div className="d-grid gap-2 mt-3">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
