import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
const tileData = [
  {
    img: "https://t4.ftcdn.net/jpg/02/52/80/65/360_F_252806534_HkpmruoDjSPwXx4X9y4Lht8WBmj9GfEN.jpg",
    title: "Dark Choclate",
    price: "Rs. 500",
  },
  {
    img: "https://cdn.w600.comps.canstockphoto.com/black-forest-cake-isolated-on-white-pictures_csp70703889.jpg",
    title: "Black Forest",
    featured: true,
    price: "Rs. 500",
  },
  {
    img: "https://lh3.googleusercontent.com/proxy/x6bynAkQLtpJqw0OCddQ6ahucYkdreCFRTZgrr5FZr1W13E00_zVjx5syulR9TvzbRBYtBn3Z-RGXziQgCFj90wdqFSbu2brm-HZqicamGI7p7TSo9nNBGFC9aNb60MwjOado9-7YjuoM0Fq0y72k_zWElo6sUOjnvKbVJK4",
    title: "Fresh Fruit",
    featured: true,
    price: "Rs. 500",
  },
  {
    img: "https://s1.1zoom.me/big0/748/Sweets_Cakes_White_background_Design_549845_1280x839.jpg",
    title: "Butterscotch ",
    price: "Rs. 500",
  },

  {
    img: "https://st2.depositphotos.com/1013372/42144/i/1600/depositphotos_421441284-stock-photo-almond-coffee-cake-white-background.jpg",
    title: "Coffee Cake",
    price: "Rs. 500",
  },
  {
    img: "https://media.istockphoto.com/photos/isolated-white-strawberry-cake-on-a-white-background-picture-id521425622",
    title: "Strawberry Cake",
    price: "Rs. 500",
  },
  {
    img: "https://t4.ftcdn.net/jpg/02/12/40/85/360_F_212408529_OyXAQS7a7DIGgKAbbS2Mr84QAZ7eyCND.jpg",
    title: "Oreo Cake",
    price: "Rs. 500",
  },
  {
    img: "https://img.delicious.com.au/qPJoguzy/del/2015/10/white-chocolate-truffle-cake-13633-1.jpg",
    title: "White Choclate Truffle",
    price: "Rs. 500",
  },
  {
    img: "https://thumbs.dreamstime.com/b/pineapple-cake-isolated-white-background-food-delicious-desert-sao-paulo-brazil-pineapple-cake-sao-paulo-brazil-130876428.jpg",
    title: "Pineapple ",
    price: "Rs. 550",
  },
  {
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F07%2F15%2Fmint-chocolate-ice-cream-cake-50400000114541-xl.jpg&q=85",
    title: "After Eight",
    price: "Rs. 500",
  },
  {
    img: "data:image/jpeg;base64,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",
    title: "Vanilla",
    price: "Rs. 500",
  },
  {
    img: "https://res.cloudinary.com/hksqkdlah/image/upload/24625_sfs-gac-burnt-almond-cake-8.jpg",
    title: "Almond Cake",
    price: "Rs. 450",
  },
  {
    img: "https://www.goodfoodfun.com/wp-content/uploads/2017/02/tutti-frutti-cakes-1.jpg",
    title: "Tooty fruity",
    price: "Rs. 350",
  },
  {
    img: "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18234125/AbChoc_FlourlessMarbleCake-main.jpg",
    title: "Marbel cake",
    price: "Rs. 450",
  },
  {
    img: "https://www.goodfoodfun.com/wp-content/uploads/2017/02/tutti-frutti-cakes-1.jpg",
    title: "Tooty fruity",
    price: "Rs. 350",
  },
  {
    img: "https://res.cloudinary.com/hksqkdlah/image/upload/24625_sfs-gac-burnt-almond-cake-8.jpg",
    title: "Almond Cake",
    price: "Rs. 450",
  },
  {
    img: "https://www.goodfoodfun.com/wp-content/uploads/2017/02/tutti-frutti-cakes-1.jpg",
    title: "Tooty fruity",
    price: "Rs. 350",
  },
  {
    img: "https://www.goodfoodfun.com/wp-content/uploads/2017/02/tutti-frutti-cakes-1.jpg",
    title: "Tooty fruity",
    price: "Rs. 350",
  },
];
export default tileData;
