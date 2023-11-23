import { Box, Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import search from "../Assests/Search.svg";
import LangIcon from "../Assests/LangIcon.svg";
import Logo from "../Assests/Logo.svg";
import TPF from "../Assests/TPF.svg";
import TFP from "../Assests/TFP.svg";
import FLL from "../Assests/FLLIcon.svg";
import GVS from "../Assests/GVS.svg";
import PISIcon from "../Assests/PISIcon.svg";
import MH from "../Assests/MH.svg";
import MED from "../Assests/MED.svg";
import AU from "../Assests/AU.svg";
import News from "../Assests/News.svg";
import Careers from "../Assests/Careers.svg";
import Cu from "../Assests/CU.svg";

function SampleHeader() {
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

  const onMouseLeaveFunc = () => {
    closeAllDropdowns();
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
            justifyContent: "space-around",
            width: "1200px",
          }}
        >
          <Box sx={{ position: "relative" }} onMouseLeave={onMouseLeaveFunc}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onMouseEnter={togglePeerEdgeFabricDropdown}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginRight: "8px",
                  fontSize: "19px",
                }}
              >
                Services
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
                      Software Developoment
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
                      Design and Testing
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
                      Special Services
                    </li>
                  </Box>
                </ul>
              </Box>
            )}
          </Box>

          <Box sx={{ position: "relative" }} onMouseLeave={onMouseLeaveFunc}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onMouseEnter={toggleOrchestratorsDropdown}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginRight: "8px",
                  fontSize: "19px",
                }}
              >
                Industries
              </Typography>
              <Box>
                <img src={LangIcon} alt="/" />
              </Box>
            </Box>
            {isOrchestratorsOpen && (
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  top: "100%",
                  width: "570px",
                  left: "0",
                  borderRadius: "20px",
                  boxShadow: "0px 12px 44px 0px rgba(0, 0, 0, 0.10)",
                  backgroundColor: "#fff",
                  padding: "10px",
                }}
              >
                <Box sx={{ marginRight: "30px" }}>
                  <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <Box
                      sx={{
                        display: "flex",
                        padding: "10px 0px",
                      }}
                    >
                      <img src={FLL} alt="/" />
                      <li
                        style={{
                          padding: "10px 10px",
                          cursor: "pointer",
                          fontSize: "22px",
                          width: "220px",
                        }}
                      >
                        Information Technology
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
                        Fintech
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
                        Equipment Financing
                      </li>
                    </Box>
                  </ul>
                </Box>
                <Box>
                  <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <Box
                      sx={{
                        display: "flex",
                        padding: "10px 0px",
                      }}
                    >
                      <img src={FLL} alt="/" />
                      <li
                        style={{
                          padding: "10px 10px",
                          cursor: "pointer",
                          fontSize: "22px",
                          width: "200px",
                        }}
                      >
                        E-Commerce
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
                        Healthcare
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
                        Telecommunication
                      </li>
                    </Box>
                  </ul>
                </Box>
              </Box>
            )}
          </Box>
          <Box sx={{ position: "relative" }} onMouseLeave={onMouseLeaveFunc}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onMouseEnter={toggleBusinessConnectivityDropdown}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginRight: "8px",
                  fontSize: "19px",
                }}
              >
                Technologies
              </Typography>
              <Box>
                <img src={LangIcon} alt="/" />
              </Box>
            </Box>
            {isBusinessConnectivityOpen && (
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  top: "100%",
                  width: "480px",
                  left: "0",
                  borderRadius: "20px",
                  boxShadow: "0px 12px 44px 0px rgba(0, 0, 0, 0.10)",
                  backgroundColor: "#fff",
                  padding: "10px",
                }}
              >
                <Box>
                  <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <Box
                      sx={{
                        display: "flex",
                        padding: "10px 0px",
                      }}
                    >
                      <img src={FLL} alt="/" />
                      <li
                        style={{
                          padding: "10px 10px",
                          cursor: "pointer",
                          fontSize: "22px",
                          width: "200px",
                        }}
                      >
                        Microsoft Stack
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
                        Frontend
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
                        Backend
                      </li>
                    </Box>
                  </ul>
                </Box>
                <Box>
                  <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <Box
                      sx={{
                        display: "flex",
                        padding: "10px 0px",
                      }}
                    >
                      <img src={FLL} alt="/" />
                      <li
                        style={{
                          padding: "10px 10px",
                          cursor: "pointer",
                          fontSize: "22px",
                          width: "200px",
                        }}
                      >
                        Cloud
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
                        Mobile
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
                        DB / BI / BW
                      </li>
                    </Box>
                  </ul>
                </Box>
              </Box>
            )}
          </Box>
          <Box sx={{ position: "relative" }} onMouseLeave={onMouseLeaveFunc}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onMouseEnter={toggleDigitalInfrastructureDropdown}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginRight: "8px",
                  fontSize: "19px",
                }}
              >
                Case Studies
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
                      Success Stories
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
                      Previous Work
                    </li>
                  </Box>
                </ul>
              </Box>
            )}
          </Box>
          <Box sx={{ position: "relative" }} onMouseLeave={onMouseLeaveFunc}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onMouseEnter={toggleCompanyDropdown}
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
                  width: "260px",
                  left: "0",
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0px 12px 44px 0px rgba(0, 0, 0, 0.10)",
                  padding: "10px",
                }}
              >
                <Box>
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
                        Mission and Vision
                      </li>
                    </Box>
                  </ul>
                </Box>
                <Box>
                  <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <Box sx={{ display: "flex", padding: "10px 0px" }}>
                      <img src={Careers} alt="/" />
                      <li
                        style={{
                          padding: "10px 10px",
                          cursor: "pointer",
                          fontSize: "22px",
                        }}
                      >
                        Testimonials
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

export default SampleHeader;
