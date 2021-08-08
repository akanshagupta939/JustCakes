import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
export const Accordion = withStyles({
  root: {
    borderRadius: "10px",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

export const AccordionSummary = withStyles({
  root: {
    borderRadius: "10px",
    borderBottom: "1px rgba(0, 0, 0, .125)",
    marginBottom: -1,
    backgroundColor: "#faebd7",
    minHeight: 66,
    fontFamily: "OldStandardTT-Regular, Arial, sans-serif",
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
      justifyContent: "center",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export const useStyles = makeStyles((theme) => ({
  typography: {
    body2: {
      fontFamily: "OldStandardTT-Regular, Arial, sans-serif",
    },
  },
  root: {
    flexGrow: 1,
    position: "relative",
    width: "100%",
    height: "100%",
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
  imgLocation: {
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
    fontFamily: "OldStandardTT-Regular, Arial, sans-serif",
    backgroundColor: "#e49b0f",
  },
}));

export const tileData = [
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/Chocolate_Truffel.jpg",
    title: "Dark Choclate Truffle",
    price: "Rs. 650",
    category: "Chocolate",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/Chocolate_Cake.png",
    title: "Chocolate Cake",
    price: "Rs. 500",
    category: "Chocolate",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/Chocolate_crunch.jpg",
    title: "Chocolate Crunch",
    price: "Rs. 550",
    category: "Chocolate",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/Fruit_cake.jpg  ",
    title: "Fresh Fruit",
    price: "Rs. 650",
    category: "Fruit",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: " https://d2ubpjsi0v2oh7.cloudfront.net/Butterscotch.jpg",
    title: "Butterscotch ",
    price: "Rs. 600",
    category: "Special",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },

  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/Coffee_Cake.jpg",
    title: "Coffee Cake",
    price: "Rs. 500",
    category: "Chocolate",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/Strawberry_cake.jpg",
    title: "Strawberry Cake",
    price: "Rs. 500",
    category: "Fruit",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/Oreo_Cake.jpg",
    title: "Oreo Cake",
    price: "Rs. 550",
    category: "Chocolate",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation:
      "https://d2ubpjsi0v2oh7.cloudfront.net/white+chocolate+truffles.jpeg",
    title: "White Choclate Truffle",
    price: "Rs. 650",
    category: "Chocolate",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/pineapple.jpg",
    title: "Pineapple ",
    price: "Rs. 550",
    category: "Fruit",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/after_eight.jpg",
    title: "After Eight",
    price: "Rs. 750",
    category: "Chocolate",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/vanilla_cake.jpg",
    title: "Vanilla",
    price: "Rs. 400",
    category: "Special",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/Almond_Cake.jpg",
    title: "Almond Cake",
    price: "Rs. 450",
    category: "Dry",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/tutti_frutti_cake.jpg",
    title: "Tooty fruity",
    price: "Rs. 350",
    category: "Dry",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/Marble_cake.jpg",
    title: "Marble cake",
    price: "Rs. 450",
    category: "Dry",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation: "https://d2ubpjsi0v2oh7.cloudfront.net/Suji_cake.jpg",
    title: "Suji Cake",
    price: "Rs. 350",
    category: "Dry",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
  {
    imgLocation:
      "https://d2ubpjsi0v2oh7.cloudfront.net/Chocolate_atta_walnut.jpg",
    title: "Chocolate Attta Walnut Cake",
    price: "Rs. 550",
    category: "Dry",
    description:
      "Meet our newest specialty cake - The Chocolate Vegan. A Vegan Friendly (VF) Chocolate flavoured cake with Chocolate (VF) buttercream and chocolate sprinkles (VF) at the base.",
    celebration:
      "The perfect Celebration Cake for Birthdays, Bridal and Baby Showers.",
    sizeDescription:
      "Cake pictured is 6 inches in diameter and serves approx 10-20 guests.",
  },
];
export default tileData;
