import Link from 'next/link';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
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

        <li className="nav-list">
          <Link href="/clock/todo/api">API</Link>
        </li>
        
        
      </ul>

      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      <Footer />

    </div>
    

      
    );
  }