import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import ImageDiv from "./components/Imagebar/ImageDiv";
import GetImage from "./components/Card/GetImage";
import Result from "./components/Result/Result";
const cors = require("cors");
cors();
function App() {
  const [data, setData] = useState("");
  const [theme, setTheme] = useState("lightTheme");
  const [index, setIndex] = useState(true);
  const [resultTags, setResultTags] = useState([]);
  const getData = (liftedData) => {
    setData(liftedData);
  };

  const getTheme = (liftedTheme) => {
    setTheme(liftedTheme);
  };
  // console.log(theme);

  const getZindex = (liftedIndex) => {
    setIndex(liftedIndex);
  };

  const getResultTags = (liftedTags) => {
    setResultTags(liftedTags);
  };

  return (
    <>
      <Nav
        getResultTags={getResultTags}
        index={index}
        getTheme={getTheme}
        getData={getData}
      />
      {data ? (
        <Result getData={getData} resultTags={resultTags} theme={theme} data={data} />
      ) : (
        <ImageDiv getResultTags={getResultTags} getData={getData} />
      )}
      <GetImage
        getZindex={getZindex}
        theme={theme}
        getData={getData}
        data={data}
      />
    </>
  );
}

export default App;
