import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
// import classes from "./styles.module.scss";

import tileData, { useStyles } from "./tileData";
export interface TileDataProps {
  img: string;
  title: string;
  price: string;
  category: string;
}
export const CardHolder = (props: { value: TileDataProps }) => {
  const classes = useStyles();
  return (
    <Grid direction="row" key={props.value.title} item>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.value.title.charAt(0)}
            </Avatar>
          }
          title={props.value.title}
          subheader="Vegetarian Half KG"
        />
        <CardMedia
          className={classes.media}
          image={props.value.img}
          title={props.value.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.value.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    </Grid>
  );
};
export const MenuList = (props: { passedTileData: TileDataProps[] }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container className={classes.inner_root} spacing={3}>
            {props.passedTileData?.map((value: TileDataProps) => (
              <CardHolder value={value}></CardHolder>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
