import { Box, Button, Container, Typography } from "@mui/material";
import Logo from "../assets/Logo.png";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export const SignUp = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handleContinueClick = () => {
    navigate("/auth");
  };
  const handleBack=()=>{
    navigate("/");
  }
  return (
    <Container>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5rem",
          rowGap: { xs: "3rem", md: "5rem" },
        }}
      >
        <Box sx={{display:"flex"}}>
          <img width={"274px"} src={Logo} className="logo" alt="Vite logo" />
          <Button sx={{color:"black",position:"absolute",right:"2rem",top:{xs:"2rem",md:"5rem"}}} onClick={handleBack}><ArrowBackIosNewIcon fontSize="4"/>Back</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "30px", md: "40px" },
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Let{`'`}s Begin with Your Email
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "15px" },
              textAlign: "center",
            }}
          >
            We suggest using the work email address you use at work
          </Typography>
          <Box
            sx={{
              marginTop: "3rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                padding: "10px",
                border: "1px solid grey",
                borderRadius: "10px",
                width: { xs: "250px", md: "300px" },
                backgroundColor: "#f0f0f0",
                opacity: 0.5,
                pointerEvents: "none",
              }}
            >
              <Typography>workemail@gmail.com</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                border: "1px solid grey",
                borderRadius: "10px",
                marginTop: "1rem",
                width: { xs: "250px", md: "300px" },
                justifyContent: "center",
                columnGap: "20px",
                cursor: "pointer",
                backgroundColor: "#633db8",
              }}
              onClick={handleContinueClick}
            >
              <Typography sx={{ color: "#ffff", fontSize: "16px" }}>
                Continue
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                marginTop: "1rem",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: "1px",
                  width: "40%",
                  backgroundColor: "gray",
                  opacity: 0.5,
                }}
              ></div>
              <Typography>OR</Typography>
              <div
                style={{
                  height: "1px",
                  width: "40%",
                  backgroundColor: "gray",
                  opacity: 0.5,
                }}
              ></div>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                border: "1px solid grey",
                borderRadius: "10px",
                width: { xs: "250px", md: "300px" },
                justifyContent: "center",
                columnGap: "20px",
                cursor: "pointer",
                marginTop: "1rem",
              }}
            >
              <img src={Facebook} />
              <Typography sx={{ color: "#03014c" }}>
                Sign up with Facebook
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                border: "1px solid grey",
                borderRadius: "10px",
                marginTop: "1rem",
                width: { xs: "250px", md: "300px" },
                justifyContent: "center",
                columnGap: "20px",
                cursor: "pointer",
              }}
            >
              <img src={Google} />
              <Typography sx={{ color: "#03014c" }}>
                Sign up with Google
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                padding: "10px",
                marginTop: "1rem",
                width: "300px",
                justifyContent: "center",
                columnGap: "20px",
              }}
            >
              <Typography sx={{ color: "black", fontSize: "16px" }}>
                Already have an account? &nbsp;
                <span
                  style={{
                    color: "#633db8",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  Log in
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
