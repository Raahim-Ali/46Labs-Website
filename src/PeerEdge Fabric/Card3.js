import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PFsas from "../Assests/PFsas.svg";
import PFzt from "../Assests/PFzt.svg";
import PFei from "../Assests/PFei.svg";
import PFao from "../Assests/PFao.svg";
import PFrtco from "../Assests/PFrtco.svg";
import PFrr from "../Assests/PFrr.svg";

function Card3() {
  return (
    <Box
      sx={{
        padding: "200px 150px 0px 200px",
        marginLeft: "50px",
      }}
    >
      <Box sx={{ width: "380px" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          The future is cloudy.
        </Typography>
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          The way forward is clear.
        </Typography>
      </Box>
      <Box sx={{ width: "450px", marginTop: "30px" }}>
        <Typography sx={{ fontSize: "16px" }}>
          The Peeredge® Fabric exists to improve the business lives of IT
          administrators and those they support.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Button
          sx={{
            height: "50px",
            width: "180px",
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
          <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
            Explore the Future
          </Typography>
        </Button>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={PFsas} alt="" />
              </Box>
              <Box sx={{ width: "680px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Simplicity and Scalability
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Built on a flat network topology, connect every device without
                  multiple layers of routing or complex configurations.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={PFzt} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Zero Trust
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Traffic exchanged within The Fabric is encrypted everywhere,
                  with added Micro-segmentation capabilities that limit lateral
                  movement for potential intruders that already exist within
                  corporate networks.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={PFei} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Easy to Implement
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Natively designed Voice Fabric Extenders and Data Fabric
                  Extenders plug into The Fabric and interact with nearly all
                  voice and data workloads, applications, and equipment
                  instantly.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={PFao} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Analyzed and Optimized
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Easily monitor and optimize voice and data performance
                  utilizing The Fabric Portal, giving complete visibility to the
                  flow of their global connectivity.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={PFrtco} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Reduced Total Cost of Ownership
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Consolidate all voice and data WAN functions into a single
                  easy to manage platform. eliminating the need for multiple
                  vendors and tooling.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0px" }}>
              <Box>
                <img src={PFrr} alt="" />
              </Box>
              <Box sx={{ width: "650px", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Resilience and Redundancy
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  The Fabric boasts highly redundant infrastructure, connections
                  and protocols. Paired with HA Voice and Data Fabric Extenders
                  and geographically diverse Fabric Local Loops, enterprises can
                  architect a self-healing network able to tolerate any failure
                  gracefully.
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
