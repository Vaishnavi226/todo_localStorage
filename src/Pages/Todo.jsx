import React from "react";
import Navbar from "../Components/Navbar";
import CountingCards from "../Components/CountingCards";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PsychologyIcon from "@mui/icons-material/Psychology";
import styled from "styled-components";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Todo = ({ isMobile }) => {
  // styled components ( the name says it create react components that have style) (tags)
  // for any tag we can create a styled compnennt styled.tagName

  const GridResponsive = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 100px;
    gap: 10px;
    padding: 0px 20px;

    @media only screen and (max-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  return (
    <div>
      <Navbar isMobile={isMobile}></Navbar>

      <GridResponsive>
        {/* health card  */}
        <CountingCards
          cardIcon={<FavoriteIcon fontSize="large" style={{ color: "red" }} />}
          cardTitle="Health"
          cardCount={1}
          cardColor="#FF9E9E"
        />

        {/* study card  */}
        <CountingCards
          cardIcon={
            <BorderColorIcon
              fontSize="large"
              style={{ color: "rgb(99 146 230)" }}
            />
          }
          bagrou
          cardTitle="Study"
          cardCount={1}
          cardColor="#E8F9FF"
        />

        {/* Work card  */}
        <CountingCards
          cardIcon={<WorkIcon fontSize="large" style={{ color: "16610E" }} />}
          cardTitle="Work"
          cardCount={1}
          cardColor="#DDF6D2"
        />

        {/* other card  */}
        <CountingCards
          cardIcon={
            <PsychologyIcon fontSize="large" style={{ color: "52357B" }} />
          }
          cardTitle="Mental Health"
          cardCount={1}
          cardColor="#C5BAFF"
        />
      </GridResponsive>

      {/* list of all the task      */}
      <div
        style={{
          height: "fit-content",
          minHeight: "300px",
          padding: "10px",
          border: "1px solid #000",
          borderRadius: "7px",
          margin: "10px",
        }}
      ></div>

      <Fab
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Todo;
