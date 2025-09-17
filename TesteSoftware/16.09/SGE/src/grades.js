import { getStudentById } from './students.js';

export function addGrade(studentId, grade) {
  if (grade < 0 || grade > 10) throw new Error("Nota inválida");
  const student = getStudentById(studentId);
  if (!student) throw new Error("Aluno não encontrado");
  student.grades.push(grade);
}

export function removeGrade(studentId, index) {
  const student = getStudentById(studentId);
  if (!student || index < 0 || index >= student.grades.length) throw new Error("Nota não encontrada");
  student.grades.splice(index, 1);
}

export function getGrades(studentId) {
  const student = getStudentById(studentId);
  if (!student) return [];
  return [...student.grades];
}

export function getGradesByCategory(studentId, categoryFn) {
  const student = getStudentById(studentId);
  if (!student) return [];
  return student.grades.filter(categoryFn);
}

export function calculateAverage(studentId) {
  const grades = getGrades(studentId);
  if (grades.length === 0) return 0;
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function calculateWeightedAverage(studentId) {
  const student = getStudentById(studentId);
  if (!student || student.grades.length === 0) return 0;
  let total = 0, weights = 0;
  student.grades.forEach((grade, index) => {
    const weight = index + 1;
    total += grade * weight;
    weights += weight;
  });
  return total / weights;
}
