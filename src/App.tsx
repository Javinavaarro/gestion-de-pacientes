import PatientForms from "./components/PatientForms"
import PatientList from "./components/PatientList"

function App() {
  

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Gestión de pacientes {''}
          <span className="text-indigo-700">Veterinaria</span>
        </h1>

        <div className="mt-12 md:flex">
          <PatientForms/>
          <PatientList/>

        </div>
      </div>
    </>
  )
}

export default App
