import "./globals.css";
import "./fonts/stylesheet.css"

export const metadata = {
  title: "Airworld",
  description: "Addicted FUn",
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
