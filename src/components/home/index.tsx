import React from "react";
import styles from "./styles.module.scss";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Paper, Theme } from "@material-ui/core";
import image from "./JC.jpg";

interface ResumeDate {
  name: string;
  role: string;
  experience: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: "#ffbf00",
    },
    paper: {
      height: "100%",
      width: "100%",
    },
  })
);
//"https://t4.ftcdn.net/jpg/02/52/80/65/360_F_252806534_HkpmruoDjSPwXx4X9y4Lht8WBmj9GfEN.jpg"
export const Home = (resumeData: ResumeDate) => {
  const classes = useStyles();
  return (
    <div className={styles.outer_container}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className={styles.body}>
              <p className={styles.textStyling}>Just Cakes</p>
              <p className={styles.textStyling_subheader}>Your home bakery</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              className={styles.imgeStyling}
              alt="Swiggy link to Just Cakes"
              src={image}
            />
          </Grid>
        </Grid>
      </div>
      {/* <div className={styles.body}>
            <p className={styles.textStyling}>Just Cakes</p>
            <p className={styles.textStyling_subheader}>Your home bakery</p>
          </div>
          <div className={styles.body}>
            <p className={styles.textStyling}>Just Cakes</p>
            <p className={styles.textStyling_subheader}>Your home bakery</p>
          </div> */}
      {/* </Grid>
      </Grid> */}
    </div>
  );
};
