import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { amber } from "@material-ui/core/colors";
import { useStyles } from "./tileData";
import {
  DialogContent,
  DialogTitle,
  Dialog,
  IconButton,
  Link,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.scss";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export interface TileDataProps {
  imgLocation: string;
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
  const textTitle = (val: string, type: string) => {
    return (
      <Typography variant="h5" component="h2" gutterBottom>
        <p className={type === "header" ? styles.card : styles.card_subHeader}>
          {val}
        </p>
      </Typography>
    );
  };
  return (
    <>
      <Grid xs={12} md={2} key={props.value.title} item>
        <Card className={classes.root}>
          <div onClick={() => setOpen(true)}>
            <CardHeader
              className={styles.card}
              title={textTitle(props.value.title, "header")}
              subheader={
                !props.value.category.includes("Bento")
                  ? textTitle("Vegetarian Half KG", "subheader")
                  : ""
              }
            />
            <CardMedia
              className={classes.media}
              image={props.value.imgLocation}
              title={props.value.title}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                <p className={styles.card_subHeader}>
                  {!props.value.category.includes("Bento")
                    ? props.value.price
                    : "Price on request"}
                </p>
              </Typography>
            </CardContent>
          </div>
          <CardActions disableSpacing>
            <Link rel="noopener" href="https://www.justcakes-gurgaon.com/order">
              <IconButton aria-label="share">
                <ShoppingBasketIcon style={{ color: amber[500] }} />
              </IconButton>
            </Link>
          </CardActions>
        </Card>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle id={props.value.title}>
            <p className={styles.dialog_title}> {props.value.title}</p>
          </DialogTitle>
          <DialogContent dividers>
            <CardMedia
              className={classes.media}
              image={props.value.imgLocation}
              title={props.value.title}
            />
            &nbsp;
            <Typography variant="h5" component="h2" gutterBottom>
              <p className={styles.description}> {props.value.description}</p>
            </Typography>
            &nbsp;
            <Typography variant="h5" component="h2" gutterBottom>
              <p className={styles.celebration}> {props.value.celebration}</p>
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              <p className={styles.sizeDescription}>
                {props.value.sizeDescription}
              </p>
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              <p className={styles.dialog_footer}>
                *Customizable according to your requirements.
              </p>
            </Typography>
          </DialogContent>
        </Dialog>
      </Grid>
    </>
  );
};
export const MenuList = (props: { passedTileData: TileDataProps[] }) => {
  return (
    <>
      <Grid style={{ justifyContent: "center" }} container spacing={2}>
        {props.passedTileData?.map((value: TileDataProps) => (
          <CardHolder key={uuidv4()} value={value}></CardHolder>
        ))}
      </Grid>
    </>
  );
};
