import { addStudent, resetStudents } from './students.js';
import { addGrade } from './grades.js';
import {
  getStatusByAverage,
  getPerformanceLabel,
  generateReport,
  filterByPerformance
} from './evaluation.js';

describe('Avaliação de Alunos', () => {
  beforeEach(() => {
    resetStudents();
    addStudent({ id: 1, name: 'Letícia' });
    addStudent({ id: 2, name: 'Pedro' });
  });

  test('Deve retornar "Aprovado" para média >= 7', () => {
    expect(getStatusByAverage(7)).toBe('Aprovado');
    expect(getStatusByAverage(8.5)).toBe('Aprovado');
  });

  test('Deve retornar "Recuperação" para média >= 5 e < 7', () => {
    expect(getStatusByAverage(5)).toBe('Recuperação');
    expect(getStatusByAverage(6.9)).toBe('Recuperação');
  });

  test('Deve retornar "Reprovado" para média < 5', () => {
    expect(getStatusByAverage(4.9)).toBe('Reprovado');
  });

  test('Deve retornar o rótulo de performance correto', () => {
    expect(getPerformanceLabel(9.5)).toBe('Excelente');
    expect(getPerformanceLabel(8)).toBe('Bom');
    expect(getPerformanceLabel(6)).toBe('Regular');
    expect(getPerformanceLabel(4)).toBe('Ruim');
  });

  test('Deve gerar um relatório do aluno', () => {
    addGrade(1, 9);
    addGrade(1, 10);
    const report = generateReport(1);
    expect(report).toEqual({
      average: 9.5,
      status: 'Aprovado',
      performance: 'Excelente',
    });
  });

  test('Deve filtrar alunos por performance', () => {
    addGrade(1, 9); // Excelente
    addGrade(2, 5); // Regular
    const excellentStudents = filterByPerformance('Excelente');
    expect(excellentStudents).toHaveLength(1);
    expect(excellentStudents[0].name).toBe('Letícia');
  });
});