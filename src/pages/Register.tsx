import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useState } from "react";

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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "300px",
    margin: "0 auto",
  },
}));

export const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <FormControl style={{ width: "100%" }}>
        <InputLabel className={classes.input_label} htmlFor="my-input">
          Name
        </InputLabel>
        <Input
          id="my-input"
          className={classes.input}
          value={inputValue.name}
          onChange={(e) =>
            setInputValue({ ...inputValue, name: e.target.value })
          }
        />
      </FormControl>
      <FormControl style={{ width: "100%" }}>
        <InputLabel className={classes.input_label} htmlFor="my-input">
          Email address
        </InputLabel>
        <Input
          id="my-input"
          className={classes.input}
          aria-describedby="my-helper-text"
          value={inputValue.email}
          onChange={(e) =>
            setInputValue({ ...inputValue, email: e.target.value })
          }
        />
        <FormHelperText id="my-helper-text" className={classes.input_helper}>
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl style={{ width: "100%" }}>
        <InputLabel className={classes.input_label} htmlFor="my-input">
          Password
        </InputLabel>
        <Input
          id="my-input"
          className={classes.input}
          value={inputValue.password}
          onChange={(e) =>
            setInputValue({ ...inputValue, password: e.target.value })
          }
        />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
};
