import { Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  textfield: {
    backgroundColor: "#121214",
    color: "#FFF !important",
  },
  rootLogo: {
    width: "100%",
    textAlign: "center",
    marginBottom: "5vh",
  },
  logo: {
    fontStyle: "normal",
    fontSize: "5rem !important",
    lineHeight: "4rem !important",
    letterSpacing: "-0.072em !important",
    background: "linear-gradient(90deg, #32289B 1.59%, #8257e5 96.82%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
}));

export default useStyles;
