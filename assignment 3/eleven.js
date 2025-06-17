function calculateStudentAverages(students) {
  // Use the map method to iterate over each student and transform the data.
  const studentsWithAverages = students.map(student => {.
    const studentName = Object.keys(student)[0];
    const subjects = student[studentName]; // Get the subjects object for the current student.

    const scores = Object.values(subjects);


    const totalScore = scores.reduce((sum, score) => sum + score, 0);

   
    const average = scores.length > 0 ? totalScore / scores.length : 0;

    
    return {
      [studentName]: {
        average: average
      }
    };
  });

  return studentsWithAverages;
}


const studentScoresInput = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];


const studentAveragesOutput = calculateStudentAverages(studentScoresInput);


console.log(studentAveragesOutput);