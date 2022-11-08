import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function AdsCard(props) {
  let { imageUrl, companyName, headline, primaryText, companyUrl } = props;

  let arr = imageUrl.split("/");
  let potentialIndex = -1;
  arr.forEach((v, i) => {
    if (v == "d") {
      potentialIndex = i + 1;
    }
  });

  if (
    potentialIndex != -1 &&
    potentialIndex < arr.length &&
    potentialIndex + 1 < arr.length &&
    arr[potentialIndex + 1].includes("view")
  ) {
    imageUrl =
      "https://drive.google.com/uc?export=view&id=" + arr[potentialIndex];
  }
  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {headline}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {companyName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {primaryText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>{openInNewTab(companyUrl)}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
