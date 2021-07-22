import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

interface TileData {
  image: string;
  titled: string;
  price: string;
  featured?: boolean;
}
interface MenuListProps {
  tileData: TileData;
}

const tileData = [
  {
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    title: "Alyce Bass",
    price: "Rs. 500",
  },
  {
    img: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82",
    title: "Sabiha Plummer",
    featured: true,
    price: "Rs. 500",
  },
  {
    img: "https://uifaces.co/our-content/donated/KtCFjlD4.jpg",
    title: "Arthur Stewart",
    featured: true,
    price: "Rs. 500",
  },
  {
    img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    title: "Hebe Harwood",
    price: "Rs. 500",
  },

  {
    img: "https://uifaces.co/our-content/donated/n4Ngwvi7.jpg",
    title: "Keanu Hood",
    price: "Rs. 500",
  },
  {
    img: "https://uifaces.co/our-content/donated/gPZwCbdS.jpg",
    title: "Leonardo Davila",
    price: "Rs. 500",
  },
  {
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "Hayleigh Chapman",
    price: "Rs. 500",
  },
  {
    img: "https://images.pexels.com/photos/1394499/pexels-photo-1394499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Reema English",
    price: "Rs. 500",
  },
  {
    img: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f05c14dd4db49f08a789e6449604c490",
    title: "Atticus Aldred",
    price: "Rs. 500",
  },
  {
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    title: "Cobie Morin",
    price: "Rs. 500",
  },
  {
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "Corinne Mcghee",
    price: "Rs. 500",
  },
  {
    img: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "Ali Hendricks",
    price: "Rs. 500",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    top: 0,
    bottom: 0,
    fontFamily: "OldStandardTT-Regular, Arial, sans-serif",
  },
  inner_root: {
    justifyContent: "center",
  },
  paper: {
    height: 300,
    width: 350,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "60%",
    paddingLeft: "10%",
  },
  control: {
    bottom: 0,
    textAlign: "center",
    padding: "10%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#FBBF24",
  },
}));

export const MenuList = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(tileData);
  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container className={classes.inner_root} spacing={3}>
            {tileData.map((value) => (
              <Grid direction="row" key={value.title} item>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {value.title.charAt(0)}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={value.title}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    className={classes.media}
                    image={value.img}
                    title={value.title}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {value.price}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    {/* <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton> */}
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>{value.price}</Typography>
                      <Typography paragraph>{value.title}</Typography>
                      <Typography paragraph>{value.title}</Typography>
                      <Typography>{value.title}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
