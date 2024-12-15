import React from "react";
import Heading from "./components/Heading";
import Input from "./pages/Input";
import Footer from "./smartComponents/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <Heading headingTitle={"Todos"} />
        <div className="flex flex-col flex-grow my-5 border shadow p-3 mx-80">
          <Input />
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
