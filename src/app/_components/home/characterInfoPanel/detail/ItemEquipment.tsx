"use client";

import { useState } from "react";

import Column from "@/app/_components/layout/Column";
import { EquipmentType } from "@/app/_type/equipmentType";
import { GiWarPick } from "react-icons/gi";
import { BsBookFill, BsBook } from "react-icons/bs";
import { TbCircleNumber1, TbCircleNumber2 } from "react-icons/tb";
import { GiClawHammer } from "react-icons/gi";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const ItemEquipment = ({ item }: { item: EquipmentType }) => {
  const [open, setOpen] = useState(false);
  const item_name = `${item?.item_option?.enhancement_level ?? ""} ${item.item_option.prefix_enchant_preset_1 ?? ""} ${item.item_option.suffix_enchant_preset_1 ?? ""} ${item.item_name ?? ""} `;
  const ability_name = item?.item_option?.ability_name;
  const power_infusion_preset_1 =
    item.item_option?.power_infusion_preset_1 ?? "";
  const power_infusion_preset_2 =
    item.item_option?.power_infusion_preset_2 ?? "";
  const power_infusion_use = item.item_option.power_infusion_use_preset_no;

  const prefix_enchant_preset_1 =
    item.item_option?.prefix_enchant_preset_1 ?? "";
  const prefix_enchant_preset_2 =
    item.item_option?.prefix_enchant_preset_2 ?? "";
  const pre_fix_enchant_use = item.item_option.prefix_enchant_use_preset_no;

  const suffix_enchant_preset_1 =
    item.item_option?.suffix_enchant_preset_1 ?? "";
  const suffix_enchant_preset_2 =
    item.item_option?.suffix_enchant_preset_2 ?? "";
  const suffix_enchant_use = item.item_option.suffix_enchant_use_preset_no;

  const tuning_stat = item.item_option.tuning_stat ?? [];
  return (
    <Column className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg p-2 text-white hover:text-blue-300">
      <>
        <Button
          className="flex h-full w-full items-center justify-center"
          onClick={() => setOpen((pre) => !pre)}
        >
          {item.item_name}
        </Button>
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-2 text-center sm:items-center">
              <DialogPanel
                transition
                className="relative mx-auto w-full transform overflow-hidden rounded-lg border bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="flex items-center justify-center px-1 pb-4 pt-5 text-sm sm:p-6 sm:pb-4">
                  <div className="flex w-96 flex-col items-center justify-center gap-2 rounded-lg border border-borderColor p-2">
                    <div className="flex h-24 w-full flex-col items-center justify-center">
                      <p className="flex items-center justify-center">
                        {item_name}
                      </p>
                      <p className="flex items-center justify-center text-xs">
                        {ability_name}
                      </p>
                    </div>

                    <div className="flex h-8 w-full items-center justify-center gap-4 text-xs">
                      <div className="flex w-8 items-center justify-center">
                        <GiWarPick className="text-xl" />
                      </div>
                      <div
                        className={`${power_infusion_use === 1 ? "border-blue-300 text-blue-300" : "border-borderColor"} flex h-full flex-1 flex-row items-center justify-center rounded-lg border`}
                      >
                        <div className="flex w-8 items-center justify-center">
                          <p>
                            <TbCircleNumber1 className="text-lg" />
                          </p>
                        </div>
                        <div
                          className={`flex w-full flex-1 items-center justify-center gap-2`}
                        >
                          <p>{power_infusion_preset_1?.stat_name ?? ""}</p>
                          <p>{power_infusion_preset_1?.stat_value ?? ""}</p>
                        </div>
                      </div>

                      <div
                        className={`${power_infusion_use === 2 ? "border-blue-300 text-blue-300" : "border-borderColor"} flex h-full flex-1 flex-row items-center justify-center rounded-lg border`}
                      >
                        <div className="flex w-8 items-center justify-center">
                          <p>
                            <TbCircleNumber2 className="text-lg" />
                          </p>
                        </div>
                        <div
                          className={`flex w-full flex-1 items-center justify-center gap-2`}
                        >
                          <p>{power_infusion_preset_2?.stat_name ?? ""}</p>
                          <p>{power_infusion_preset_2?.stat_value ?? ""}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex h-8 w-full items-center justify-center gap-4 text-xs">
                      <div className="flex w-8 items-center justify-center">
                        <BsBookFill className="text-xl" />
                      </div>

                      <div
                        className={`${pre_fix_enchant_use === 1 ? "border-blue-300 text-blue-300" : "border-borderColor"} flex h-full flex-1 flex-row items-center justify-center rounded-lg border`}
                      >
                        <div className="flex w-8 items-center justify-center">
                          <p>
                            <TbCircleNumber1 className="text-lg" />
                          </p>
                        </div>
                        <div className="flex w-full flex-1 items-center justify-center">
                          <p>{prefix_enchant_preset_1 ?? ""}</p>
                        </div>
                      </div>

                      <div
                        className={`${pre_fix_enchant_use === 2 ? "border-blue-300 text-blue-300" : "border-borderColor"} flex h-full flex-1 flex-row items-center justify-center rounded-lg border`}
                      >
                        <div className="flex w-8 items-center justify-center">
                          <p>
                            <TbCircleNumber2 className="text-lg" />
                          </p>
                        </div>
                        <div className="flex w-full flex-1 items-center justify-center">
                          <p>{prefix_enchant_preset_2 ?? ""}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex h-8 w-full items-center justify-center gap-4 text-xs">
                      <div className="flex w-8 items-center justify-center">
                        <BsBook className="text-xl" />
                      </div>

                      <div
                        className={`${suffix_enchant_use === 1 ? "border-blue-300 text-blue-300" : "border-borderColor"} flex h-full flex-1 flex-row items-center justify-center rounded-lg border`}
                      >
                        <div className="flex w-8 items-center justify-center">
                          <p>
                            <TbCircleNumber1 className="text-lg" />
                          </p>
                        </div>
                        <div className="flex w-full flex-1 items-center justify-center">
                          <p>{suffix_enchant_preset_1 ?? ""}</p>
                        </div>
                      </div>

                      <div
                        className={`${suffix_enchant_use === 2 ? "border-blue-300 text-blue-300" : "border-borderColor"} flex h-full flex-1 flex-row items-center justify-center rounded-lg border`}
                      >
                        <div className="flex w-8 items-center justify-center">
                          <p>
                            <TbCircleNumber2 className="text-lg" />
                          </p>
                        </div>
                        <div className="flex w-full flex-1 items-center justify-center">
                          <p>{suffix_enchant_preset_2 ?? ""}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex h-36 w-full items-center justify-center gap-4 text-xs">
                      <div className="flex w-8 items-center justify-center">
                        <GiClawHammer className="text-xl" />
                      </div>

                      <div className="flex h-full flex-1 flex-row items-center justify-center rounded-lg border border-borderColor">
                        <div className="grid h-full w-full flex-1 grid-cols-2 flex-col items-center justify-center">
                          {/* <div className="flex h-full w-full flex-1 flex-col items-center justify-center"> */}
                          {tuning_stat.map((item) => (
                            <div
                              className="flex flex-1 items-center justify-center gap-2"
                              key={item.stat_name}
                            >
                              <p>{item.stat_name}</p>
                              <p>{item.stat_value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    </Column>
  );
};

export default ItemEquipment;
