import React,{useState,useEffect} from "react";
import "./Result.css";
const Result = (props) => {
  const [tagResult,setTagResult] =useState([]);
  useEffect(()=>{
    setTagResult(props.resultTags);
  },[props])
  return (
    <div
      className={
        props.theme === "lightTheme"
          ? "resultMaindiv lightresultMaindiv"
          : "resultMaindiv darkresultMaindiv"
      }
    >
      <div
        className={
          props.theme === "lightTheme"
            ? "resultNamediv lightresultNamediv"
            : "resultNamediv darkresultNamediv"
        }
      >
        {props.data}
      </div>
      {tagResult.length>0 &&
        <div className="resultSuggestdiv">
          {
            tagResult.map((tag)=>
            <div
            className={
              props.theme === "lightTheme"
                ? "resultTags lightresultTags"
                : "resultTags darkresultTags"
            }
            onClick={()=>{
              props.getData(tag.value);
            }}
          >
            {tag.value}
          </div>
            )
          }
        </div>
      }
    </div>
  );
};

export default Result;
