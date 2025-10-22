import React, { useState } from "react";

const ProfileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center"
      >
        U
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-card-bg border border-border rounded-md shadow-md p-2">
          <ul className="text-sm">
            <li className="p-2 hover:bg-accent hover:text-black rounded cursor-pointer">
              Profile
            </li>
            <li className="p-2 hover:bg-accent hover:text-black rounded cursor-pointer">
              Settings
            </li>
            <li className="p-2 hover:bg-danger text-white rounded cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
