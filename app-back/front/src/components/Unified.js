import Form from "./Form";
import Jobs from "./Jobs";

function Unified() {
  return (
    <div className="row">
      <div className="col">
        <Form />
      </div>
      <div className="col-8">
        <h1>Lista de empleos</h1>
        <Jobs />
      </div>
    </div>
  );
}

export default Unified;
