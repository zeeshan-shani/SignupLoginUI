import { Box, Container, Typography } from "@mui/material";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import CircularProgressLoading from "../components/CircularProgressLoading";
export const WaitScreen = ({titleOne, titletwo}) => {
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
              fontSize: { xs: "30px", md: "48px" },
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
           {titleOne}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "30px", md: "48px" },
              fontWeight: "bold",
              textAlign: "center",
              color: "#4F25C8",
            }}
          >
            {titletwo}
          </Typography>

          <Box
            sx={{
              display: "flex",
              padding: "10px",
              marginTop: "3rem",
              width: "300px",
              justifyContent: "center",
              columnGap: "20px",
           
            }}
          >
            <CircularProgressLoading />
          </Box>
          <Typography sx={{ color: "black", fontSize: "16px" ,mt:5}}>
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
    </Container>
  );
};


