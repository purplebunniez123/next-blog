import "./globals.css";
import NavBar from "./components/navbar";
import Link from "next/link";

// export default function RootLayout({
//   children,
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <header>
//           <nav>
//             <Link className="nav-link" href="/">
//               Home
//             </Link>
//             <div>
//               <Link className="nav-link" href="/register">Register</Link>
//               <Link className="nav-link" href="/dashboard">Dashboard</Link>
//             </div>
//           </nav>
//         </header>
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <NavBar />
          {children}
        </div>
      </body>
    </html>

  )
}
