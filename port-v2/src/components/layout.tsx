import { ThemeProvider } from "../components/ui/ThemeProvider";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            {children}
        </ThemeProvider>
    );
  }