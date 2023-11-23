import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import FPMVA from "../Assests/FPMVA.svg";
import FPPT from "../Assests/FPPT.svg";
import FPPtriggers from "../Assests/FPPTriggers.svg";
import FPANI from "../Assests/FPANI.svg";
import FPDNIS from "../Assests/FPDNIS.svg";
import FPDR from "../Assests/FPDR.svg";
import FPELM from "../Assests/FPELM.svg";
import FPCmoni from "../Assests/FPCmoni.svg";
import graph from "../Assests/FPGraph.svg";

function Card5() {
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
          <Typography sx={{ fontWeight: "bold" }}>VOICE ANALYTICS</Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPMVA} alt="" />
              </Box>
              <Box sx={{ width: "680px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Multi-variable Analytics
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Realtime calculation of Attempts, Completions, Minutes, ASR,
                  ACD, NER, Financials, NEPR, SDR, MOS Scores, PDD and Routing
                  Depth
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPPT} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Performance Trending
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Graphing shows all real-time statistics mapped against
                  yesterday and last week’s performance.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPPtriggers} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Performance Triggers
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Tunable triggers for increases or drops in ASR, ALOC,
                  Attempts, Completions, MOS scores, Financial, Ports, CPS, and
                  SDR.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPANI} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  ANI Reporting
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Track all common callers across the platform, regardless of
                  originating customer, vendor, or Voice Fabric Extender.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ height: "500px" }}>
            <Box sx={{ marginLeft: "20px" }}>
              <img
                style={{ height: "500px", marginLeft: "60px" }}
                src={graph}
                alt=""
              />
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
                <img src={FPDNIS} alt="" />
              </Box>
              <Box sx={{ width: "680px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  DNIS Reporting
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Track all common callees across the platform, regardless of
                  originating endpoint, vendor, or Voice Orchestrator.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPDR} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Destination Reporting
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Track destination performance, including country, operator,
                  LATA, OCN, and traffic jurisdiction.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPELM} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Endpoint Latency Monitoring
                </Typography>

                <Typography sx={{ fontSize: "16px" }}>
                  All endpoints connected to PeerEdge® Voice Orchestrators are
                  monitored for latency, uptime, performance.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={FPCmoni} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Capacity Monitoring
                </Typography>

                <Typography sx={{ fontSize: "16px" }}>
                  Monitor all allocated CPS and session counts in real-time
                  across all Voice Orchestrators, with alerting for endpoints
                  that are operating at capacity.
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

export default Card5;
