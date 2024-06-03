import "./globals.css";


export const metadata = {
  title: "Consultorio Dentista",
  description: "Dashbord de pacientes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
