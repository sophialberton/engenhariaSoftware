import {
  addStudent,
  editStudentName,
  removeStudent,
  getAllStudents,
  getStudentByName,
  getStudentById,
  resetStudents
} from './students.js';

describe('Gerenciamento de Alunos', () => {
  beforeEach(() => {
    resetStudents();
  });

  test('Deve adicionar um novo aluno', () => {
    addStudent({ id: 1, name: 'João' });
    const students = getAllStudents();
    expect(students).toHaveLength(1);
    expect(students[0]).toEqual({ id: 1, name: 'João', grades: [] });
  });

  test('Não deve adicionar aluno com ID duplicado', () => {
    addStudent({ id: 1, name: 'João' });
    expect(() => addStudent({ id: 1, name: 'Maria' })).toThrow('ID duplicado');
  });

  test('Deve editar o nome de um aluno', () => {
    addStudent({ id: 1, name: 'João' });
    editStudentName(1, 'João Silva');
    const student = getStudentById(1);
    expect(student.name).toBe('João Silva');
  });

  test('Deve remover um aluno', () => {
    addStudent({ id: 1, name: 'João' });
    removeStudent(1);
    const students = getAllStudents();
    expect(students).toHaveLength(0);
  });

  test('Deve retornar todos os alunos', () => {
    addStudent({ id: 1, name: 'João' });
    addStudent({ id: 2, name: 'Maria' });
    const students = getAllStudents();
    expect(students).toHaveLength(2);
  });

  test('Deve encontrar um aluno pelo nome', () => {
    addStudent({ id: 1, name: 'Ana' });
    addStudent({ id: 2, name: 'Mariana' });
    const found = getStudentByName('ana');
    expect(found.length).toBe(2);
    expect(found[0].name).toBe('Ana');
  });

  test('Deve encontrar um aluno pelo ID', () => {
    addStudent({ id: 1, name: 'João' });
    const student = getStudentById(1);
    expect(student).toBeDefined();
    expect(student.name).toBe('João');
  });

  test('Deve limpar a lista de alunos', () => {
    addStudent({ id: 1, name: 'João' });
    resetStudents();
    const students = getAllStudents();
    expect(students.length).toBe(0);
  });
});