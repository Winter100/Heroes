'use client';

import { usePreviewStore } from '@/app/_store/previewStore';
import { PreviewModalProps } from '@/app/_type/previewType';
import { splitStringAndNumber } from '../utils/splitStringAndNumber';
import { memo } from 'react';
import InfusionsDialog from '@/app/_features/preview/components/preview/infusion';
import EnchantChangeDialog from '@/app/_features/preview/components/preview/enchant';

const PreviewModal = memo(
  ({
    itemName,
    slot,
    upgreadeType,
    usableItemList = [],
    existing,
    preName = '',
  }: PreviewModalProps) => {
    const setAfterStats = usePreviewStore((state) => state.setAfterStats);
    const setBeforeStats = usePreviewStore((state) => state.setBeforeStats);
    const setChangeEnchant = usePreviewStore((state) => state.setChangeEnchant);
    const afterStats = usePreviewStore((state) => state.afterStats);
    const isExistingStats = existing?.stat_value?.length >= 1;

    const { name, level } = splitStringAndNumber(existing.name);

    const selectedName = afterStats.find(
      (item) => item.slot === slot && item.upgreadeType === upgreadeType
    )?.name;

    const selectedHandler = (
      title: string,
      value: { stat_name: string; stat_value: string }[]
    ) => {
      const beforeValue = {
        slot,
        upgreadeType,
        name: name,
        stat_value: isExistingStats
          ? [...existing.stat_value].flat()
          : [{ stat_name: name ?? '', stat_value: level.toString() }],
      };

      const afterValue = {
        slot,
        upgreadeType,
        name: title,
        stat_value: value,
      };

      setBeforeStats(beforeValue);
      setAfterStats(afterValue);
      setChangeEnchant(slot, title, upgreadeType);
    };

    return (
      <div className="h-full w-full">
        {upgreadeType === 'infusions' ? (
          <InfusionsDialog
            infusionList={usableItemList}
            items={itemName}
            label={selectedName ?? preName}
            selectedValue={
              selectedName !== undefined ? selectedName : (existing.name ?? '')
            }
            selectedHandler={selectedHandler}
          />
        ) : (
          <EnchantChangeDialog
            items={itemName}
            label={selectedName ?? preName}
            selectedValue={
              selectedName !== undefined ? selectedName : (existing.name ?? '')
            }
            slot={slot}
            upgreadeType={upgreadeType}
            selectedHandler={selectedHandler}
            enchantList={usableItemList}
          />
        )}
      </div>
    );
  }
);

export default PreviewModal;

PreviewModal.displayName = 'PreviewModal';
