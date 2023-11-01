import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import "./Nav.css";
const cors = require("cors");
cors();
// import {getJson} from "serpapi"
const Nav = (props) => {
  const [theme, setTheme] = useState("lightTheme");
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  const themeHandler = (value) => {
    setTheme(value);
    props.getTheme(theme);
  };
  // console.log("nav"+theme);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    setShowClearButton(!!text);
    fetchData(text);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      props.getData(searchText);
      setSearchText("");
      setShowClearButton(false);
      props.getResultTags(results);
      setResults([]);
    }
  };

  const clearSearch = () => {
    setSearchText("");
    setShowClearButton(false);
    setResults([]);
  };

  const fetchData = (value) => {
    const apiurl = `http://localhost:8000/suggest?parameter=${value}`;
    fetch(apiurl)
      .then((response) => response.json())
      .then((json) => {
        setResults(json.suggestions);
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={props.index ? "NavMainDiv1" : "NavMainDiv2"}>
      <div
        className={
          theme === "lightTheme"
            ? "mainDiv lightmainDiv"
            : "mainDiv darkmainDiv"
        }
      >
        <div
          className={
            theme === "lightTheme"
              ? "nameDiv lightnameDiv"
              : "nameDiv darknameDiv"
          }
        >
          Image Gallery
        </div>
        <div className="searchMainDiv">
          <div className="searchDiv">
            <div className="searchIcon">
              <AiOutlineSearch
                style={{
                  fontSize: "25px",
                  paddingRight: "3px",
                  paddingTop: "3px",
                  color: "#cbcbcb",
                }}
              />
            </div>
            <input
              className="inputDiv"
              type="text"
              placeholder="Search Images here"
              value={searchText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <div className="crossIcon">
              {showClearButton && (
                <IoMdClose
                  onClick={clearSearch}
                  style={{
                    fontSize: "23px",
                    color: "#cbcbcb",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>
          {results.length > 0 && (
            <div className="searchSuggestDiv">
              {results.map((result, index) => {
                if (index < 8) {
                  return (
                    <div
                      className="searchSuggestDivTags"
                      onClick={() => {
                        props.getData(result.value);
                        setResults([]);
                        setSearchText("");
                        setShowClearButton(false);
                        props.getResultTags(results);
                      }}
                    >
                      {result.value}
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
        <div
          className={
            theme === "lightTheme"
              ? "compDiv lightcompDiv"
              : "compDiv darkcompDiv"
          }
        >
          <div>Explore</div>
          <div>Collection</div>
          <div>Community</div>
        </div>
        <div
          className={
            theme === "lightTheme"
              ? "modeDiv lightmodeDiv"
              : "modeDiv darkmodeDiv"
          }
        >
          <div style={{ paddingTop: "3px" }}>Dark mode</div>
          <div style={{ paddingLeft: "10px" }}>
            <Button themeHandler={themeHandler} />
          </div>
        </div>
      </div>
      {/* <Suggest/> */}
    </div>
  );
};

export default Nav;
