const students = [];

export function addStudent(student) {
  if (!student || !student.id || !student.name) throw new Error("Dados inválidos");
  if (students.find(s => s.id === student.id)) throw new Error("ID duplicado");
  students.push({ ...student, grades: [] });
}

export function editStudentName(id, newName) {
  const student = students.find(s => s.id === id);
  if (!student) throw new Error("Aluno não encontrado");
  student.name = newName;
}

export function removeStudent(id) {
  const index = students.findIndex(s => s.id === id);
  if (index === -1) throw new Error("Aluno não encontrado");
  students.splice(index, 1);
}

export function getAllStudents() {
  return [...students];
}

export function getStudentByName(name) {
  return students.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
}

export function getStudentById(id) {
  return students.find(s => s.id === id);
}

export function resetStudents() {
  students.length = 0;
}
