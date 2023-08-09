
import React, { useState,useRef } from 'react'
import axios from 'axios';
import InputField from './InputField';
import Expand from './HOC/expand';
import ViewEditToggle from './HOC/viewEditToggle';

const App = () => {

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const myRef= useRef()

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post(
        "http://localhost:3002/add_cattlefiles",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };




  return (
    <div className="App">
      <input type="file" name='file' onChange={saveFile} />
      <button onClick={()=>myRef.current.focus()}>Upload</button>
      {/* <InputField ref={myRef} name="suresh"/> */}

      <Expand/>
      <h1>View and Edit Paragraph</h1>
      <ViewEditToggle/>
    </div>
  );

}

export default App