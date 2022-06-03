import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { KeyboardArrowRight } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDesc] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  const radioChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));

      // setTitle("");
      // setDesc("");
    }
  };

  return (
    <div>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          Create a new note
        </Typography>

        <form noValidate autoComplete="off" onSubmit={submitHandler}>
          <TextField
            onChange={titleChangeHandler}
            className={classes.field}
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
            value={title}
          />

          <TextField
            onChange={descChangeHandler}
            className={classes.field}
            label="Note Description"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
            value={details}
          />

          <FormControl className={classes.field} color="secondary">
            <FormLabel>Note Category</FormLabel>
            <RadioGroup onChange={radioChangeHandler} value={category}>
              <FormControlLabel
                value="money"
                control={<Radio color="secondary" />}
                label="Money"
              />
              <FormControlLabel
                value="todos"
                control={<Radio color="secondary" />}
                label="Todos"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio color="secondary" />}
                label="Reminders"
              />
              <FormControlLabel
                value="work"
                control={<Radio color="secondary" />}
                label="Work"
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRight />}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}
