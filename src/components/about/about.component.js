import React from "react";
import { Bg, H2, Paragraph } from "./about.style";

const About = () => {
  return (
    <Bg id="about">
      <div className="container">
        <div className="row">
          <H2
            className="col-lg-4 px-lg-0"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -200, opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <span>👀</span>
            ABOUT US
          </H2>
          <div className="col-lg-8">
            <Paragraph
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                type: "spring",
              }}
              viewport={{ once: true }}
            >
              Looking for a quick and fun way to enjoy your favorite mixed
              drinks without having to go out of your way? Look no further! We
              call them Clubtails, you can call them delicious. Miraculous as it
              may seem, there now exists a juicy Peach Bellini in a
              ready-to-drink, single-serve can.
            </Paragraph>
            <Paragraph
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                type: "spring",
              }}
              viewport={{ once: true }}
            >
              Don’t forget our Hard Seltzers that taste like fruity cocktails,
              unlike the other flavourless stuff! Think we’re crazy? Try our
              exciting flavors to become a believer!
            </Paragraph>
          </div>
        </div>
      </div>
    </Bg>
  );
};

export default About;
