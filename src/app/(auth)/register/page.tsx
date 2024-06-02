"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import styles from './page.module.css';

//Kayit ol icin gerekli olan degiskenler tanimlamalar yapilarak yonlendirme islemleri yabildi.
const Kayit = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const router = useRouter();

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     try {
       await axios.post("http://localhost:5000/api/auth/register", {
         name,
         email,
         password,
         });
         router.push("/login");
         } catch (error) {
         console.log(error);
        }
      };
  //Kayit Ol Sayfasi Template ve kontrolü saglandi.
  return (
    
   
    <form onSubmit={handleSubmit} className={styles.register}>
      <div>
        <label>Kullanici Adi:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}required className={styles.input}/>
    </div>
    <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required className={styles.input}/>
    </div>
    <div>
      <label>Şifre:</label>
      <input
        type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        required className={styles.input}
      />
    </div>
    <button type="submit" className={styles.button}>Kayit Ol</button>
    <p className={styles.parag}>Hesabiniz Var mi? <Link className={styles.link} href="/login">Giriş Yap</Link></p>
    
  </form>
   
  );
};

export default Kayit;
