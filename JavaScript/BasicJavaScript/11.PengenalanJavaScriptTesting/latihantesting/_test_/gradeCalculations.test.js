const { averageExams, isStudentPassExam } = require("../gradeCalculations");

/*cara pertama tanpa grouping*/
// test("it should return exact average", () => {
//   const listValueOfExams = [80, 100, 100, 80];
//   expect(averageExams(listValueOfExams)).toEqual(90);
// });

/*cara kedua menggunakan groping*/
describe("grade calculations", () => {
  test("it should return exact average", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
  });
  test("it should return exam passed status", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true);
  });

  test("it should return exam failed status", () => {
    const listValueOfExams = [50, 40, 70, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(false);
  });
});

/*menjalankan cara pertama hidupkan coding , matikan cara kedua lalu ketikan
dalam terminal $npm run test
JANGAN LUPA untuk menghapus / dapat otomatis menyesuaikan tanpa DIHAPUS
 parameter(isStudentPassExam) pada saat 
menjalankan cara pertama */
