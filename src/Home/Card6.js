import { Box, Divider, Typography, Button } from "@mui/material";
import React from "react";
import charts from "../Assests/Chart.svg";
import gvs from "../Assests/GlobalVoiceServices.svg";
import fll from "../Assests/FLL.svg";
import pis from "../Assests/PIS.svg";

function Card6() {
  return (
    <Box
      sx={{
        padding: "200px 350px 30px 350px",
        marginLeft: "50px",
      }}
    >
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
          BUSINESS CONNECTIVITY
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          borderRadius: "30px",
          width: "100%",
          height: "350px",
          display: "flex",
        }}
      >
        <Box sx={{ width: "33%", marginLeft: "30px", marginTop: "20px" }}>
          <Box sx={{ padding: "20px 40px 0px 40px" }}>
            <Typography
              sx={{ color: "white", fontSize: "29px", marginTop: "110px" }}
            >
              Break the code,
            </Typography>
          </Box>
          <Box sx={{ padding: "0px 40px", width: "300px" }}>
            <Typography sx={{ color: "white", fontSize: "29px" }}>
              not the connection
            </Typography>
          </Box>
          <Typography
            sx={{ color: "white", padding: "20px 40px", fontSize: "12px" }}
          >
            Peeredge Business Connectivity originates in our Fabric and provides
            the most resilient network available.
          </Typography>
        </Box>
        <Box sx={{ width: "60%", marginRight: "10px" }}>
          <img
            style={{ width: "700px", marginTop: "30px" }}
            src={charts}
            alt=""
          />
        </Box>
      </Box>
      {/* ----------------------------------------------------------------------- */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "540px",
          marginTop: "10px",
          padding: "10px 30px",
        }}
      >
        <Box
          sx={{
            width: "30%",
            borderRadius: "24px",
            border: "1px solid #EAEAEA",
            padding: "10px 10px",
          }}
        >
          <img style={{ width: "350px" }} src={gvs} alt="" />
          <Box>
            <Typography
              sx={{ color: "#858585", fontSize: "16px", marginTop: "10px" }}
            >
              GLOBAL VOICE SERVICES
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "21px", fontWeight: "bold", marginTop: "20px" }}
            >
              Eliminate the busy signal from your connectivity.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "14px" }}>
              Global voice and messaging services in over 180 countries, all
              consumed directly from the Peeredge Fabric.
            </Typography>
          </Box>
          <Box sx={{ padding: "10px 0px" }}>
            <Button
              sx={{
                padding: "0px 0px",
                height: "50px",

                width: "180px",
                border: "1px solid black",
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
                LEARN MORE
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "65%" }}>
          <Box
            sx={{
              width: "100%",
              height: "240px",
              borderRadius: "24px",
              border: "1px solid #EAEAEA",
              padding: "10px 0px",
              marginLeft: "20px",
              marginBottom: "20px",
              display: "flex",
            }}
          >
            <img
              style={{ width: "350px", marginLeft: "10px" }}
              src={fll}
              alt=""
            />
            <Box sx={{ marginLeft: "20px" }}>
              <Box>
                <Typography
                  sx={{ fontSize: "16px", color: "#858585", marginTop: "20px" }}
                >
                  FABRIC LOCAL LOOPS (FLL)
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "21px",
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  Bring the Fabric down to Earth
                </Typography>
              </Box>
              <Box sx={{ width: "360px" }}>
                <Typography sx={{ fontSize: "14px", marginTop: "8px" }}>
                  Extend the Peeredge Fabric securely to edge in over 180
                  countries.
                </Typography>
              </Box>
              <Box sx={{ padding: "10px 0px" }}>
                <Button
                  sx={{
                    padding: "0px 0px",
                    height: "50px",
                    marginTop: "8px",
                    width: "180px",
                    border: "1px solid black",
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
                    LEARN MORE
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "235px",
              borderRadius: "24px",
              border: "1px solid #EAEAEA",
              padding: "10px 0px",
              marginLeft: "20px",
              marginBottom: "20px",
              display: "flex",
            }}
          >
            <img
              style={{ width: "350px", marginLeft: "10px" }}
              src={pis}
              alt=""
            />
            <Box sx={{ marginLeft: "20px" }}>
              <Box>
                <Typography
                  sx={{ fontSize: "16px", color: "#858585", marginTop: "20px" }}
                >
                  PROTECTED INTERNET SERVICE
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "21px",
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  Browser Secure. Feel Secure
                </Typography>
              </Box>
              <Box sx={{ width: "360px" }}>
                <Typography sx={{ fontSize: "14px", marginTop: "8px" }}>
                  DDOS and malware protected internet service for local users
                  and workloads.
                </Typography>
              </Box>
              <Box sx={{ padding: "10px 0px" }}>
                <Button
                  sx={{
                    padding: "0px 0px",
                    height: "50px",
                    marginTop: "8px",
                    width: "180px",
                    border: "1px solid black",
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
                    LEARN MORE
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card6;
