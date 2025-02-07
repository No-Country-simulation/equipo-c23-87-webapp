// app/layout.tsx
import { LevelProvider } from "./context/LevelContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LevelProvider>{children}</LevelProvider>
      </body>
    </html>
  );
}
