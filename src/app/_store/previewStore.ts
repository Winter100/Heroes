import { create } from 'zustand';
import { PreviewSelectedType, PriceData, Stat } from '../_type/previewType';

import {
  ItemInfoQuipmentProps,
  NewEquipmentType,
} from '../_type/equipmentType';
import { convertInfoStat } from '../_utils/convert/convertInfoStats';
import { splitStringAndNumber } from '../_utils/preview/splitStringAndNumber';
import { getItemInfoOptions } from '../_features/preview/utils/getItemInfoOptions';
import { PARTHOLN } from '../_features/preview/components/menubar/partholn/PartholnList';

type State = {
  info: ItemInfoQuipmentProps[];

  characterName: string;
  afterStats: PreviewSelectedType[];
  beforeStats: PreviewSelectedType[];
  totalPriceItem: PriceData[];
  previewAllStats: Stat[];

  // items: NewEquipmentType[];
  beforeItems: ItemInfoQuipmentProps[];
};

type Action = {
  setInfo: (items: NewEquipmentType[]) => void;

  setAfterStats: (value: PreviewSelectedType) => void;
  setBeforeStats: (value: PreviewSelectedType) => void;
  setCharacterName: (name: string) => void;
  reset: () => void;
  setTotalPrice: (price: PriceData) => void;
  setPreviewAllStats: (value: Stat[]) => void;

  setItems: (value: ItemInfoQuipmentProps[]) => void;
  setIncreaseStat: (slot: string, statName: string) => void;
  setDecreaseStat: (slot: string, statName: string) => void;
  setMin: (slot: string, statName: string) => void;
  setMax: (slot: string, statName: string) => void;
  setLimitZero: (slot: string, limitName: string) => void;
  setProgeress: (slot: string, statName: string, value: number) => void;
  setChangeEnchant: (
    slot: string,
    enchant: string,
    upgreadeType: string
  ) => void;
};

export const usePreviewStore = create<State & Action>((set) => {
  return {
    info: [],
    characterName: '',
    afterStats: [],
    beforeStats: [],
    totalPriceItem: [],
    previewAllStats: [],
    // items: [],
    beforeItems: [],
    setChangeEnchant: (slot, enchant, upgreadeType) => {
      set((state) => {
        const newItem = state.info.map((item) => {
          const {
            used_prefix_enchant_number,
            used_suffix_enchant_number,
            used_infusion_number,
          } = getItemInfoOptions(item);
          if (item.item_equipment_slot_name === slot) {
            if (upgreadeType === 'prefix') {
              if (used_prefix_enchant_number === 1) {
                item.item_option.prefix_enchant_preset_1 = enchant;
              } else {
                item.item_option.prefix_enchant_preset_2 = enchant;
              }
            } else if (upgreadeType === 'suffix') {
              if (used_suffix_enchant_number === 1) {
                item.item_option.suffix_enchant_preset_1 = enchant;
              } else {
                item.item_option.suffix_enchant_preset_2 = enchant;
              }
            } else if (upgreadeType === 'infusions') {
              const { name, level } = splitStringAndNumber(enchant);

              if (used_infusion_number === 1) {
                item.item_option.power_infusion_preset_1 = {
                  stat_name: name,
                  stat_value: level.toString(),
                };
              } else {
                item.item_option.power_infusion_preset_2 = {
                  stat_name: name,
                  stat_value: level.toString(),
                };
                item.item_option.power_infusion_use_preset_no = 2;
              }
            }
          }

          return { ...item };
        });

        const newItems = newItem.map((item) => {
          const { mergedStats, quality, rating } = convertInfoStat(item);
          return { ...item, mergedStats, rating, quality };
        });

        return { info: newItems };
      });
    },
    setInfo: (items) => {
      set(() => {
        const newItems = items.map((item) => {
          const { mergedStats, quality, rating, before } =
            convertInfoStat(item);
          return { ...item, mergedStats, rating, quality, before };
        });

        return { info: newItems, beforeItems: newItems };
      });
    },
    setCharacterName: (value) => {
      set(() => {
        return { characterName: value };
      });
    },
    setAfterStats: (value) => {
      set((state) => {
        const afterStats = [...state.afterStats];
        const existsInafterStats = afterStats.some(
          (stat) =>
            stat.slot === value.slot && stat.upgreadeType === value.upgreadeType
        );
        if (existsInafterStats) {
          return {
            afterStats: afterStats.map((stat) =>
              stat.slot === value.slot &&
              stat.upgreadeType === value.upgreadeType
                ? value
                : stat
            ),
          };
        } else {
          return { afterStats: [...afterStats, value] };
        }
      });
    },
    setBeforeStats: (value) => {
      set((state) => {
        const beforeStats = [...state.beforeStats];

        const existsInBeforeStats = beforeStats.some(
          (stat) =>
            stat.slot === value.slot && stat.upgreadeType === value.upgreadeType
        );

        if (value.upgreadeType === PARTHOLN) {
          if (existsInBeforeStats) {
            const updatedStats = beforeStats.map((stat) =>
              stat.slot === value.slot &&
              stat.upgreadeType === value.upgreadeType
                ? value
                : stat
            );
            return {
              beforeStats: updatedStats,
            };
          } else {
            return {
              beforeStats: [...beforeStats, value],
            };
          }
        } else {
          if (existsInBeforeStats) {
            return {
              beforeStats: [...beforeStats],
            };
          } else {
            return {
              beforeStats: [...beforeStats, value],
            };
          }
        }
      });
    },
    reset: () => {
      set(() => {
        return {
          characterName: '',
          afterStats: [],
          beforeStats: [],
          totalPriceItem: [],
          previewAllStats: [],
          StatDifference: [],
          info: [],
          beforeItems: [],
        };
      });
    },
    setTotalPrice: (value) => {
      set((state) => {
        const total = [...state.totalPriceItem];
        const existsInTotal = total.some(
          (item) =>
            item.slot === value.slot && item.upgreadeType === value.upgreadeType
        );

        if (existsInTotal) {
          return {
            totalPriceItem: total.map((item) =>
              item.slot === value.slot &&
              item.upgreadeType === value.upgreadeType
                ? value
                : item
            ),
          };
        } else {
          return { totalPriceItem: [...total, value] };
        }
      });
    },
    setPreviewAllStats: (value) => {
      set(() => {
        return { previewAllStats: value };
      });
    },

    setItems: (value) => {
      set(() => {
        // return { info: value };
        return { items: value, beforeItems: value };
      });
    },

    setIncreaseStat: (slot, statName) => {
      set((state) => {
        const updatedItems = state.info.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === statName) {
                    const newStatValue = Math.min(
                      Number(stat.stat_value) + Number(stat.stat_one_value),
                      Number(stat.stat_max_value)
                    ).toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                }
              );
              return {
                ...item,
                item_option: {
                  ...item.item_option,
                  tuning_stat: updatedTuningStat,
                },
              };
            }
          }
          return item;
        });

        const newItems = updatedItems.map((item) => {
          const { mergedStats, quality, rating } = convertInfoStat(item);
          return { ...item, mergedStats, rating, quality };
        });

        const beforeStat = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return { stat_name: stat.stat_name, stat_value: stat.stat_value };
          });

        const before = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.upgreadeType === before.upgreadeType &&
            item.slot === before.slot
        );

        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.upgreadeType === after.upgreadeType && item.slot === after.slot
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          info: newItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },

    setDecreaseStat: (slot, statName) => {
      set((state) => {
        const updatedItems = state.info.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === statName) {
                    const newStatValue = Math.max(
                      Number(stat.stat_min_value),
                      Number(stat.stat_value) - Number(stat.stat_one_value)
                    ).toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                }
              );

              return {
                ...item,
                item_option: {
                  ...item.item_option,
                  tuning_stat: updatedTuningStat,
                },
              };
            }
          }
          return item;
        });

        const newItems = updatedItems.map((item) => {
          const { mergedStats, quality, rating } = convertInfoStat(item);
          return { ...item, mergedStats, rating, quality };
        });

        const beforeStat = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.upgreadeType === before.upgreadeType &&
            item.slot === before.slot
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.upgreadeType === after.upgreadeType && item.slot === after.slot
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          info: newItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },
    setMax: (slot, statName) => {
      set((state) => {
        const updatedItems = state.info.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === statName) {
                    const newStatValue = stat.stat_max_value.toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                }
              );

              return {
                ...item,
                item_option: {
                  ...item.item_option,
                  tuning_stat: updatedTuningStat,
                },
              };
            }
          }
          return item;
        });

        const newItems = updatedItems.map((item) => {
          const { mergedStats, quality, rating } = convertInfoStat(item);
          return {
            ...item,
            mergedStats,
            rating,
            quality,
          };
        });

        const beforeStat = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.upgreadeType === before.upgreadeType &&
            item.slot === before.slot
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.upgreadeType === after.upgreadeType && item.slot === after.slot
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          info: newItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },
    setMin: (slot, statName) => {
      set((state) => {
        const updatedItems = state.info.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === statName) {
                    const newStatValue = stat.stat_min_value.toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                }
              );

              return {
                ...item,
                item_option: {
                  ...item.item_option,
                  tuning_stat: updatedTuningStat,
                },
              };
            }
          }
          return item;
        });

        const newItems = updatedItems.map((item) => {
          const { mergedStats, quality, rating } = convertInfoStat(item);
          return {
            ...item,
            mergedStats,
            rating,
            quality,
          };
        });

        const beforeStat = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.upgreadeType === before.upgreadeType &&
            item.slot === before.slot
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.upgreadeType === after.upgreadeType && item.slot === after.slot
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          info: newItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },

    setProgeress: (slot, statName, value) => {
      set((state) => {
        const updatedItems = state.info.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === statName) {
                    const newStatValue = value.toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                }
              );

              return {
                ...item,
                item_option: {
                  ...item.item_option,
                  tuning_stat: updatedTuningStat,
                },
              };
            }
          }
          return item;
        });

        const newItems = updatedItems.map((item) => {
          const { mergedStats, quality, rating } = convertInfoStat(item);
          return {
            ...item,
            mergedStats,
            rating,
            quality,
          };
        });

        const beforeStat = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.upgreadeType === before.upgreadeType &&
            item.slot === before.slot
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.upgreadeType === after.upgreadeType && item.slot === after.slot
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          info: newItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },

    setLimitZero: (slot, limitName) => {
      set((state) => {
        const updatedItems = state.info.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (limitName === '해제') {
                    if (stat.stat_name === '해제') {
                      const newStatValue = stat.stat_min_value.toString();
                      return {
                        ...stat,
                        stat_value: newStatValue,
                      };
                    }
                  }

                  if (limitName === '해제 2') {
                    if (stat.stat_name === '해제 2') {
                      const newStatValue = stat.stat_min_value.toString();
                      return {
                        ...stat,
                        stat_value: newStatValue,
                      };
                    }
                  }

                  if (limitName === '해제 3') {
                    if (stat.stat_name === '해제 3') {
                      const newStatValue = stat.stat_min_value.toString();
                      return {
                        ...stat,
                        stat_value: newStatValue,
                      };
                    }
                  }

                  return stat;
                }
              );

              return {
                ...item,
                item_option: {
                  ...item.item_option,
                  tuning_stat: updatedTuningStat,
                },
              };
            }
          }
          return item;
        });

        const newItems = updatedItems.map((item) => {
          const { mergedStats, quality, rating } = convertInfoStat(item);
          return {
            ...item,
            mergedStats,
            rating,
            quality,
          };
        });

        const beforeStat = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = newItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          upgreadeType: 'grinding',
          slot: slot,
          name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.upgreadeType === before.upgreadeType &&
            item.slot === before.slot
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.upgreadeType === after.upgreadeType && item.slot === after.slot
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          info: newItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },
  };
});
