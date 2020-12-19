import React from "react";
import styled from "styled-components";

//components
import mainbackground from "../ressources/mainbackground.jpg";
import TeamList from "../components/TeamList";

const Team = () => {
    return (
        <StyledTeam>
            <div className="teamsection1">
                <div className="main-image"></div>
                <p>
                    Paradigma Capital is a student-run long-only investment fund
                    with over $15k under management. The fund is structured into
                    two equity portfolios, value and growth. Both portfolios are
                    made up of individual stocks diversified across multiple
                    countries and industries. The value stocks are selected
                    through a bottom-up investment approach focused on
                    fundamental analysis. The growth portfolio is composed of
                    innovative and disruptive companies that will shape the next
                    decade. They are chosen by identifying the future leaders of
                    the sectors that are experiencing major secular growth
                    trends.
                </p>
            </div>

            <TeamList />
        </StyledTeam>
    );
};

const StyledTeam = styled.div`
    .teamsection1 {
        height: 85vh;
        @media (max-width: 1300px) {
            height: 80vh;
        }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    .main-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 80%;
        width: 100%;
        background-image: url(${mainbackground});
        background-size: cover;
        background-position: 50% 30%;
        @media (max-width: 1000px) {
            height: 65%;
        }
    }
`;

export default Team;
