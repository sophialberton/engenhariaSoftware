import { calculateAverage } from './grades.js';
import { getAllStudents } from './students.js';

export function getStatusByAverage(average) {
  if (average >= 7) return "Aprovado";
  if (average >= 5) return "Recuperação";
  return "Reprovado";
}

export function getPerformanceLabel(average) {
  if (average >= 9) return "Excelente";
  if (average >= 7) return "Bom";
  if (average >= 5) return "Regular";
  return "Ruim";
}

export function generateReport(studentId) {
  const average = calculateAverage(studentId);
  return {
    average,
    status: getStatusByAverage(average),
    performance: getPerformanceLabel(average)
  };
}

export function filterByPerformance(label) {
  return getAllStudents().filter(s => {
    const avg = calculateAverage(s.id);
    return getPerformanceLabel(avg) === label;
  });
}
