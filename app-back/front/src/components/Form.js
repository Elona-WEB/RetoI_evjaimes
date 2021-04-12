import useForm from "./customHooks";
import * as Joi from "joi";

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  company: Joi.string().min(3).required(),
  salary: Joi.string().min(3).required(),
  city: Joi.string().min(3).required(),
});

function Form() {
  const { handleSubmit, handleInputChange } = useForm(schema);
  return (
    <div>
      <h1>Submit a job here!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            autoComplete="password"
          />
        </div>

        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            onChange={handleInputChange}
            autoComplete="password"
          />
        </div>

        <div>
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            onChange={handleInputChange}
            autoComplete="password"
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleInputChange}
            autoComplete="password"
          />
        </div>
        <button type="submit">Submit job!</button>
      </form>
    </div>
  );
}

export default Form;
