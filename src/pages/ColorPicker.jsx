import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap"></div>
      </div>
    </div>
  );
};

export default ColorPicker;
