import React from "react";
import { useState } from "react";
//style
import styled from "styled-components";

//animate
import { motion } from "framer-motion";

const LogoAnim = () => {
    const [hoverLogo, SetHoverLogo] = useState(false);

    return (
        <StyleLogo
            onHoverStart={() => SetHoverLogo(true)}
            onHoverEnd={() => SetHoverLogo(false)}
        >
            <EmptyRect
                transition={{ duration: hoverLogo ? 0.25 : 0.75 }}
                initial={{ x: 0, y: 0 }}
                animate={
                    hoverLogo
                        ? { x: 0, y: 0, scale: 1.1 }
                        : { x: -5, y: 5, scale: 1 }
                }
            ></EmptyRect>
            <EmptyRect
                transition={{ duration: hoverLogo ? 0.25 : 0.75 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: hoverLogo ? 1.1 : 1 }}
            ></EmptyRect>
            <EmptyRect
                transition={{ duration: hoverLogo ? 0.25 : 0.75 }}
                initial={{ x: 0, y: 0 }}
                animate={
                    hoverLogo
                        ? { x: 0, y: 0, scale: 1.1 }
                        : { x: 5, y: -5, scale: 1 }
                }
            ></EmptyRect>
            <FullRect
                transition={{ duration: hoverLogo ? 0.25 : 0.75 }}
                initial={{ x: 0, y: 0 }}
                animate={{ x: 5, y: -5, scale: hoverLogo ? 1.1 : 1 }}
            ></FullRect>
        </StyleLogo>
    );
};

const EmptyRect = styled(motion.div)`
    height: 40px;
    width: 40px;
    border: 1px solid black;
    position: absolute;
    top: 4vh;
    left: 2vw;
    @media (max-width: 1300px) {
        top: 4vh;
        left: 20vw;
    }
`;

const FullRect = styled(motion.div)`
    height: 10px;
    width: 10px;
    background: black;
    position: absolute;
    position: absolute;
    left: calc(2vw + 3px);
    top: calc(4vh + 27px);
    @media (max-width: 1300px) {
        left: calc(20vw + 3px);
        top: calc(4vh + 27px);
    }
`;

const StyleLogo = styled(motion.div)`
    margin-top: 10vh;
`;

export default LogoAnim;
