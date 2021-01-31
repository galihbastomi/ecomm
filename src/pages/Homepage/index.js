import React from "react";
import Grid from "@material-ui/core/Grid";
import MainFeatured from "./MainFeatured";
import CardPreview from "./Card";

export default function Homepage() {
    const checked = true;
  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <MainFeatured />
      </Grid>
      <Grid item xs={12} sm={6}>
        
        <CardPreview url="https://source.unsplash.com/featured/?travel" itemUrl="/men" alt="men"/>
      </Grid>
      <Grid item xs={12} sm={6}>
      
        <CardPreview url="https://source.unsplash.com/featured/?travel" itemUrl="/women" alt="women" />
      </Grid>
    </Grid>
  );
}