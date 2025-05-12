import React, { useState } from "react";
import { Student, Tier, TierConfig } from "../types";

interface Props {
  addStudent: (student: Student) => void;
  tiers: { [key: string]: TierConfig };
}

const RegistrationForm: React.FC<Props> = ({ addStudent, tiers }) => {
  const [name, setName] = useState("");
  const [tier, setTier] = useState<Tier | "">("");

  const handleRegister = () => {
    if (!name || !tier) return alert("All fields are required");

    const config = tiers[tier];
    const interest = config.amount * config.interestRate;
    const total = config.amount + interest;

    const newStudent: Student = {
      name,
      tier,
      amount: config.amount,
      interest,
      totalWithdrawal: total,
    };

    addStudent(newStudent);
    setName("");
    setTier("");
  };

  return (
    <div className="section">
      <h2>Register Student</h2>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />
      <select
        value={tier}
        onChange={(e) => setTier(e.target.value as Tier)}
        className="input"
      >
        <option value="">Select Tier</option>
        {Object.entries(tiers).map(([t, val]) => {
          const tierVal = val as TierConfig;
          return (
            <option key={t} value={t}>
              {t} - ₦{tierVal.amount.toLocaleString()}
            </option>
          );
        })}
      </select>
      <button onClick={handleRegister} className="button">
        Register
      </button>
    </div>
  );
};

export default RegistrationForm;
