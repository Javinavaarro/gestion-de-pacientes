import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store/store"


type PatientDetailsProps ={
    patient: Patient
}


export default function PatientDetails({patient}: PatientDetailsProps) {

  const {deletePatient, getPatientByID} = usePatientStore()

  return (
    <div className="mx-5 my-10 py-5 px-5 bg-white shadow-md rounded-xl">
      <PatientDetailItem label='ID' data={patient.id}/>
      <PatientDetailItem label='Nombre' data={patient.name}/>
      <PatientDetailItem label='Propietario' data={patient.caretaker}/>
      <PatientDetailItem label='Email' data={patient.email}/>
      <PatientDetailItem label='Fecha de alta' data={patient.date.toString()}/>
      <PatientDetailItem label='Síntomas' data={patient.symptoms}/>

      <div className="flex flex-col md:flex-row gap-3 justify-between mt-10">
        <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => getPatientByID(patient.id)}>Editar</button>
        <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={() => deletePatient(patient.id)}
                >Eliminar</button>
      </div>
    </div>
  )
}
