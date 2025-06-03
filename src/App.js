import { useEffect } from "react";
import Todo from "./Pages/Todo";
import useScreenSize from "./customHooks/useScreenSize";
import { Fab } from "@mui/material";

function App() {
  const isMobile = useScreenSize(450);
  const isTablet = useScreenSize(700);

  return (
    <>
      <Todo isMobile={isMobile} />
    </>
  );
}
export default App;
