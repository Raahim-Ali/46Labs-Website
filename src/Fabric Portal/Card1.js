import { Box, Button, Typography } from "@mui/material";
import React from "react";
import arrow from "../Assests/Arrow.svg";
import group from "../Assests/FPCard1.svg";

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
            justifyContent: "center",
            width: "50%",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginLeft: "70px" }}>
            <Typography sx={{ color: "white", fontSize: "20px" }}>
              THE FABRIC PORTAL
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "60px",
                padding: "10px 0px",
                width: "500px",
              }}
            >
              Unified Global Management
            </Typography>
            <Box>
              <Typography sx={{ color: "white", fontSize: "20px" }}>
                The only platform for total global connectivity.
              </Typography>
              <Typography sx={{ color: "white", fontSize: "20px" }}>
                Vendor and carrier neutral, manage all your voice
              </Typography>
              <Typography sx={{ color: "white", fontSize: "20px" }}>
                and data connections through single log-in.
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
            padding: "10px 36px",
            borderRadius: "30px",
            marginRight: "130px",
          }}
        >
          <Box>
            <img style={{ height: "730px" }} src={group} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card1;
