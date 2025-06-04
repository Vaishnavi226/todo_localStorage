import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import CountingCards from "../Components/CountingCards";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PsychologyIcon from "@mui/icons-material/Psychology";
import styled from "styled-components";
import {
  backdropClasses,
  Fab,
  Modal,
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
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

  const [openModal, setOpenModal] = useState(false); //state setter function

  const [selectedOption, setSelectedOption] = useState();

  const boxStyle = {
    height: "fit-content",
    width: "350px",
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "10px",
    border: "none",
  };

  const buttonStyle = {
    width: "48%",
    padding: "10px 15px",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "transparent",
  };

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
        onClick={() => setOpenModal(true)}
      >
        <AddIcon />
      </Fab>

      {/* add todo modal  */}
      <Modal open={openModal} onClose={() => {}}>
        <Box style={boxStyle}>
          {/* modal headding  */}
          <h4 style={{ textAlign: "center", margin: "10px 0px" }}>
            Add your Task
          </h4>

          {/* write your task  */}
          <div
            style={{
              padding: "10px 20px ",
            }}
          >
            <InputLabel>TODO</InputLabel>
            <TextField
              variant="outlined"
              style={{
                width: "100%",
              }}
            />
          </div>

          {/* select your type  */}
          <div
            style={{
              padding: "10px 20px",
            }}
          >
            <InputLabel>Select category</InputLabel>
            <Select
              style={{
                width: "100%",
              }}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <MenuItem value="health">Health</MenuItem>
              <MenuItem value="study">Study</MenuItem>
              <MenuItem value="work">Work</MenuItem>
              <MenuItem value="mental">Mental Health</MenuItem>
            </Select>
          </div>

          {/* buttons and actions  */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // width: "100%",
              // gap: "10px",
              padding: "10px",
            }}
          >
            <button style={buttonStyle} onClick={() => setOpenModal(false)}>
              Cancel
            </button>
            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              ADD
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Todo;

// const handleOpen = () => setOpenModal(true);
// const handleClose = () => setOpenModal(false);
