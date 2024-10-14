import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import BottomArrow from "../BottomArrow";
import RaidLimitModal from "../../preview/menu/RaidLimitModal";

const Dropdown = () => {
  return (
    <div>
      <Menu>
        <MenuButton className="inline-flex w-20 items-center gap-2 rounded-md px-3 py-1.5 text-xs font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          메뉴
          <BottomArrow />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-20 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <RaidLimitModal />
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Dropdown;
