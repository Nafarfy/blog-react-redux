import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return <footer className={classes.footer}>Footer</footer>;
};
