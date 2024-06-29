
import "./App.css";

import Routers from "./Routers";
import Scripts from "./Scripts";
import * as $ from 'jquery'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.jQuery = window.$ = $
  }, [])
  return (
    <>
      <Scripts />
      <Routers />
    </>
  );
}

export default App;
