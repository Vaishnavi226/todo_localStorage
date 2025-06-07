import { Checkbox, Typography } from "@mui/material";

const Task = ({ taskTitle, taskType }) => {
  const cardColors = {
    health: "#FF9E9E",
    study: "#E8F9FF",
    work: "#DDF6D2",
    mHealth: "#C5BAFF",
  };
  return (
    <div
      style={{
        maxWidth: "100%",
        backgroundColor: `${cardColors[taskType]}`,
        padding: "10px 15px",
        borderRadius: "5px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <Typography variant="h5">{taskTitle}</Typography>
      <Checkbox />
    </div>
  );
};
export default Task;

// default function is default , when exported default it can be imported with any name ,
// while importing react checks if such named function exists , if nop such function is found then default is taken as priority
// default export is always exported without {}
