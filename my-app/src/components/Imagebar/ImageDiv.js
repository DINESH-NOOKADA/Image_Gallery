import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import "./ImageDiv.css";
const ImageDiv = (props) => {
  const [searchText, setSearchText] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);
  const [results, setResults] = useState([]);
  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    setShowClearButton(!!text);
    fetchData(text); // Show the clear button if there's text
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
      .then((reponse) => reponse.json())
      .then((json) => {
        setResults(json.suggestions);
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="imgdivMainDiv">
      <div className="imgdivMainTitle">
        Download High Quality Images by creators
      </div>
      <div className="imgdivSideTitle">
        Over 2.4 million+ stock Images by our talented community
      </div>
      <div className="imgSearchMaindiv">
        <div className="imgdivSearchbar">
          <div className="imgdivSearchIcon">
            <AiOutlineSearch
              style={{
                //   border: "1px solid red",
                fontSize: "25px",
                paddingRight: "3px",
                paddingTop: "3px",
                paddingLeft: "15px",
                color: "#bababa",
              }}
            />
          </div>
          <input
            className="imgdivInputDiv"
            type="text"
            placeholder="Search high resolution Images, categories, wallpapers"
            value={searchText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <div className="imgdivCrossIcon">
            {showClearButton && (
              <IoMdClose
                onClick={clearSearch}
                style={{
                  fontSize: "23px",
                  color: "#bababa",
                  cursor: "pointer",
                  paddingRight: "10px",
                }}
              />
            )}
            {/* <IoMdClose/> */}
          </div>
        </div>
        {results.length > 0 && (
          <div className="imgSuggestDiv">
            {results.map((result, index) => {
              if (index < 10) {
                return (
                  <div
                    className="imgSuggestTags"
                    onClick={() => {
                      props.getData(result.value);
                      setResults([]);
                      setSearchText("");
                      setShowClearButton(false);
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
    </div>
  );
};

export default ImageDiv;
