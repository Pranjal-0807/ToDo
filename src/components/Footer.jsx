import React from "react";

const Footer = () => {
  return (
    <>
      <div className="border-t-4"></div>
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-lg text-center my-3">Actions</p>
          <button className="appearance-none">Mark All Completed</button>
          <br />
          <button className="appearance-none">Clear Completed</button>
        </div>

        <div>
          <p className="font-bold text-lg text-center my-3">Remaining Todos</p>
          <p className="text-center">1 item left</p>
        </div>

        <div>
          <p className="font-bold text-lg text-center my-3">Filter by Status</p>
          <div className="text-center">
            <button className="appearance-none">All</button>
            <br />
            <button className="appearance-none">Active</button>
            <br />
            <button className="appearance-none">Completed</button>
          </div>
        </div>

        <div>
          <p className="font-bold text-lg text-center my-3">Filter by Color</p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 mx-4">
              <input type="checkbox" className="form-checkbox" />
              <div className="w-5 h-3 bg-green-700 rounded-sm"></div>
              <div>Green</div>
            </div>

            <div className="flex items-center space-x-3 mx-4">
              <input type="checkbox" className="form-checkbox" />
              <div className="w-5 h-3 bg-blue-700 rounded-sm"></div>
              <div>Blue</div>
            </div>

            <div className="flex items-center space-x-3 mx-4">
              <input type="checkbox" className="form-checkbox" />
              <div className="w-5 h-3 bg-orange-700 rounded-sm"></div>
              <div>Orange</div>
            </div>

            <div className="flex items-center space-x-3 mx-4">
              <input type="checkbox" className="form-checkbox" />
              <div className="w-5 h-3 bg-purple-700 rounded-sm"></div>
              <div>Purple</div>
            </div>

            <div className="flex items-center space-x-3 mx-4">
              <input type="checkbox" className="form-checkbox" />
              <div className="w-5 h-3 bg-red-700 rounded-sm"></div>
              <div>Red</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
