import { Box, Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import search from "../Assests/Search.svg";
import LangIcon from "../Assests/LangIcon.svg";
import Logo from "../Assests/Logo.svg";
import TPF from "../Assests/TPF.svg";
import TFP from "../Assests/TFP.svg";
import VFE from "../Assests/VFE.svg";
import DFE from "../Assests/DFE.svg";
import FLL from "../Assests/FLLIcon.svg";
import GVS from "../Assests/GVS.svg";
import PISIcon from "../Assests/PISIcon.svg";
import MH from "../Assests/MH.svg";
import MED from "../Assests/MED.svg";
import AU from "../Assests/AU.svg";
import News from "../Assests/News.svg";
import Careers from "../Assests/Careers.svg";
import Cu from "../Assests/CU.svg";

function Header() {
  const navigate = useNavigate();
  const [isPeerEdgeFabricOpen, setIsPeerEdgeFabricOpen] = useState(false);
  const [isOrchestratorsOpen, setIsOrchestratorsOpen] = useState(false);
  const [isBusinessConnectivityOpen, setIsBusinessConnectivityOpen] =
    useState(false);
  const [isDigitalInfrastructureOpen, setIsDigitalInfrastructureOpen] =
    useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const closeAllDropdowns = () => {
    setIsPeerEdgeFabricOpen(false);
    setIsOrchestratorsOpen(false);
    setIsBusinessConnectivityOpen(false);
    setIsDigitalInfrastructureOpen(false);
    setIsCompanyOpen(false);
  };

  const togglePeerEdgeFabricDropdown = () => {
    closeAllDropdowns();
    setIsPeerEdgeFabricOpen(!isPeerEdgeFabricOpen);
  };
  const toggleOrchestratorsDropdown = () => {
    closeAllDropdowns();

    setIsOrchestratorsOpen(!isOrchestratorsOpen);
  };
  const toggleBusinessConnectivityDropdown = () => {
    closeAllDropdowns();

    setIsBusinessConnectivityOpen(!isBusinessConnectivityOpen);
  };
  const toggleDigitalInfrastructureDropdown = () => {
    closeAllDropdowns();

    setIsDigitalInfrastructureOpen(!isDigitalInfrastructureOpen);
  };
  const toggleCompanyDropdown = () => {
    closeAllDropdowns();

    setIsCompanyOpen(!isCompanyOpen);
  };

  return (
    <Box
      sx={{
        height: "120px",
        width: "100%",
        padding: "8px 0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "25px",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "20%",
            justifyContent: "space-around",
            marginTop: "3px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "1px",
                marginRight: "10px",
              }}
            >
              <img src={search} alt="/" />
            </Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
              SEARCH
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ cursor: "pointer", fontWeight: "bold", fontSize: "13px" }}
            >
              SALES
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ cursor: "pointer", fontWeight: "bold", fontSize: "13px" }}
            >
              SUPPORT
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Divider
          sx={{ backgroundColor: "#EAEAEA", marginTop: "8px", width: "90%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px 20px 10px",
        }}
      >
        <Box
          sx={{
            width: "130px",
            height: "35px",
            marginLeft: "50px",
            cursor: "pointer",
          }}
        >
          <Link to="/">
            <Button sx={{ bottom: "20px" }}>
              <img src={Logo} alt="/" />
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "1200px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={togglePeerEdgeFabricDropdown}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginRight: "8px",
                  fontSize: "19px",
                }}
              >
                PeerEdge Fabric
              </Typography>
              <Box>
                <img src={LangIcon} alt="/" />
              </Box>
            </Box>
            {isPeerEdgeFabricOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  width: "300px",
                  left: "0",
                  backgroundColor: "#fff",
                  boxShadow: "0px 12px 44px 0px rgba(0, 0, 0, 0.10)",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              >
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={TPF} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                      onClick={() => {
                        navigate("/The-PeerEdge-Fabric");
                      }}
                    >
                      The PeerEdge Fabric
                    </li>
                  </Box>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={TFP} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                      onClick={() => {
                        navigate("/Fabric-Portal");
                      }}
                    >
                      The Fabric Portal
                    </li>
                  </Box>
                </ul>
              </Box>
            )}
          </Box>

          <Box sx={{ position: "relative" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={toggleOrchestratorsDropdown}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginRight: "8px",
                  fontSize: "19px",
                }}
              >
                Orchestrators
              </Typography>
              <Box>
                <img src={LangIcon} alt="/" />
              </Box>
            </Box>
            {isOrchestratorsOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  width: "300px",
                  left: "0",
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0px 12px 44px 0px rgba(0, 0, 0, 0.10)",
                  padding: "10px",
                }}
              >
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={VFE} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                      onClick={() => {
                        navigate("/Voice-Orchestrator");
                      }}
                    >
                      Voice Orchestrator
                    </li>
                  </Box>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={DFE} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                      onClick={() => {
                        navigate("/Network-Orchestrator");
                      }}
                    >
                      Network Orchestrator
                    </li>
                  </Box>
                </ul>
              </Box>
            )}
          </Box>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={toggleBusinessConnectivityDropdown}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginRight: "8px",
                  fontSize: "19px",
                }}
              >
                Business Connectivity
              </Typography>
              <Box>
                <img src={LangIcon} alt="/" />
              </Box>
            </Box>
            {isBusinessConnectivityOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  width: "330px",
                  left: "0",
                  borderRadius: "20px",
                  boxShadow: "0px 12px 44px 0px rgba(0, 0, 0, 0.10)",
                  backgroundColor: "#fff",
                  padding: "10px",
                }}
              >
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={FLL} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                    >
                      Fabric Local Loops
                    </li>
                  </Box>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={GVS} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                    >
                      Global Voice Services
                    </li>
                  </Box>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={PISIcon} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                    >
                      Protected Internet Services
                    </li>
                  </Box>
                </ul>
              </Box>
            )}
          </Box>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={toggleDigitalInfrastructureDropdown}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginRight: "8px",
                  fontSize: "19px",
                }}
              >
                Digital Infrastructure
              </Typography>
              <Box>
                <img src={LangIcon} alt="/" />
              </Box>
            </Box>
            {isDigitalInfrastructureOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  width: "300px",
                  left: "0",
                  backgroundColor: "#fff",
                  boxShadow: "0px 12px 44px 0px rgba(0, 0, 0, 0.10)",
                  padding: "10px",
                  borderRadius: "20px",
                }}
              >
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={MH} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                    >
                      Managed Hosting
                    </li>
                  </Box>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={MED} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                    >
                      Managed Edged Devices
                    </li>
                  </Box>
                </ul>
              </Box>
            )}
          </Box>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={toggleCompanyDropdown}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginRight: "8px",
                  fontSize: "19px",
                }}
              >
                Company
              </Typography>
              <Box>
                <img src={LangIcon} alt="/" />
              </Box>
            </Box>
            {isCompanyOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  width: "180px",
                  left: "0",
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0px 12px 44px 0px rgba(0, 0, 0, 0.10)",
                  padding: "10px",
                }}
              >
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={AU} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                    >
                      About us
                    </li>
                  </Box>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={News} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                    >
                      News
                    </li>
                  </Box>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={Careers} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                    >
                      Careers
                    </li>
                  </Box>
                  <Box sx={{ display: "flex", padding: "10px 0px" }}>
                    <img src={Cu} alt="/" />
                    <li
                      style={{
                        padding: "10px 10px",
                        cursor: "pointer",
                        fontSize: "22px",
                      }}
                    >
                      Contact us
                    </li>
                  </Box>
                </ul>
              </Box>
            )}
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              padding: "0px 0px",
              height: "60px",

              width: "230px",
              border: "2px solid black",
              borderRadius: "16px",
              backgroundColor: "black!important",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              marginRight: "40px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Typography sx={{ fontSize: "16px" }}>REQUEST DEMO</Typography>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
