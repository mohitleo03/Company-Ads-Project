import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AdsCard from "./AdsCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MyGrid(props) {
  const { adsList } = props;
  return (
    <Box sx={{ flexGrow: 1, margin:4}}>
      <Grid container spacing={2}>
        {
        adsList.map((advertisement, index) => {
          return <AdsCard
            companyName={advertisement["companyName"]}
            headline={advertisement["headline"]}
            imageUrl={advertisement["imageUrl"]}
            primaryText={advertisement["primaryText"]}
            companyUrl = {advertisement["companyUrl"]}
            key={index}
          />;
        })}
      </Grid>
    </Box>
  );
}
