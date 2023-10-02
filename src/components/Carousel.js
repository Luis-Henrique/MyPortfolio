import { motion } from "framer-motion";
import "./Carousel.css"
import React, { useRef, useEffect, useState } from "react";

import item1 from "../assets/img/item1.png"
import item2 from "../assets/img/item2.png"
import item3 from "../assets/img/item3.png"

function Carousel () {
    const carousel = useRef();
    const images = [item1, item2, item3, item3, item3];
    const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="mainCarousel">

      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        
        <motion.div className="inner" drag="x" dragConstraints={{ right: 0, left: -width}}>

          {images.map(image => (
            <motion.div className="item" key={image}>
              <img src={image} alt="image"/>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>

    </div>
  );
}

export default Carousel;
