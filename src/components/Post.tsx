import {
  Paper,
  Grid,
  Typography,
  Link,
  Container,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  post: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[800],
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
  },
}));

interface Props {
  post: {
    _id: number;
    title: string;
    description: string;
    postedBy: number;
  };
}

export const Post = ({ post }: Props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper className={classes.post}>
        <Grid container>
          <Grid>
            <div>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
              <Link variant="subtitle1" href="#">
                Link
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
