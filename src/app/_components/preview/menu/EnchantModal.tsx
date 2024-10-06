"use client";
import Modal from "react-modal";
import EnchantItem from "../components/EnchantItem";
import { ModalProps } from "@/app/_type/previewType";
import Row from "../../layout/Row";
import Table from "../table/Table";
import Column from "../../layout/Column";

const EnchantModal = ({
  beforeName,
  openModal,
  options,
  overlay,
  content,
  selectedHandler,
  setOpenModal,
  slot,
  itemName,
  enchantList,
  previewName,
  selectedValue,
}: ModalProps) => {
  const selected = selectedValue !== undefined ? selectedValue : beforeName;

  return (
    <>
      {openModal && (
        <Modal
          ariaHideApp={false}
          onRequestClose={() => setOpenModal(false)}
          style={{ overlay, content }}
          isOpen={openModal}
        >
          <Column className="flex h-full justify-around">
            <div className="h-full">
              <div className="flex w-full items-center justify-end">
                <button
                  onClick={() => setOpenModal(false)}
                  className="text-end text-sm text-white hover:text-blue-300"
                >
                  X
                </button>
              </div>
              <div className="flex h-6 items-center justify-center text-sm font-semibold text-white">
                <h2>{`${itemName.level} ${itemName.name}`}</h2>
              </div>

              <ul className="my-2 grid w-full grid-cols-4 gap-3">
                {options?.map((item, i) => (
                  <li
                    onClick={() =>
                      selectedHandler(item?.stat_name, item?.stat_value)
                    }
                    className="flex w-full rounded-lg shadow-md transition-shadow duration-300 hover:cursor-pointer hover:shadow-xl"
                    key={item?.stat_name + i}
                  >
                    <EnchantItem
                      setOpenModal={setOpenModal}
                      slot={slot ?? ""}
                      selectedValue={selected}
                      previewName={previewName}
                      enchantList={enchantList ?? []}
                      {...item}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <Row className="h-20 rounded-lg border bg-zinc-800 p-2 text-white">
              <Table />
            </Row>
          </Column>
        </Modal>
      )}
    </>
  );
};

export default EnchantModal;
