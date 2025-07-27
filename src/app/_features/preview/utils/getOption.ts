type ItemOption = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  power_infusion_use_preset_no?: number;
  prefix_enchant_use_preset_no?: number;
  suffix_enchant_use_preset_no?: number;
};

export const getOption = <T>(
  option: ItemOption,
  presetNoKey: keyof ItemOption,
  preset1Key: keyof ItemOption,
  preset2Key: keyof ItemOption
): T | null => {
  try {
    if (!option) return null;
    const presetNo = option[presetNoKey];
    return presetNo === 1 ? option[preset1Key] : option[preset2Key];
  } catch (e) {
    console.error(e);
    return null;
  }
};
