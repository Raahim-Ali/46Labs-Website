import { Box, Typography, Button } from "@mui/material";
import React from "react";
import dots from "../Assests/Dots.svg";

function OrchestratorsCard() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          borderRadius: "30px",
          width: "60%",
        }}
      >
        <Box sx={{ padding: "45px 40px", display: "flex" }}>
          <Box width={"100%"}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "50%", marginLeft: "10px" }}>
                  <Typography sx={{ color: "white", fontWeight: "bold" }}>
                    ORCHESTRATORS
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ height: "10px", marginRight: "50px" }}>
                <img src={dots} alt="" />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ width: "520px" }}>
                <Typography
                  sx={{ color: "White", fontSize: "35px", marginTop: "130px" }}
                >
                  Every machine will speak to every machine.
                </Typography>
              </Box>
              <Box sx={{ width: "250px", marginTop: "150px" }}>
                <Typography sx={{ color: "white", fontSize: "16px" }}>
                  Fabric Orchestrators securely connect the Peeredge Fabric to
                  any global location or infrastructure, cloud or ground.
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Button
                    sx={{
                      padding: "0px 0px",
                      height: "50px",
                      marginTop: "150px",
                      width: "180px",
                      border: "2px solid white",
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
                    <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                      VOICE EXTENDERS
                    </Typography>
                  </Button>
                </Box>

                <Box>
                  <Button
                    sx={{
                      padding: "0px 0px",
                      height: "50px",
                      marginTop: "10px",
                      width: "180px",
                      border: "2px solid white",
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
                    <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                      DATA EXTENDERS
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OrchestratorsCard;
