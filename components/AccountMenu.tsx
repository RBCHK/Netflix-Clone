/* eslint-disable @next/next/no-img-element */
import { signOut } from 'next-auth/react';
import React from 'react';

interface AccountMenuProps {
  visible: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row px-3 gap-3 group/item items-center w-full">
          <img
            className="w-8 rounded-md"
            src="images/default-green.png"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline">
            Username
          </p>
        </div>
        <hr className="bg-gray-600 h-px my-4 border-0" />
        <div
          onClick={() => signOut()}
          className="text-white text-sm text-center px-3 hover:underline"
        >
          Sign out if Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
