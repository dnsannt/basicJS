const students = [
    {
      name: 'Harry',
      score: 100,
    },
    {
      name: 'James',
      score: 100,
    },
    {
      name: 'Ron',
      score: 100,
    },
    {
      name: 'Bethy',
      score: 100,
    }
  ];
  
  const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  
  console.log(totalScore);
  
  /**
   * output:
   * 313
   * 
   */