import React from "react";
import { Header, Footer } from "../components";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: "#333",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

export const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
