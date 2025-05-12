import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import StudentList from "./components/StudentList";
import Dashboard from "./components/Dashboard";
import { Student } from "./types";

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const tiers = {
    "Tier 1": { amount: 10000, interestRate: 0.05 },
    "Tier 2": { amount: 20000, interestRate: 0.1 },
    "Tier 3": { amount: 30000, interestRate: 0.2 },
  };

  const addStudent = (student: Student) => {
    if (students.length >= 12) {
      alert("Group is full!");
      return;
    }
    setStudents([...students, student]);
  };

  const removeStudent = (index: number) => {
    const newList = students.filter((_, i) => i !== index);
    setStudents(newList);
  };

  return (
    <div className="App">
      <h1>Savings Group</h1>
      <RegistrationForm addStudent={addStudent} tiers={tiers} />
      <Dashboard students={students} />
      <StudentList students={students} removeStudent={removeStudent} />
    </div>
  );
};

export default App;
