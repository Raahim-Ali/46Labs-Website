import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import managedhosting from "../Assests/ManagedHosting.svg";
import edgeddevices from "../Assests/EdgedDevices.svg";

function Card5() {
  return (
    <Box
      sx={{
        padding: "200px 350px 30px 350px",
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
          <Typography sx={{ fontWeight: "bold" }}>
            DIGITAL INFRASTUCTURE
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "350px" }}>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Communicate Globally. Compute Locally.
        </Typography>
      </Box>
      <Box sx={{ width: "350px", marginTop: "40px" }}>
        <Typography sx={{ fontSize: "13px" }}>
          Peeredge Digital Infrastructure enables the fastest path to the
          fabric, managed at our core or your edge.
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            height: "595px",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "black",
              marginRight: "20px",
              width: "50%",
              borderRadius: "56px",
            }}
          >
            <Box sx={{ padding: "50px 50px 20px 50px" }}>
              <Typography sx={{ color: "white", fontSize: "16px" }}>
                MANAGED HOSTING
              </Typography>
            </Box>
            <Box sx={{ padding: "0px 50px 0px 50px", height: "260px" }}>
              <img src={managedhosting} alt="" />
            </Box>
            <Box sx={{ padding: "10px 50px" }}>
              <Typography sx={{ color: "white", fontSize: "40px" }}>
                Go Metal
              </Typography>
            </Box>
            <Box sx={{ padding: "10px 50px" }}>
              <Typography sx={{ color: "white" }}>
                Secure bare metal infrastructure-as-a-service (IAAS) directly
                connected and managed within the Peeredge Fabric.
              </Typography>
            </Box>
            <Box sx={{ padding: "10px 50px" }}>
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
                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                  MANAGED HOSTING
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "black",
              marginRight: "20px",
              width: "50%",
              borderRadius: "56px",
            }}
          >
            <Box sx={{ padding: "40px 50px 0px 50px" }}>
              <Typography sx={{ color: "white" }}>
                MANAGED EDGED DEVICES
              </Typography>
            </Box>
            <Box sx={{ padding: "0px 50px 0px 50px", height: "260px" }}>
              <img src={edgeddevices} alt="" />
            </Box>
            <Box sx={{ padding: "30px 50px" }}>
              <Typography sx={{ color: "white", fontSize: "40px" }}>
                Be Edgy. In a good way
              </Typography>
            </Box>
            <Box sx={{ padding: "0px 50px" }}>
              <Typography sx={{ color: "white" }}>
                Optimized and secure edge infrastructure for premise-based
                workloads. Fully managed within the Peeredge Fabric.
              </Typography>
            </Box>
            <Box sx={{ padding: "10px 50px" }}>
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
                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                  MANAGED HOSTING
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card5;
