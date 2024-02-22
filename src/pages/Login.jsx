import { Box, Container, Typography } from "@mui/material";
import Logo from "../assets/Logo.png";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
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
        <img width={"274px"} src={Logo} className="logo" alt="Vite logo" />
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
            Get Started by Providing Your Email Rizwan
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
                display: "flex",
                padding: "10px",
                border: "1px solid grey",
                borderRadius: "10px",
                width: { xs: "250px", md: "300px" },
                justifyContent: "center",
                columnGap: "20px",
                cursor: "pointer",
              }}
            >
              <img src={Facebook} />
              <Typography sx={{ color: "#03014c" }}>
                Login with Facebook
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
                Login with Google
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
                padding: "10px",
                border: "1px solid grey",
                borderRadius: "10px",
                marginTop: "1rem",
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
            >
              <Typography sx={{ color: "#ffff", fontSize: "16px" }}>
                Log in with Email
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
                Don’t have an account?{" "}
                <span
                  style={{
                    color: "#633db8",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  Sign up
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
