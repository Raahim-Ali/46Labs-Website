import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../Assests/Logo.svg";
import linkedin from "../Assests/LinkedIn.svg";
import youtube from "../Assests/Youtube.svg";
import { useNavigate } from "react-router-dom";
function QuickLinks() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        padding: "100px 350px",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "30%" }}>
        <Box sx={{ height: "100px" }}>
          <img src={logo} alt="" />
        </Box>
        <Box>
          <Typography>
            Powered by the industry leading PeerEdge® Connectivity Fabric and
            providing the only unified platform to manage global connectivity,
            46 Labs enables IT leaders to deliver value and efficiency through
            its suite of digital infrastructure and business connectivity
            solutions.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "40px" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            contact@46labs.com
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography sx={{ padding: "10px 0px", color: "#858585" }}>
            Explore
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ padding: "10px 0px", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => {
              navigate("/The-PeerEdge-Fabric");

              const scrollDuration = 1000;
              const scrollStep = -window.scrollY / (scrollDuration / 15);

              const scrollInterval = setInterval(() => {
                if (window.scrollY !== 0) {
                  window.scrollBy(0, scrollStep);
                } else {
                  clearInterval(scrollInterval);
                }
              }, 1);
            }}
          >
            The PeerEdge Fabric
          </Typography>

          <Typography
            sx={{ padding: "10px 0px", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => {
              navigate("/Fabric-Portal");

              const scrollDuration = 1000;
              const scrollStep = -window.scrollY / (scrollDuration / 15);

              const scrollInterval = setInterval(() => {
                if (window.scrollY !== 0) {
                  window.scrollBy(0, scrollStep);
                } else {
                  clearInterval(scrollInterval);
                }
              }, 1);
            }}
          >
            The Fabric Portal
          </Typography>
          <Typography
            sx={{ padding: "10px 0px", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => {
              navigate("/Voice-Orchestrator");

              const scrollDuration = 1000;
              const scrollStep = -window.scrollY / (scrollDuration / 15);

              const scrollInterval = setInterval(() => {
                if (window.scrollY !== 0) {
                  window.scrollBy(0, scrollStep);
                } else {
                  clearInterval(scrollInterval);
                }
              }, 1);
            }}
          >
            Voice Orchestrator
          </Typography>
          <Typography
            sx={{ padding: "10px 0px", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => {
              navigate("/Network-Orchestrator");

              const scrollDuration = 1000;
              const scrollStep = -window.scrollY / (scrollDuration / 15);

              const scrollInterval = setInterval(() => {
                if (window.scrollY !== 0) {
                  window.scrollBy(0, scrollStep);
                } else {
                  clearInterval(scrollInterval);
                }
              }, 1);
            }}
          >
            Network Orchestrators
          </Typography>
          <Typography sx={{ padding: "10px 0px", fontWeight: "bold" }}>
            Fabric Local Loops
          </Typography>
          <Typography sx={{ padding: "10px 0px", fontWeight: "bold" }}>
            Global Voice Services
          </Typography>
          <Typography sx={{ padding: "10px 0px", fontWeight: "bold" }}>
            Protected Internet Services
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography sx={{ padding: "10px 0px", color: "transparent" }}>
            Explore
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ padding: "10px 0px", fontWeight: "bold" }}>
            Managed Hosting
          </Typography>
          <Typography sx={{ padding: "10px 0px", fontWeight: "bold" }}>
            Managed Edged Devices
          </Typography>
          <Typography sx={{ padding: "10px 0px", fontWeight: "bold" }}>
            Leadership
          </Typography>
          <Typography sx={{ padding: "10px 0px", fontWeight: "bold" }}>
            News
          </Typography>
          <Typography sx={{ padding: "10px 0px", fontWeight: "bold" }}>
            Careers
          </Typography>
          <Typography sx={{ padding: "10px 0px", fontWeight: "bold" }}>
            Contact us
          </Typography>
          <Typography sx={{ padding: "10px 0px", color: "transparent" }}>
            The PeerEdge Fabric
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography sx={{ padding: "10px 0px", color: "#858585" }}>
            Follow Us
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px 0px",
          }}
        >
          <img src={linkedin} alt="/" />
          <Typography sx={{ fontWeight: "bold", marginLeft: "10px" }}>
            LinkedIn
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px 0px",
          }}
        >
          <img src={youtube} alt="/" />
          <Typography sx={{ fontWeight: "bold", marginLeft: "10px" }}>
            Youtube
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default QuickLinks;
