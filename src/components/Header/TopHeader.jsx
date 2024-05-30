import { Box, Container, Stack, Typography } from "@mui/material";
import DarkModeButton from "../ui/DarkModeButton";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import LanguageList from "../ui/LanguageList";

const TopHeader = () => {
  const options = ["AR", "EN"];
  return (
    <Box sx={{ bgcolor: "#2b3345" }}>
      <Container>
        <Stack direction="row" alignItems="center">
          <Typography
            variant="body2"
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Hot
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "12px", fontWeight: "bold", color: "#fff" }}
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <DarkModeButton />
          <LanguageList options={options} />
          <Stack gap={1.5} direction="row">
            <Twitter fontSize="16px" color="#fff" />
            <Facebook fontSize="16px" color="#fff" />
            <Instagram fontSize="16px" color="#fff" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TopHeader;
