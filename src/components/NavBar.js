import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// import { Navigation } from "./Navigation";
//icon
import LogoAnim from "./LogoAnim";

const NavBar = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <div>
                <LogoAnim />
                <Link id="logo" to="/">
                    <h1>PARADIGMA</h1>
                    <h2>CAPITAL</h2>
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">About</Link>
                        <Line
                            transition={{ duration: 0.25 }}
                            initial={{ width: "0%" }}
                            animate={{ width: pathname === "/" ? "70%" : "0%" }}
                        />
                    </li>
                    <li>
                        <Link to="/work">Work</Link>
                        <Line
                            transition={{ duration: 0.25 }}
                            initial={{ width: "0%" }}
                            animate={{
                                width: pathname === "/work" ? "70%" : "0%",
                            }}
                        />
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                        <Line
                            transition={{ duration: 0.25 }}
                            initial={{ width: "0%" }}
                            animate={{
                                width: pathname === "/contact" ? "70%" : "0%",
                            }}
                        />
                    </li>
                </ul>
                <Link to="/join">
                    <motion.button
                        transition={{ duration: 0.25 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        join
                    </motion.button>
                </Link>
            </div>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    height: 15vh;
    @media (max-width: 1300px) {
        height: 20vh;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem;
    background: #e9e0d5;

    position: sticky;
    top: 0;
    z-index: 10;
    overflow-x: hidden;
    a {
        color: #0a0908;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }

    #logo {
        padding-left: 3rem;
        h1 {
            font-family: Roboto Mono;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.095em;
        }
        h2 {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.175em;

            color: #0a0908;
        }
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li {
        padding: 0rem 1rem;
        position: relative;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo {
            display: inline-block;
            margin: 1rem;
        }
        ul {
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0.5rem;
            }
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #5f513f;
    width: 0%;
    position: absolute;
    bottom: 0%;
    left: 20%;
    /* @media (max-width: 1300px) {
    left: 0%;
  } */
`;

export default NavBar;
