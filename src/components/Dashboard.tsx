import React from "react";
import { Student } from "../types";

interface Props {
  students: Student[];
}

const Dashboard: React.FC<Props> = ({ students }) => {
  const total = students.reduce((sum, s) => sum + s.amount, 0);

  return (
    <div>
      <h2>Savings Dashboard</h2>
      <p>Total Group Savings: ₦{total.toLocaleString()}</p>
    </div>
  );
};

export default Dashboard;
