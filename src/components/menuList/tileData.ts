import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
export const Accordion = withStyles({
  typography: {
    body2: {
      fontFamily: "OldStandardTT-Regular, Arial, sans-serif",
    },
  },
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
  typography: {
    body2: {
      fontFamily: "OldStandardTT-Regular, Arial, sans-serif",
    },
  },
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
  typography: {
    body2: {
      fontFamily: "OldStandardTT-Regular, Arial, sans-serif",
    },
  },
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
    fontFamily: "OldStandardTT-Regular, Arial, sans-serif",
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
  card: {
    fontFamily: "OldStandardTT-Regular, Arial, sans-serif",
  },
  avatar: {
    fontFamily: "OldStandardTT-Regular, Arial, sans-serif",
    backgroundColor: "#e49b0f",
  },
}));
const tileData = [
  {
    img: "https://t4.ftcdn.net/jpg/02/52/80/65/360_F_252806534_HkpmruoDjSPwXx4X9y4Lht8WBmj9GfEN.jpg",
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
    img: "https://www.pngkit.com/png/detail/945-9458263_chocolate-cakes-white-background.png",
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
    img: "https://cdn.shopify.com/s/files/1/0014/2249/1720/products/MGDCAK2017017_300x300.jpg?v=1533114332",
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
    img: "https://i.pinimg.com/originals/f7/5b/28/f75b289f513f969ac11edba193430ebe.jpg",
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
    img: "https://s1.1zoom.me/big0/748/Sweets_Cakes_White_background_Design_549845_1280x839.jpg",
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
    img: "https://st2.depositphotos.com/1013372/42144/i/1600/depositphotos_421441284-stock-photo-almond-coffee-cake-white-background.jpg",
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
    img: "https://media.istockphoto.com/photos/isolated-white-strawberry-cake-on-a-white-background-picture-id521425622",
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
    img: "https://t4.ftcdn.net/jpg/02/12/40/85/360_F_212408529_OyXAQS7a7DIGgKAbbS2Mr84QAZ7eyCND.jpg",
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
    img: "https://img.delicious.com.au/qPJoguzy/del/2015/10/white-chocolate-truffle-cake-13633-1.jpg",
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
    img: "https://thumbs.dreamstime.com/b/pineapple-cake-isolated-white-background-food-delicious-desert-sao-paulo-brazil-pineapple-cake-sao-paulo-brazil-130876428.jpg",
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
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F07%2F15%2Fmint-chocolate-ice-cream-cake-50400000114541-xl.jpg&q=85",
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
    img: "https://cdn.nohat.cc/thumb/f/720/5228116716814336.jpg",
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
    img: "https://res.cloudinary.com/hksqkdlah/image/upload/24625_sfs-gac-burnt-almond-cake-8.jpg",
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
    img: "https://www.goodfoodfun.com/wp-content/uploads/2017/02/tutti-frutti-cakes-1.jpg",
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
    img: "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18234125/AbChoc_FlourlessMarbleCake-main.jpg",
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
    img: "https://wiselivingmagazine.co.uk/wp-content/uploads/2019/12/Vegan-almond-and-semolina-sugee-cake-main.jpg",
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
    img: "https://food-images.files.bbci.co.uk/food/recipes/chocolate_and_hazelnut_38207_16x9.jpg",
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
