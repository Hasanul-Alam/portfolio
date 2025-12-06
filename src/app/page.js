import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to My Portfolio
      </h1>
      <p className="text-center mt-4 text-gray-600">
        Hi, I&apos;m Md. Hasanul Alam, a passionate Mobile App Developer
        specializing in React Native.
      </p>
      <div className="flex justify-center mt-6">
        <Image
          src="/profile.jpg"
          alt="Md. Hasanul Alam"
          width={150}
          height={150}
          className="rounded-full bg-amber-800"
        />
      </div>
    </div>
  );
}
