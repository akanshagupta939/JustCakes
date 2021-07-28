import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./tileData";
import { DialogContent, DialogTitle, Dialog } from "@material-ui/core";
import styles from "./styles.module.scss";
export interface TileDataProps {
  img: string;
  title: string;
  price: string;
  category: string;
  description: string;
  celebration?: string;
  sizeDescription?: string;
}

export const CardHolder = (props: { value: TileDataProps }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid direction="row" key={props.value.title} item>
      <Card onClick={() => setOpen(true)} className={classes.root}>
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
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle className={styles.dialog_title} id={props.value.title}>
          <p className={styles.dialog_title}> {props.value.title}</p>
        </DialogTitle>
        <DialogContent dividers>
          <CardMedia
            style={{ fontFamily: "OldStandardTT-Regular, Arial, sans-serif" }}
            className={classes.media}
            image={props.value.img}
            title={props.value.title}
          />
          &nbsp;
          <Typography gutterBottom>{props.value.description}</Typography>
          &nbsp;
          <Typography gutterBottom>{props.value.celebration}</Typography>
          <Typography gutterBottom>{props.value.sizeDescription}</Typography>
        </DialogContent>
      </Dialog>
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
