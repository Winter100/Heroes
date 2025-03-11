type ItemOption = {
  [key: string]: any;
  power_infusion_use_preset_no?: number;
  prefix_enchant_use_preset_no?: number;
  suffix_enchant_use_preset_no?: number;
};

export const getOption = <T>(
  option: ItemOption,
  presetNoKey: keyof ItemOption,
  preset1Key: keyof ItemOption,
  preset2Key: keyof ItemOption,
): T | undefined => {
  try {
    const presetNo = option[presetNoKey];
    return presetNo === 1 ? option[preset1Key] : option[preset2Key];
  } catch (e) {
    console.log("q", e);
  }
};
