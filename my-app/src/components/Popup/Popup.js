import React, { useEffect } from "react";
import "./Popup.css";
import { BsShare, BsInfoCircle } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineClose } from "react-icons/ai";
import { FiTwitter, FiThumbsUp } from "react-icons/fi";
const Popup = (props) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const onDownloadHandler=()=>{
    window.open(props.download,'_blank');
  }
  return (
    <>
      <div
        className={
          props.theme === "lightTheme"
            ? "popupWrapper lightpopupWrapper"
            : "popupWrapper darkpopupWrapper"
        }
      ></div>
      <div
        className={
          props.theme === "lightTheme"
            ? "popupMaindiv lightpopupMaindiv"
            : "popupMaindiv darkpopupMaindiv"
        }
      >
        <div
          className="popupImagediv"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div>
            <div className="popupCross" onClick={props.closePopup}>
              <AiOutlineClose />
            </div>
          </div>
          <div className="popupButton">
            <div className="popupShareinfodiv">
              <div className="popupContent">
                <BsShare className="popupShareinfodivIcon" />
                <div className="popupShareName">share</div>
              </div>
              <div className="popupContent">
                <BsInfoCircle className="popupShareinfodivIcon" />
                <div className="popupShareName">info</div>
              </div>
            </div>
            <div className="popupDownloaddiv" onClick={onDownloadHandler}>
              <button className="popupDownload">Download image</button>
            </div>
          </div>
        </div>
        <div className="popupPgdiv">
          <div className="popupPgdiv1">
            <div className="popupPgImage">
              <img
                className="popupPgImageDiv"
                src={props.profileImg}
                title="profile image"
                alt="ProfileImage"
              />
            </div>
            <div className="popupPgName">
              <div
                className={
                  props.theme === "lightTheme"
                    ? "popupPgName1 lightpopupPgName1"
                    : "popupPgName1 darkpopupPgName1"
                }
              >
                {props.profileName}
              </div>
              <div className="popupPgName2">@{props.userName}</div>
            </div>
            <div className="popupPgFollow">
              <div className="popupPgFollowInsta">
                <AiOutlineInstagram
                  style={{ fontSize: "15px", paddingRight: "3px" }}
                />
                <div>/{props.userName}</div>
              </div>
              <div className="popupPgFollowInsta">
                <FiTwitter style={{ fontSize: "15px" }} />
                <div>/{props.userName}</div>
              </div>
            </div>
          </div>
          <div className="popupPgdiv2">
            <div className="popupPgDown">1.2K downloads</div>
            <div className="popupPgLikes">
              <FiThumbsUp style={{ fontSize: "20px", paddingRight: "3px" }} />
              <div className="popupPgLikeName">{props.likes}</div>
            </div>
          </div>
        </div>
        <div
          className={
            props.theme === "lightTheme"
              ? "popupSuggestdiv lightpopupSuggestdiv"
              : "popupSuggestdiv darkpopupSuggestdiv"
          }
        >
          <div className="popupSuggestName">Related Tags</div>
          <div className="popupSuggestTags">
            {props.tags.map((tag) => {
              return (
                <div
                  className="popupSuggestTagsNames"
                  onClick={() => {
                    props.getData(tag.title);
                  }}
                >
                  {tag.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
