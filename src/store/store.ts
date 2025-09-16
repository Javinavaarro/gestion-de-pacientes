//Zustand state y acciones
import { create } from "zustand"
import type { DraftPatient, Patient } from "../types"
import { v4 as uuidV4 } from "uuid"
import { devtools } from "zustand/middleware"

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientByID: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return {...patient, id: uuidV4()}
}

export const usePatientStore = create<PatientState>()(
    devtools((set)=> ({

        patients: [],
        activeId: '',
        addPatient: (data) => {
            
            set((state) => ({
                patients: [...state.patients, createPatient(data)]
            }))
        },
        deletePatient: (id) => {
            set((state)=>({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
        },
        getPatientByID: (id) => {
            set(()=> ({                 //Sin el state porque no nos importa el state anterior
                activeId: id
            }))
        },
        updatePatient: (data) => {
            set((state)=>({
                patients: state.patients
            }))
        }
    })
))


