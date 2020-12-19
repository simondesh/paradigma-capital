import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TeamListData from "./TeamListData";

const TeamList = () => {
    return (
        <>
            <MainList>
                <h3>Our Team</h3>
                {TeamListData.map((member) => (
                    <TeamCell key={member.key}>
                        <img src={member.image} className="cellimage"></img>
                        <div className="celldescription">
                            <div>{member.name}</div>
                            <div>{member.education}</div>
                            <div>{member.role}</div>
                        </div>
                    </TeamCell>
                ))}
            </MainList>
        </>
    );
};

const MainList = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    width: 100%;
    background: #5f513f;
`;
const TeamCell = styled(motion.div)`
    width: 80vw;
    background: #e9e0d5;

    border-radius: 3.5rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 575px;

    .cellimage {
        height: 5rem;
        border-radius: 50%;
        margin: 1rem 3rem 1rem 1rem;
    }
    .celldescription {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export default TeamList;
