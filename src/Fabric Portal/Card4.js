import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import FPCM from "../Assests/FPCM.svg";
import FPTLB from "../Assests/FPTLB.svg";
import FPPAM from "../Assests/FPPAM.svg";
import table from "../Assests/FPCard4.svg";
import FPFRR from "../Assests/FPFRR.svg";
import FPMCR from "../Assests/FPMCR.svg";
import FPZTU from "../Assests/FPZTU.svg";

function Card4() {
  return (
    <Box
      sx={{
        padding: "150px 150px 0px 200px",
        marginLeft: "50px",
      }}
    >
      <Box>
        <Box sx={{ display: "flex" }}>
          <Divider
            sx={{
              backgroundColor: "red",
              width: "50px",
              height: "1px",
              marginTop: "10px",
              marginRight: "14px",
            }}
          />
          <Typography sx={{ fontWeight: "bold" }}>
            ROUTING MANAGEMENT
          </Typography>
        </Box>
      </Box>
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
          <Box sx={{ height: "500px" }}>
            <Box sx={{ marginLeft: "20px" }}>
              <img style={{ height: "400px" }} src={table} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* =========================================================================================== */}
      <Box sx={{ marginTop: "30px" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPFRR} alt="" />
              </Box>
              <Box sx={{ width: "680px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Fallback Routing Rules
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  The ability to setup primary tiered routing rules, which then
                  fall back to backup rulesets on failure condition.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPMCR} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Master Codelist Routing
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  All traffic is instantly categorized using a master codelist,
                  which allows users to map prefixes to destination and adjust
                  routing by destination, instead of prefix.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPZTU} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Zero Touch Update of Peeredge®
                </Typography>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Voice Fabric Extenders
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  The PeerEdge Fabric maintains real-time communication with all
                  global Orchestrators for zero touch routing adjustments. If
                  connection to the cloud is ever lost, Voice Orchestrators will
                  continue to operate in standalone mode with no impact to call
                  processing.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ height: "500px" }}>
            <Box sx={{ marginLeft: "20px" }}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card4;
