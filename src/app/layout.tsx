import { ReactNode } from "react";

// const roboto = Roboto({
//   weight: ["400", "500", "700", "900"],
//   style: "normal",
//   preload: true,
// });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
