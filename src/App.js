import React from "react";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Heading />
      <div className="flex flex-col flex-grow my-5 border shadow p-3 mx-80">
        <Input />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
