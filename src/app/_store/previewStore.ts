import { create } from "zustand";
import { PreviewSelectedType, PriceData } from "../_type/previewType";
import { Stat } from "../_type/characterType";
import { NewEquipmentType } from "../_type/equipmentType";

type State = {
  characterName: string;
  afterStats: PreviewSelectedType[];
  beforeStats: PreviewSelectedType[];
  totalPriceItem: PriceData[];
  previewAllStats: Stat[];

  items: NewEquipmentType[];
  afterItems: NewEquipmentType[];
};

type Action = {
  setAfterStats: (value: PreviewSelectedType) => void;
  setBeforeStats: (value: PreviewSelectedType) => void;
  setCharacterName: (name: string) => void;
  reset: () => void;
  setTotalPrice: (price: PriceData) => void;
  setPreviewAllStats: (value: Stat[]) => void;

  setItems: (value: NewEquipmentType[]) => void;
  setIncreaseStat: (slot: string, statName: string) => void;
  setDecreaseStat: (slot: string, statName: string) => void;
  setMin: (slot: string, statName: string) => void;
  setMax: (slot: string, statName: string) => void;
  setLimit1Zero: (slot: string) => void;
  setLimit2Zero: (slot: string) => void;
  setProgeress: (slot: string, statName: string, value: number) => void;
};

export const usePreviewStore = create<State & Action>((set) => {
  return {
    characterName: "",
    afterStats: [],
    beforeStats: [],
    totalPriceItem: [],
    previewAllStats: [],
    items: [],
    afterItems: [],
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
            stat.slot === value.slot && stat.previewName === value.previewName,
        );
        if (existsInafterStats) {
          return {
            afterStats: afterStats.map((stat) =>
              stat.slot === value.slot && stat.previewName === value.previewName
                ? value
                : stat,
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
            stat.slot === value.slot && stat.previewName === value.previewName,
        );
        if (existsInBeforeStats) {
          return {
            beforeStats: beforeStats.map((stat) =>
              stat.slot === value.slot && stat.previewName === value.previewName
                ? value
                : stat,
            ),
          };
        } else {
          return { beforeStats: [...beforeStats, value] };
        }
      });
    },
    reset: () => {
      set(() => {
        return {
          characterName: "",
          afterStats: [],
          beforeStats: [],
          totalPriceItem: [],
          previewAllStats: [],
          StatDifference: [],
          items: [],
          afterItems: [],
        };
      });
    },
    setTotalPrice: (value) => {
      set((state) => {
        const total = [...state.totalPriceItem];
        const existsInTotal = total.some(
          (item) =>
            item.slot === value.slot && item.previewName === value.previewName,
        );

        if (existsInTotal) {
          return {
            totalPriceItem: total.map((item) =>
              item.slot === value.slot && item.previewName === value.previewName
                ? value
                : item,
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
        return { items: value, afterItems: value };
      });
    },

    setIncreaseStat: (slot, statName) => {
      set((state) => {
        const updatedItems = state.items.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === statName) {
                    const newStatValue = Math.min(
                      Number(stat.stat_value) + Number(stat.stat_one_value),
                      Number(stat.stat_max_value),
                    ).toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                },
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

        const beforeStat = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return { stat_name: stat.stat_name, stat_value: stat.stat_value };
          });

        const before = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.previewName === before.previewName &&
            item.slot === before.slot,
        );

        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.previewName === after.previewName && item.slot === after.slot,
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          items: updatedItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },

    setDecreaseStat: (slot, statName) => {
      set((state) => {
        const updatedItems = state.items.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === statName) {
                    const newStatValue = Math.max(
                      Number(stat.stat_min_value),
                      Number(stat.stat_value) - Number(stat.stat_one_value),
                    ).toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                },
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

        const beforeStat = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.previewName === before.previewName &&
            item.slot === before.slot,
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.previewName === after.previewName && item.slot === after.slot,
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          items: updatedItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },
    setMax: (slot, statName) => {
      set((state) => {
        const updatedItems = state.items.map((item) => {
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
                },
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

        const beforeStat = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.previewName === before.previewName &&
            item.slot === before.slot,
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.previewName === after.previewName && item.slot === after.slot,
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          items: updatedItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },
    setMin: (slot, statName) => {
      set((state) => {
        const updatedItems = state.items.map((item) => {
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
                },
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

        const beforeStat = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.previewName === before.previewName &&
            item.slot === before.slot,
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.previewName === after.previewName && item.slot === after.slot,
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          items: updatedItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },

    setProgeress: (slot, statName, value) => {
      set((state) => {
        const updatedItems = state.items.map((item) => {
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
                },
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

        const beforeStat = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.previewName === before.previewName &&
            item.slot === before.slot,
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.previewName === after.previewName && item.slot === after.slot,
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          items: updatedItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },

    setLimit1Zero: (slot) => {
      set((state) => {
        const updatedItems = state.items.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === "해제") {
                    const newStatValue = stat.stat_min_value.toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                },
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

        const beforeStat = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.previewName === before.previewName &&
            item.slot === before.slot,
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.previewName === after.previewName && item.slot === after.slot,
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          items: updatedItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },

    setLimit2Zero: (slot) => {
      set((state) => {
        const updatedItems = state.items.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === "해제 2") {
                    const newStatValue = stat.stat_min_value.toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                },
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

        const beforeStat = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_min_value,
            };
          });

        const afterStats = updatedItems
          .find((item) => item.item_equipment_slot_name === slot)
          ?.item_option.tuning_stat?.map((stat) => {
            return {
              stat_name: stat.stat_name,
              stat_value: stat.stat_value,
            };
          });

        const before = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: beforeStat ?? [],
        };
        const after = {
          previewName: "grinding",
          slot: slot,
          stat_name: slot,
          stat_value: afterStats ?? [],
        };

        const be = [...state.beforeStats];
        const beIndex = be.findIndex(
          (item) =>
            item.previewName === before.previewName &&
            item.slot === before.slot,
        );
        if (beIndex !== -1) {
          be[beIndex] = before;
        } else {
          be.push(before);
        }
        const af = [...state.afterStats];
        const afIndex = af.findIndex(
          (item) =>
            item.previewName === after.previewName && item.slot === after.slot,
        );

        if (afIndex !== -1) {
          af[afIndex] = after;
        } else {
          af.push(after);
        }

        return {
          items: updatedItems,
          beforeStats: [...be],
          afterStats: [...af],
        };
      });
    },
  };
});
