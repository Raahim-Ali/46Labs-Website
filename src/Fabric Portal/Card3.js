import { Box, Typography } from "@mui/material";
import React from "react";
import FPCM from "../Assests/FPCM.svg";
import FPTLB from "../Assests/FPTLB.svg";
import FPPAM from "../Assests/FPPAM.svg";
import FPNES from "../Assests/FPNES.svg";
import FPTA from "../Assests/FPTA.svg";
import FPCDGLCV from "../Assests/FPCDGLCV.svg";

function Card3() {
  return (
    <Box
      sx={{
        padding: "50px 150px 0px 200px",
        marginLeft: "50px",
      }}
    >
      <Box sx={{ marginTop: "30px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPCM} alt="" />
              </Box>
              <Box sx={{ width: "680px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Connection Management
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Centrally manage all global SIP connections processed by
                  PeerEdge® Voice Orchestrators, including private connections
                  to protected workloads like PBXs, contact centers and cloud
                  platforms like Microsoft Teams™ and Zoom.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPTLB} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Traffic Load Balancing + Failover
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Voice connections are setup to provide failover redundancy,
                  load balancing and trunk level monitoring for global
                  connectivity resilience.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPPAM} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Performance Alerts + Monitoring
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  The PeerEdge Fabric monitors traffic flow over connections for
                  anomalies such as completion ratios, average lengths of calls,
                  uptime, MOS scores, voice spend, and more.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPNES} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Numbering + Emergency Service
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Enterprises manage all global numbering within The Fabric
                  Portal. Emergency service addresses are paired to numbering
                  and failover scenarios are setup to provide per-number
                  resiliency.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPTA} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Traffic Analytics
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  The unified dashboard for traffic analytics within The Fabric
                  Portal gives a single view of global call performance across
                  all extenders simultaneously.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPCDGLCV} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Call Debugging + Global Live Call View
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Administrators have the ability to perform deep analysis at
                  any time with centralized CDR management, and diagnostic PCAPs
                  on all voice calls.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card3;
