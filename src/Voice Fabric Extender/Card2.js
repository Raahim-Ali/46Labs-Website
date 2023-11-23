import { Box, Typography } from "@mui/material";
import React from "react";
import group from "../Assests/GroupIcons2.svg";

function Card2() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "100px 350px",
        marginLeft: "50px",
      }}
    >
      <Box>
        <img src={group} alt="" />
      </Box>
      <Box
        sx={{
          marginLeft: "120px",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
            Drag. Drop. Deploy.
          </Typography>
        </Box>
        <Box sx={{ width: "90%", marginTop: "10px" }}>
          <Typography>
            PeerEdge® Voice Fabric extenders are provider and environment
            neutral, with the flexibility to live inside private clouds, bare
            metal hardware, public clouds, Managed Hosting, and Edge Devices.
            Connect to existing voice providers in remote locations or leverage
            Global Voice Services to securely exchange voice connectivity
            between The Fabric and remote locations.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Card2;
