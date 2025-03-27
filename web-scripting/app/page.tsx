'use client';

import { useState } from 'react';
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Clock from "../components/Clock";
import ToDo from "../components/ToDoList";
import Link from 'next/link';


export default function Home() {
  

  return (
    <div>
      <Header />
      
      <ul className="navbar">
          
          <li className="nav-list">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-list">
            <Link href="/clock">Clock</Link>
          </li>
          <li className="nav-list">
            <Link href="/clock/todo">Todo List</Link>
          </li>
      </ul>

      <h2>This is Brenton Coyle's React Website For Webscripting</h2>
      <h3>The Diffrent Links Will Take You To Diffrent Stuff He Has Made</h3>

      <Footer />
    </div>

   
  );
}
