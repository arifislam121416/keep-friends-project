import Image from "next/image";
import Link from "next/link";
import img from "../aseste/error-404.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      <Image
        src={img}
        width={300}
        height={300}
        alt="Not Found"
      />

      <h2 className="text-2xl font-bold mt-4">Not Found</h2>
      <p className="text-gray-500">Could not find requested resource</p>

      <Link href="/" className="mt-4 text-blue-500">
       <button className="btn bg-[#244D3F] text-white">Return Home</button>
      </Link>
    </div>
  );
}