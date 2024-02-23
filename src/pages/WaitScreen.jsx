import { Box, Container, Typography } from "@mui/material";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
export const WaitScreen = () => {
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
            Get Your Team Started
          </Typography>

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
            Please Wait
              <span
                style={{
                  color: "#633db8",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={handleClick}
              >
               .....
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
