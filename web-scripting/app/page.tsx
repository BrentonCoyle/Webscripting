'use client';

import { useState } from 'react';
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Clock from "../components/Clock";
import ToDo from "../components/ToDoList";

export default function Home() {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString()); // Update the time
  };

  return (
    <div style={{ textAlign: "center", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <Button label="Update Time" color="green" onClick={updateTime} />
        <Clock color="blue" time={time} />
        <ToDo />
      </main>

      <Footer />
    </div>
  );
}
