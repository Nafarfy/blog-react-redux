import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#f4f4f4",
  },
  input_label: {
    color: "#f4f4f4",
  },
  input_helper: {
    color: "#fff",
  },
}));

export const Login = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ maxWidth: "300px", margin: "0 auto" }}
    >
      <FormControl style={{ width: "100%" }}>
        <InputLabel className={classes.input_label} htmlFor="my-input">
          Email address
        </InputLabel>
        <Input
          id="my-input"
          className={classes.input}
          aria-describedby="my-helper-text"
        />
        <FormHelperText id="my-helper-text" className={classes.input_helper}>
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl style={{ width: "100%" }}>
        <InputLabel className={classes.input_label} htmlFor="my-input">
          Password
        </InputLabel>
        <Input id="my-input" className={classes.input} />
      </FormControl>
    </Grid>
  );
};
