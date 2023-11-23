import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import "./index.css";
import VFExtender from "./Voice Fabric Extender/VFExtender";
import Home from "./Home/Home";
import PeerEdgeFabric from "./PeerEdge Fabric/PeerEdgeFabric";
import FabricPortal from "./Fabric Portal/FabricPortal";
import NetworkOrchestrator from "./Network Orchestrator/NetworkOrchestrator";

const theme = createTheme({
  typography: {
    fontFamily: "Epilogue",
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/The-PeerEdge-Fabric"
              element={<PeerEdgeFabric />}
            ></Route>
            <Route path="/Voice-Orchestrator" element={<VFExtender />}></Route>
            <Route path="/Fabric-Portal" element={<FabricPortal />}></Route>
            <Route
              path="/Network-Orchestrator"
              element={<NetworkOrchestrator />}
            ></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
