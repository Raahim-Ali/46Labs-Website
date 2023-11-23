import { Box, Typography, Button } from "@mui/material";
import React from "react";
import endmap from "../Assests/EndMap.svg";

function Card6() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "0px 160px 0px 210px",
        justifyContent: "center",
        marginTop: "70px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          borderRadius: "30px",
          width: "100%",
          height: "400px",
          marginLeft: "40px",
          overflow: "hidden",
        }}
      >
        <Box sx={{ padding: "25px 40px", display: "flex" }}>
          <Box width={"100%"}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: "400px",
                    marginLeft: "90px",
                    marginTop: "120px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "40px",
                    }}
                  >
                    Future Proof your network
                  </Typography>
                  <Button
                    sx={{
                      height: "50px",
                      width: "180px",
                      border: "1px solid black",
                      marginBottom: "20px",
                      marginTop: "10px",
                      borderRadius: "16px",
                      marginRight: "20px",
                      backgroundColor: "white!important",
                      color: "black",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                      EXPLORE THE FABRIC
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box sx={{ marginTop: "50px", marginLeft: "20px" }}>
                <img src={endmap} alt="" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card6;
