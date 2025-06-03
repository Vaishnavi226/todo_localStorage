import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = ({ isMobile }) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();

  const currDate = date.getDate(); // this gives the todays date
  const currMonth = month[date.getMonth()]; // this gives the current month index inside month array , month[i]
  const currYear = date.getUTCFullYear(); // this gives you year

  const finalDate = `${currDate} ${currMonth} ${currYear}`; // full date

  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
      }}
    >
      <Toolbar
        style={{
          //   height: "100px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#000",
            fontSize: "48px",
            fontWeight: 600,
          }}
        >
          Today
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#666",
            fontSize: isMobile ? "20px" : "36px",
            fontWeight: 500,
            marginTop: "5px",
          }}
        >
          {finalDate}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
