import "./App.css";
import FormikForm from "./components/FormikForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="p-12 grid justify-center items-center m-12 gap-12">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
