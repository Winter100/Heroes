import Modal from "react-modal";

import Row from "../../layout/Row";
import Table from "../table/Table";
import Column from "../../layout/Column";
import InfusionsItem from "../components/InfusionsItem";

import { ModalProps } from "@/app/_type/previewType";
import { groupByStatName } from "../utils/groupByStatName";

const InfusionsModal = ({
  beforeName,
  openModal,
  options,
  overlay,
  content,
  selectedHandler,
  setOpenModal,
  itemName,
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
              <ul className="my-2 w-full">
                {Object.keys(groupByStatName(options))
                  ?.sort((a, b) => a.localeCompare(b))
                  .map((statName) => (
                    <div key={statName} className="my-4">
                      <h3 className="text-base font-semibold text-white">
                        {statName}
                      </h3>
                      <ul className="grid w-full grid-cols-4 gap-3">
                        {groupByStatName(options)[statName]?.map((item, i) => (
                          <li
                            onClick={() =>
                              selectedHandler(item?.stat_name, item?.stat_value)
                            }
                            className="flex w-full rounded-lg shadow-md transition-shadow duration-300 hover:cursor-pointer hover:shadow-xl"
                            key={item?.stat_name + i}
                          >
                            <InfusionsItem
                              setOpenModal={setOpenModal}
                              selected={selected === `${item.stat_name}`}
                              previewName={previewName}
                              {...item}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default InfusionsModal;
