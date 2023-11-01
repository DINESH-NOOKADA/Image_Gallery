import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
import Popup from "../Popup/Popup";
import "./Card.css";
function Card(props) {
  const [show, setShow] = useState(false);

  const onShowHandler = () => {
    setShow(true);
    props.getZindex(false);
  };

  const onCloseHandler = () => {
    setShow(false);
    props.getZindex(true);
  };
  const image = props.image;
  const size = props.size;
  const like = (l) => {
    const lc = l > 999 ? (l / 1000).toFixed(1) + "k" : l;
    return lc;
  };
  return (
    <>
      <div style={{...styles[size] }} className={props.theme==="lightTheme" ?"card lightcard":"card darkcard"}>
        <div className="top" onClick={onShowHandler}>
          <img src={image.urls.regular} alt="Ant" className="image" />
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={image.user.profile_image.medium}
              alt="User"
              className="user-photo"
            />
            <div className="user-details">
              <div className={props.theme==="lightTheme" ?"user-name lightuser-name":"user-name darkuser-name"}>{image.user.name}</div>
              <div className="user-username">@{image.user.username}</div>
            </div>
          </div>
          <div className="right">
            <BiLike className={props.theme==="lightTheme" ?"like-symbol lightlike-symbol":"like-symbol darklike-symbol"} />
            <span className={props.theme==="lightTheme" ?"like-count lightlike-count":"like-count darklike-count"}>{like(image.likes)}</span>
          </div>
        </div>
      </div>
      {show && (
        <Popup
          
          theme={props.theme}
          getData = {props.getData}
          profileName={image.user.name}
          userName={image.user.username}
          likes={like(image.likes)}
          profileImg={image.user.profile_image.medium}
          image={image.urls.full}
          tags={image.tags}
          download={image.links.download}
          closePopup={onCloseHandler}
        />
      )}
    </>
  );
}

const styles = {
  // card: {
  //   margin: "15px 18px",
  //   padding: 0,
  //   backgroundColor: "white",
  //   // border:"1px solid black",
  //   display: "flex",
  //   flexDirection: "column",
  //   // border: "1px solid #e5e5e5",
  //   borderRadius: "0.5rem",
  // },
  small: {
    gridRowEnd: "span 30",
  },
  medium: {
    gridRowEnd: "span 37",
  },
  large: {
    gridRowEnd: "span 45",
  },
};

export default Card;
