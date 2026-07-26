import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* handleSubmit validates your inputs before calling onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Register an input */}
        <input defaultValue="test" {...register("example")} />

        {/* Required field */}
        <input {...register("exampleRequired", { required: true })} />

        {/* Error message */}
        {errors.exampleRequired && (
          <span>This field is required</span>
        )}

        <input type="submit" />
      </form>
    </>
  );
}

export default App;