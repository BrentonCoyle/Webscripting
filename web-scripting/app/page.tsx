'use client'; 

import { useState } from 'react';

import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Clock from "../components/Clock";

export default function Home() {

  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());  // Update the time
  };

  return (
    <div>

      <Header />

      <main>
  
        <div style={{ padding: "30px", display: "flex", gap: "20px" }}>
            <Button label="Update Time" color="green" onClick={updateTime} />
        </div>

        <br></br>

        <div>
          <Clock color="blue" time={time} />
        </div>
        
      </main>

      
      <Footer />
    
    </div>
  );
}
