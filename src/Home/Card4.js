import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

function Card4() {
  return (
    <Box
      sx={{
        padding: "150px 350px 30px 350px",
        marginLeft: "50px",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", marginBottom: "40px" }}>
          <Divider
            sx={{
              backgroundColor: "red",
              width: "50px",
              height: "0.5px",
              marginTop: "10px",
              marginRight: "14px",
            }}
          />
          <Typography sx={{ fontWeight: "bold" }}>PEEREDGE FABRIC</Typography>
        </Box>
      </Box>
      <Box sx={{ width: "350px" }}>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Future-proof your legacy communications with the future-forward fabric
        </Typography>
      </Box>
      <Box sx={{ width: "350px", marginTop: "40px" }}>
        <Typography sx={{ fontSize: "13px" }}>
          Our cloud-managed Peeredge Fabric provides a unified approach to
          global communications, allowing companies to consume and manage
          connectivity in the cloud, on the ground and around the world.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Button
          sx={{
            height: "50px",
            width: "170px",
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
          <Typography sx={{ fontSize: "15px" }}>Explore the Fabric</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default Card4;
