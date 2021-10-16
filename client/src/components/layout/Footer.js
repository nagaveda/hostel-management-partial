import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pd-4 text-center">
      Copyright &copy; Hostel Management {new Date().getFullYear()} 
    </footer>
  );
}
