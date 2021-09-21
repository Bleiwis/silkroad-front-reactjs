import { Button, Grid, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { register } from "./redux/actions/user.actions";
function App() {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(register(data));
  return (
    <Grid container direction="column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item md={6}>
          <Controller
            render={({ field }) => <TextField {...field} />}
            name="user"
            control={control}
          />
        </Grid>
        <Grid item md={6}>
          <Controller
            render={({ field }) => <TextField {...field} />}
            name="password"
            control={control}
          />
        </Grid>
        <Button type="submit" onClick={onSubmit}>
          Registrar
        </Button>
      </form>
    </Grid>
  );
}

export default App;
