import React from "react";
import { Student } from "../types";

interface Props {
  students: Student[];
  removeStudent: (index: number) => void;
}

const StudentList: React.FC<Props> = ({ students, removeStudent }) => {
  return (
    <div>
      <h2>Members</h2>
      <ul>
        {students.map((s, i) => (
          <li key={i}>
            <strong>{s.name}</strong> - {s.tier}
            <br />
            Saved: ₦{s.amount.toLocaleString()}
            <br />
            Interest: ₦{s.interest.toLocaleString()}
            <br />
            Total: ₦{s.totalWithdrawal.toLocaleString()}
            <br />
            <button onClick={() => removeStudent(i)}>Withdraw</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
