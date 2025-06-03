import { Checkbox } from "@mui/material";

const ListTile = () => {
  return (
    <>
      {/* single task list tile  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "30px",
          backgroundColor: "#C5BAFF",
          padding: "10px",
          borderRadius: "7px",
        }}
      >
        {/* task  */}
        <p
          style={{
            fontWeight: 600,
          }}
        >
          My Task
        </p>

        {/* checkbox  */}
        <Checkbox />
      </div>
    </>
  );
};

export default ListTile;
