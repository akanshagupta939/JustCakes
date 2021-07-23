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
import FavoriteIcon from "@material-ui/icons/Favorite";
// import classes from "./styles.module.scss";

import tileData, { useStyles } from "./tileData";

export const MenuList = () => {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
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
                    // action={
                    //   <IconButton aria-label="settings">
                    //     <MoreVertIcon />
                    //   </IconButton>
                    // }
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
                    {/* <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton> */}
                  </CardActions>
                  {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>{value.price}</Typography>
                      <Typography paragraph>{value.title}</Typography>
                      <Typography paragraph>{value.title}</Typography>
                      <Typography>{value.title}</Typography>
                    </CardContent>
                  </Collapse> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
