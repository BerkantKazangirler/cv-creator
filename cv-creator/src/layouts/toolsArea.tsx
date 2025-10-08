import { AiOutlineLayout } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoIosUndo, IoIosRedo } from "react-icons/io";
import { LuArrowUpDown, LuCircleCheckBig } from "react-icons/lu";
import { MdWaterDrop } from "react-icons/md";
import { RiChatSmile2Line } from "react-icons/ri";

export const ToolsArea = () => {
  return (
    <div className="h-fit flex flex-col w-40 rounded-sm drop-shadow-sm shadow-black bg-white">
      <div className="flex flex-row border-b py-2 border-slate-300 justify-between w-full">
        <button
          title="Repo"
          className="hover:bg-purple-500/40 opacity-70 transition-all text-sm p-2 mx-auto rounded-full"
        >
          <IoIosUndo />
        </button>
        <hr className="border-slate-300 border-l h-7 my-auto" />
        <button
          title="Undo"
          className="hover:bg-purple-500/40 opacity-70 transition-all text-sm p-2 mx-auto rounded-full"
        >
          <IoIosRedo />
        </button>
      </div>
      <div className="flex flex-col py-1 border-b border-slate-300">
        <button className="flex group duration-700 gap-2 hover:text-purple-500/80 transition-all mx-auto py-2 flex-row">
          <span className="group-hover:bg-purple-500/40 duration-700 px-0.5 py-0.5 rounded-full transition-all">
            <HiOutlinePencilAlt className="my-auto text-lg opacity-70" />
          </span>
          <span className="text-xs font-inter leading-3 my-auto">
            Add section
          </span>
        </button>
        <button className="flex group duration-700 gap-2 hover:text-purple-500/80 transition-all mx-auto py-2 flex-row">
          <span className="group-hover:bg-purple-500/40 duration-700 px-0.5 py-0.5 rounded-full transition-all">
            <LuArrowUpDown className="my-auto text-lg opacity-70" />
          </span>
          <span className="text-xs font-inter leading-3 my-auto">
            Rearrange
          </span>
        </button>
        <button className="flex group duration-700 gap-2 hover:text-purple-500/80 transition-all mx-auto py-2 flex-row">
          <span className="group-hover:bg-purple-500/40 duration-700 px-0.5 py-0.5 rounded-full transition-all">
            <AiOutlineLayout className="my-auto text-lg opacity-70" />
          </span>
          <span className="text-xs font-inter leading-3 my-auto">
            Templates
          </span>
        </button>
        <button className="flex group duration-700 gap-2 hover:text-purple-500/80 transition-all mx-auto py-2 flex-row">
          <span className="group-hover:bg-purple-500/40 duration-700 px-0.5 py-0.5 rounded-full transition-all">
            <MdWaterDrop className="my-auto text-lg opacity-70" />
          </span>
          <span className="text-xs font-inter leading-3 my-auto">
            Design & Font
          </span>
        </button>
      </div>
      <div className="flex flex-col border-b border-slate-300">
        <button className="flex group duration-700 gap-2 hover:text-purple-500/80 transition-all mx-auto py-2 flex-row">
          <span className="group-hover:bg-purple-500/40 duration-700 px-0.5 py-0.5 rounded-full transition-all">
            <LuCircleCheckBig className="my-auto text-lg opacity-70" />
          </span>
          <span className="text-xs font-inter leading-3 my-auto">
            Improve text
          </span>
        </button>
        <button className="flex group duration-700 gap-2 hover:text-purple-500/80 transition-all mx-auto py-2 flex-row">
          <span className="group-hover:bg-purple-500/40 duration-700 px-0.5 py-0.5 rounded-full transition-all">
            <RiChatSmile2Line className="my-auto text-lg opacity-70" />
          </span>
          <span className="text-xs font-inter leading-3 my-auto">Check</span>
        </button>
      </div>
      <div className="flex flex-col border-b border-slate-300">
        <button className="flex group duration-700 gap-2 hover:text-purple-500/80 transition-all mx-auto py-2 flex-row">
          <span className="group-hover:bg-purple-500/40 duration-700 px-0.5 py-0.5 rounded-full transition-all">
            <FiDownload className="my-auto text-lg opacity-70" />
          </span>
          <span className="text-xs font-inter leading-3 my-auto">Download</span>
        </button>
        <button className="flex group duration-700 gap-2 hover:text-purple-500/80 transition-all mx-auto py-2 flex-row">
          <span className="group-hover:bg-purple-500/40 duration-700 px-0.5 py-0.5 rounded-full transition-all">
            <FaCrown className="my-auto text-lg text-yellow-500 opacity-70" />
          </span>
          <span className="text-xs font-inter leading-3 my-auto">History</span>
        </button>
      </div>
      <label
        htmlFor="brand"
        className="flex group cursor-pointer select-none duration-700 gap-2 hover:text-purple-500/80 transition-all mx-auto py-2 flex-row"
      >
        <span className="group-hover:bg-purple-500/40 duration-700 px-0.5 py-0.5 rounded-full transition-all">
          <FaCrown className="my-auto text-lg text-yellow-500 opacity-70" />
        </span>
        <div className="flex flex-row gap-1">
          <span className="text-xs font-inter leading-3 my-auto">Branding</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              id="brand"
              type="checkbox"
              value=""
              // checked={showMiniMap}
              // onChange={() => setShowMiniMap((t) => !t)}
              className="sr-only peer"
            />
            <div className="relative w-10 h-5 bg-slate-300/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[5.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>
      </label>
    </div>
  );
};
