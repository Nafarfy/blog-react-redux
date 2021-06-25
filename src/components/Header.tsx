import {
  Button,
  Toolbar,
  ButtonGroup,
  makeStyles,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "sticky",
    top: "0",
    left: "0",
    marginBottom: theme.spacing(6),
    width: "100%",
    background: "#212427",
    boxShadow: "-1px -2px 30px 0px rgba(0, 0, 0, 0.75)",
  },
  header__content: {
    justifyContent: "space-between",
  },
  header__logo: {
    color: "#fff",
  },
  header__signin: {
    "&:hover": {
      background: "#3f51b5",
      color: "#fff",
    },
  },
  header__signup: {
    "&:hover": {
      background: "#f50057",
      color: "#fff",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Container maxWidth="md">
        <Toolbar className={classes.header__content}>
          <Typography className={classes.header__logo}>Logo</Typography>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <Button className={classes.header__signin}>Sign In</Button>
            <Button color="secondary" className={classes.header__signup}>
              Sign Up
            </Button>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </header>
  );
};
