import { addStudent, resetStudents, getAllStudents } from './students.js';
import { exportStudentsToJSON, importStudentsFromJSON } from './utils.js';

describe('Funções Utilitárias de Importação e Exportação', () => {
  beforeEach(() => {
    resetStudents();
  });

  test('Deve exportar os alunos para um formato JSON', () => {
    addStudent({ id: 1, name: 'Ricardo' });
    const json = exportStudentsToJSON();
    const expectedJson = JSON.stringify([{ id: 1, name: 'Ricardo', grades: [] }], null, 2);
    expect(json).toBe(expectedJson);
  });

  test('Deve importar alunos de um JSON', () => {
    const studentsData = [{ id: 10, name: 'Julia', grades: [10, 9] }];
    const json = JSON.stringify(studentsData);
    importStudentsFromJSON(json);
    const students = getAllStudents();
    expect(students).toHaveLength(1);
    expect(students[0].name).toBe('Julia');
    expect(students[0].grades).toEqual([10, 9]);
  });

  test('Deve lançar erro ao importar JSON inválido', () => {
    const invalidJson = '{"invalid": true}';
    expect(() => importStudentsFromJSON(invalidJson)).toThrow('Erro ao importar JSON: Formato inválido');
  });
});