import React from "react";
import FormCom from "./components/FormCom";
import SaveButton from "./components/SaveButton";
import StatusBar from "./components/StatusBar";

export default function App() {
  return (
    <div>
      <StatusBar />
      <SaveButton />
      <FormCom/>
    </div>
  );
}
