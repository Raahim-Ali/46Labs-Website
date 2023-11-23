import { Box, Typography } from "@mui/material";
import React from "react";
import group from "../Assests/NOCard2.svg";

function Card2() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "100px 230px",
      }}
    >
      <Box>
        <img src={group} alt="" />
      </Box>
      <Box
        sx={{
          marginLeft: "120px",
          width: "900px",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
            Simplify the edge by strengthening the core.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <Typography>
            Peeredge® Network Orchestrators instantly modernize how existing
            heterogenous networks connect to each other and the rest of the
            world.
          </Typography>
          <Typography sx={{ marginTop: "30px" }}>
            Once plugged in, network and route intelligence is automatically
            exchanged between The Fabric and Network Orchestrators, without
            manual configuration.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Card2;
