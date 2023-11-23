import { Box, Button, Typography } from "@mui/material";
import React from "react";
import arrow from "../Assests/Arrow.svg";
import homecard1 from "../Assests/HomeCard1.svg";
function Card1() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", padding: "0px 52px" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "80px",
          backgroundColor: "black",
          height: "800px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            width: "40%",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginLeft: "50px" }}>
            <Typography sx={{ color: "white", fontSize: "60px" }}>
              All Systems Go.
            </Typography>
            <Typography sx={{ color: "white", fontSize: "60px" }}>
              All The Time.
            </Typography>
            <Box sx={{ width: "570px", padding: "20px 0px" }}>
              <Typography sx={{ color: "white", fontSize: "20px" }}>
                Powered by the PeerEdge® Fabric, 46 Labs orchestrates
                connectivity on a global scale.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", padding: "30px 0px" }}>
              <Button
                sx={{
                  padding: "0px 0px",
                  height: "50px",

                  width: "180px",
                  border: "2px solid black",
                  borderRadius: "16px",
                  backgroundColor: "white!important",
                  color: "black",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  marginRight: "40px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <img src={arrow} alt="" />
                  <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                    REQUEST DEMO
                  </Typography>
                </Box>
              </Button>
              <Button
                sx={{
                  padding: "0px 0px",
                  height: "50px",

                  width: "180px",
                  border: "2px solid white",
                  borderRadius: "16px",
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  marginRight: "40px",
                }}
              >
                <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                  LEARN MORE
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "30px",
            marginBottom: "30px",
            padding: "0px 0px",
            borderRadius: "30px",
          }}
        >
          <Box>
            <img style={{ height: "750px" }} src={homecard1} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card1;
