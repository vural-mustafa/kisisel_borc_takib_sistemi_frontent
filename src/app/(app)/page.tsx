import { useSelector } from "react-redux";
import {RootState} from '../store';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return <main className={styles.card}>Dashborard</main>;
}
