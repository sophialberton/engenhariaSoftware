import { getAllStudents, resetStudents, addStudent } from './students.js';

export function exportStudentsToJSON() {
  return JSON.stringify(getAllStudents(), null, 2);
}

export function importStudentsFromJSON(json) {
  try {
    const data = JSON.parse(json);
    if (!Array.isArray(data)) throw new Error("Formato inválido");
    resetStudents();
    data.forEach(addStudent);
  } catch (err) {
    throw new Error("Erro ao importar JSON: " + err.message);
  }
}
