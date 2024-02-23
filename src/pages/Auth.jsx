import { useState, useRef, useEffect } from "react";
import { Box, Button, Container, Typography, TextField } from "@mui/material";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Auth = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [isError, setIsError] = useState(false);
  const boxesRefs = Array.from({ length: 5 }, () => useRef(null));

  const handleClick = () => {
    setVerificationCode(""); // Clear the verification code state
    // Clear the value of each input box using refs
    boxesRefs.forEach((ref) => {
      ref.current.value = ""; // Set the value to an empty string
    });
    boxesRefs[0].current.focus();
  };

  const handleBack = () => {
    navigate("/signup");
  };

  useEffect(() => {
    boxesRefs[0].current.focus();
  }, []); // Focus the first box when the component mounts

  const handleInputChange = (index) => (e) => {
    const input = e.target;
    const maxLength = input.maxLength;
    const value = input.value.replace(/\D/g, ""); // Remove non-numeric characters

    setVerificationCode((prevCode) => {
      let newCode =
        prevCode.substring(0, index) + value + prevCode.substring(index + 1);

      // Move focus to the next box if the current box is filled
      if (value.length >= maxLength) {
        const nextIndex = index + 1;
        if (nextIndex < boxesRefs.length) {
          boxesRefs[nextIndex].current.focus();
        }
      }

      return newCode;
    });
  };

  const handleContinueClick = () => {
    if (verificationCode.length === 5) {
      console.log("Verification Code:", verificationCode);
      setIsError(false);
      // Add additional logic here to handle the verification code
    } else {
      setIsError(true);
    }
    navigate("/wait")
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      if (verificationCode.length === 5) {
        handleContinueClick();
        // Remove focus from the last box
        boxesRefs[boxesRefs.length - 1].current.blur();
      } else {
        setIsError(true);
      }
    }
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
        <Box sx={{ display: "flex" }}>
          <img width={"274px"} src={Logo} className="logo" alt="Vite logo" />
          <Button
            sx={{
              color: "black",
              position: "absolute",
              right: "2rem",
              top: { xs: "2rem", md: "5rem" },
            }}
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon fontSize="4" />
            Back
          </Button>
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
            Check Your Email
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "15px" },
              textAlign: "center",
            }}
          >
            We{`'`}ve sent a 5-character verification code to
            workacount@gmail.com. <br /> The code will expire shortly.
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
                justifyContent: "center",
                columnGap: "15px",
                marginTop: "0.1rem",
                backgroundColor: "#f9f8ff",
              }}
            >
              {boxesRefs.map((ref, index) => (
                <TextField
                  key={index}
                  inputRef={ref}
                  variant="outlined"
                  size="small"
                  inputProps={{
                    maxLength: 1,
                    style: {
                      textAlign: "center",
                      width: "88px",
                      height: "88px",
                      border: isError ? "1px solid red" : "1px solid #F9F8FF",
                      caretColor: "transparent",
                    },
                  }}
                  onChange={handleInputChange(index)}
                  onKeyPress={handleEnterPress}
                />
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                border: "1px solid grey",
                borderRadius: "10px",
                marginTop: "2rem",
                width: { xs: "250px", md: "300px" },
                justifyContent: "center",
                columnGap: "20px",
                cursor: "pointer",
                backgroundColor: "#633db8",
              }}
              onClick={handleContinueClick}
            >
              <Typography sx={{ color: "#ffff", fontSize: "16px" }}>
                Verify Code
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
                Didn’t get the code? &nbsp;
                <span
                  style={{
                    color: "#633db8",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  Try Again
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Auth;
