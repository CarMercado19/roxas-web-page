import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const GridItem = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  borderRadius: "8px",
  cursor: "pointer",
}));

const PaperForItemsItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "#a3a3a3",
  textAlign: "center",
  borderRadius: "8px",
  padding: "10px",
}));

const GridElements = ({ icon: IconComponent, size, title, redirectionURL }) => {
  const handleClick = () => {
    window.open(`${redirectionURL}`, "_blank");
  };

  return (
    <GridItem item xs={12} sm={size} md={3} onClick={handleClick}>
      <PaperForItemsItem elevation={8}>
        <Box marginBottom="10px">
          <IconComponent />
        </Box>
        <Box>
          <Typography variant="h4">
            <strong>{title}</strong>
          </Typography>
        </Box>
      </PaperForItemsItem>
    </GridItem>
  );
};

export default GridElements;
