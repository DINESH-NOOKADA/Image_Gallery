import React from "react";
import Card from "./Card.js";
import './Layout.css'
function Layout(props) {
  const images = props.images;
  const sizes = ["small", "medium", "large", "large", "large"];
  // const randomIndex = Math.floor(Math.random() * sizes.length);
  // const randomSize = sizes[randomIndex];
  return (
    <>
    <div className={props.theme==="lightTheme" ?"pinContainer lightpinContainer":"pinContainer darkpinContainer"}>
      {images.map((image) => (
        //  key={image.id}
        <Card
        getZindex={props.getZindex}
          theme={props.theme}
          getData = {props.getData}
          key={image.id}
          image={image}
          size={sizes[Math.floor(Math.random() * sizes.length)]}
        />
        
        // </>
      ))}
    </div>
    </>
  );
}

const styles = {
  pin_container: {
    
    // margin: 0,
    paddingTop: "50px",
    paddingLeft: "151px",
    paddingRight: "151px",
    // width: '80vw',
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 400px)",
    gridAutoRows: "10px",
    // position: 'relative',
    left: "50%",
    // transform: 'translateX(-50%)',
    justifyContent: "center",

    // backgroundColor: 'black'
  },
};

export default Layout;
