"use client";
import { useState, useEffect } from "react";
import axios from "axios";
 import { useSelector } from "react-redux";
 import { RootState } from "../store";

const Borc = () => {
  const [debts, setDebts] = useState<any[]>([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const user = useSelector((state:RootState)=>state.user.user);

  useEffect(() => {
     if (user) {
       fetchDebts();
     }
   }, [user]);
  const fetchDebts = async () => {
    const response = await axios.get(`http://localhost:5000/api/debts/${user.id}`);
    setDebts(response.data);
  };

  const addDebt = async (e: React.FormEvent) => {
    e.preventDefault();
    const newDebt = { amount, description };
    await axios.post('http://localhost:5000/api/debts', newDebt);
    fetchDebts();
    setAmount("");
    setDescription("");
  };
  return (
    <div>
      <h1>Borclar</h1>
      <form onSubmit={addDebt}>
        <div>
          <label>Miktar</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Aciklama</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Borc Ekle</button>
      </form>
      <ul>
        {debts.map((debt: any) => (
          <li key={debt.id}>
            {debt.amount}-{debt.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Borc;
