import Image from "next/image";
import styles from "./page.module.css";

import Counter from "@/components/Counter";
import Animate from "@/components/Animate";
import AnimateIn from "@/components/AnimateIn";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <AnimateIn>
          <h1>Dan tries Next</h1>
        </AnimateIn>

        <Counter />
        <Animate />
      </div>
    </main>
  );
}
