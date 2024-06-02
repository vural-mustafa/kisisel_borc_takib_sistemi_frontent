"use client";
import { login } from "@/services/auth";
 import { useState } from "react";
 import { loginUser } from "@/app/store/slices/userSlice";
 import { useDispatch } from "react-redux";
 import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
export default () => {
     const [email, setEmail] = useState("");
     const [password , setPassword] = useState("");
     const dispatch = useDispatch;
     const router = useRouter();
  
     const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     const resultAction: any = await dispatch(loginUser({ email, password }));
     if (resultAction.type === "fulfilled") {
     router.push("/dahboard");
    } else {
     console.error(resultAction.payload);
    }
     };

  return (
    <form
      className={styles.login}
        onSubmit={handleSubmit}
    >
      <div>
        <label>Email:</label>
        <input
          className={styles.input}
          type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Şifre:</label>
        <input
          className={styles.input}
          type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Giriş Yap
      </button>
      <p className={styles.parag}>
        Hesabiniz Yok mu?{" "}
        <Link className={styles.link} href="/register">
          Kayit Ol
        </Link>
      </p>
    </form>
  );
};
