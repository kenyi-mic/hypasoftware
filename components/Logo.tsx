// components/Logo.tsx
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center justify-center w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg">
        <span className="text-white font-bold text-lg">H</span>
      </div>
      <span className="text-white font-bold text-xl tracking-tight">
        Hypasoftware
      </span>
    </Link>
  );
};

export default Logo;
