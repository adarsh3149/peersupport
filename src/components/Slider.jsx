import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

function Slider() {
  const images = [
    { url: "/assets/images/1.png" },
    { url: "/assets/images/2.png" },
    { url: "/assets/images/3.png" },
    { url: "/assets/images/4.png" },
  ];
  return (
    <div>
      <SimpleImageSlider
        width={"100vw"}
        height={"100vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{
            zIndex:"-99"
        }}
      />
    </div>
  );
}

export default Slider;
