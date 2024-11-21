import "./globals.css";

export const metadata = {
  title: "Checkmed",
  description: "CheckMed, founded in 2020, is a leading SaaS platform that simplifies cashless insurance services. Serving over 12,000 pin codes, CheckMed provides nationwide doctor coverage, diagnostics, pharmacy access, consultation, and wellness programs, CheckMed offers innovative features like scan & pay, camp module, and pre-post policy process ensuring personalized care and customer satisfaction.",
  icons: {
    icon: "/logo.svg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}