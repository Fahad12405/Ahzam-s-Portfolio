import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/139179226__1_-removebg-preview.png"
        alt="Syed Ahzam Imam"
        width={737}
        height={850}
        className="translate-z-0 w-full h-full object-contain"
      />
    </div>
  );
};

export default Avatar;
