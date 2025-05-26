
import SvgImage from "./tokyosvg";


export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="relative w-full">
      {/* Persistent Background Image */}
      <SvgImage />

      {/* Page-Specific Content */}
      <div>{children}</div>
    </div>
  );
}
