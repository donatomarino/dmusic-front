import { HeaderProps } from "../../../types/types";

export const Header = ({ onClick, description }: HeaderProps) => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1
        className="text-3xl sm:text-4xl font-bold mb-2.5 bg-clip-text bg-gradient-to-tl from-purple-500 via-pink-500 to-blue-400 text-transparent text-center mt-5 cursor-pointer select-none"
        onClick={onClick}
      >
        DMusic
      </h1>
      <h2 className="border-b border-gray-800 pb-5 text-center mt-5 w-full sm:w-3/4">
        {description}
      </h2>
    </div>
  );
};
