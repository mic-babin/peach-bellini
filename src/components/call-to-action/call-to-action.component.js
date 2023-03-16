import React from "react";
import { Wrapper, NeonText, NeonTextWrapper } from "./call-to-action.style";
import PeachSrc from "../../../static/peach-bg.png";
import { motion, spring } from "framer-motion";
import { opacity, opacityTimes } from "../hero/hero.animation";

const CallToAction = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${PeachSrc})` }}>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          type: "spring",
        }}
        viewport={{ once: true }}
      >
        <NeonTextWrapper
          initial={{ opacity: 0.4 }}
          animate={{
            opacity: [1, 1, 0.4, 0.4, 0.8, 0.8, 0.4, 0.4, 0.7, 0.7, 1, 1, 1],
          }}
          transition={{
            times: [
              0, 1, 1, 1.05, 1.05, 1.25, 1.25, 1.3, 1.3, 1.4, 1.4, 1.8, 1.8,
            ],
            type: spring,
            duration: 0.75,
            delay: 0.25,
            repeat: Infinity,
            repeatDelay: 2.25,
          }}
        >
          <NeonText>hurry to the LCBO</NeonText>
          <NeonText>to try Clubtails</NeonText>
          <NeonText>Peach Bellini today.</NeonText>
        </NeonTextWrapper>
      </motion.div>
    </Wrapper>
  );
};

export default CallToAction;
