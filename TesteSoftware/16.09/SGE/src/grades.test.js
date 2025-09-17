import { addStudent, resetStudents, getStudentById } from './students.js';
import {
  addGrade,
  removeGrade,
  getGrades,
  calculateAverage,
  calculateWeightedAverage
} from './grades.js';

describe('Gerenciamento de Notas', () => {
  beforeEach(() => {
    resetStudents();
    addStudent({ id: 1, name: 'Carlos' });
  });

  test('Deve adicionar uma nota a um aluno', () => {
    addGrade(1, 8.5);
    const student = getStudentById(1);
    expect(student.grades).toHaveLength(1);
    expect(student.grades[0]).toBe(8.5);
  });

  test('Não deve adicionar nota inválida (menor que 0)', () => {
    expect(() => addGrade(1, -1)).toThrow('Nota inválida');
  });

  test('Não deve adicionar nota inválida (maior que 10)', () => {
    expect(() => addGrade(1, 11)).toThrow('Nota inválida');
  });

  test('Deve remover uma nota', () => {
    addGrade(1, 8);
    addGrade(1, 9);
    removeGrade(1, 0);
    const grades = getGrades(1);
    expect(grades).toHaveLength(1);
    expect(grades[0]).toBe(9);
  });

  test('Deve calcular a média das notas corretamente', () => {
    addGrade(1, 7);
    addGrade(1, 8);
    addGrade(1, 9);
    const average = calculateAverage(1);
    expect(average).toBe(8);
  });

  test('Deve retornar 0 como média se não houver notas', () => {
    const average = calculateAverage(1);
    expect(average).toBe(0);
  });

  test('Deve calcular a média ponderada corretamente', () => {
    addGrade(1, 7);
    addGrade(1, 8);
    // Média: (7*1 + 8*2) / (1+2) = (7 + 16) / 3 = 23 / 3
    const weightedAverage = calculateWeightedAverage(1);
    expect(weightedAverage).toBeCloseTo(7.67);
  });
});