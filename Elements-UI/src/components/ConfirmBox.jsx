import React from "react";
import { IoClose } from "react-icons/io5";

const ConfirmBox = ({ cancel, confirm, close }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 p-4 flex items-center justify-center z-50 font-['Orbitron']">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-700 w-full max-w-md p-6 rounded-2xl shadow-[0_0_20px_#8B5CF6] text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-purple-400 drop-shadow">
            ⚠ Delete Permanently
          </h2>
          <button
            onClick={close}
            aria-label="Close"
            className="text-purple-300 hover:text-purple-500 transition"
          >
            <IoClose size={28} />
          </button>
        </div>

        <p className="mb-6 text-sm text-gray-300">
          Are you absolutely sure you want to{" "}
          <span className="text-red-500 font-semibold">delete this permanently</span>? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={cancel}
            className="px-5 py-2 text-sm rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition shadow"
          >
            Cancel
          </button>
          <button
            onClick={confirm}
            className="px-5 py-2 text-sm rounded-lg bg-red-600 hover:bg-red-700 transition shadow-lg shadow-red-500/30"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBox;
