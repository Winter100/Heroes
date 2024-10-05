"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { CiImageOn } from "react-icons/ci";

import Button from "@/app/_components/common/Button";
import { imageToName } from "@/app/_utils/imageToName";
import { useCharacter } from "@/app/_hooks/useCharacter/useCharacter";
import { useCharacterStore } from "@/app/_store/characterStore";
import Input from "@/app/_components/common/Input";
import { GoSearch } from "react-icons/go";
import Loading from "@/app/_components/common/Loading";
import { toast } from "react-toastify";

const overlay = {
  backgroundColor: "rgba(0,0,0,0.7)",
};

const content = {
  width: "600px",
  height: "850px",
  margin: "auto",
  zIndex: 100,
};

function ImageSearch() {
  const [openModal, setOpenModal] = useState(false);
  const characters = useCharacterStore((state) => state.characters);
  const characterLength = characters.length;
  const clear = useCharacterStore((state) => state.clear);
  const [pastedImage, setPastedImage] = useState<string | null>(null);
  const { handleCharacterInfo, loading } = useCharacter();
  const [searchValue, setSearchValue] = useState<string>("");
  const [manual, setManual] = useState(true);
  const [preview, setPreview] = useState(true);

  const handlePasteImage = async () => {
    if (pastedImage) {
      URL.revokeObjectURL(pastedImage);
    }
    setPastedImage("");
    try {
      const clipboardItems = await navigator.clipboard.read();
      for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
          if (type.startsWith("image/")) {
            const blob = await clipboardItem.getType(type);
            const imagefile = new File([blob], "clipboard-image.png", {
              type: "image/png",
            });

            if (imagefile.size >= 10240) {
              alert("10MB가 넘는 이미지는 사용할 수 없습니다.");
              return;
            }
            const imageUrl = URL.createObjectURL(imagefile);
            setPastedImage(imageUrl);
            const resultArray = await imageToName(imagefile); // 이름변환
            const newArr = resultArray?.slice(0, 8 - characterLength);
            const joinString = newArr?.join(" ") ?? "";
            setSearchValue(joinString);
            return;
          }
        }
      }
      alert("이미지가 없거나 이미지 형식이 아닙니다.");
    } catch (err) {
      console.error("이미지를 가져오는 데 실패했습니다:", err);
      alert("이미지를 가져오는 데 실패했습니다.");
    }
  };

  useEffect(() => {
    return () => {
      if (pastedImage) {
        URL.revokeObjectURL(pastedImage);
        setPastedImage("");
      }
    };
  }, [pastedImage]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    clear();

    if (!characters || characterLength >= 8) {
      toast.error("캐릭터는 최대 8명까지 등록 가능합니다.");
      return;
    }

    const strArr = searchValue
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .filter(Boolean)
      .slice(0, 8 - characterLength);

    if (strArr.length >= 1) {
      for (const item of strArr) {
        await handleCharacterInfo(item);
      }
    }

    setOpenModal(false);
  };

  return (
    <>
      <Button
        className="flex h-full w-10 items-center justify-center text-xl"
        onClick={() => setOpenModal(true)}
      >
        <CiImageOn />
      </Button>
      <Modal
        ariaHideApp={false}
        onRequestClose={() => setOpenModal(false)}
        style={{ overlay, content }}
        isOpen={openModal}
      >
        <div className="flex h-full cursor-default flex-col gap-1 p-2">
          <div className="flex items-center justify-center gap-1">
            <h2 className="text-3xl">이미지 검색</h2>
            <span className="text-xs text-blue-300">beta</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <Button
              className={`h-6 w-20 text-xs ${manual ? "bg-gray-200" : ""}`}
              onClick={() => setManual((pre) => !pre)}
            >
              설명보기
            </Button>
            <Button
              className={`h-6 w-20 text-xs ${preview ? "bg-gray-200" : ""}`}
              onClick={() => setPreview((pre) => !pre)}
            >
              이미지보기
            </Button>
          </div>
          <div>
            {manual && (
              <>
                <div className="flex flex-col items-center justify-center text-sm">
                  <ol className="flex flex-col items-center justify-center">
                    <li>
                      이 기능은 Window 10 이상부터 사용 가능한 실험적인
                      기능입니다
                    </li>
                    <li>작동하지 않는다면 일반 검색을 이용해주세요</li>
                  </ol>
                </div>

                <div className="flex w-full flex-col items-center justify-center text-2xl">
                  <p>사용 방법</p>
                  <ol className="flex flex-col items-start justify-start text-sm">
                    <li>1. shift + window + s를 눌러 캡처모드로 진입합니다.</li>
                    <li>
                      2. 이름만 나오도록 범위를 지정한 후 추출하기 버튼을
                      클릭합니다.
                    </li>
                    <li>3. 틀린 이름을 수정하고 검색합니다.</li>
                  </ol>
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-2 text-2xl">
                  <p>이미지 예시</p>
                  <div className="flex flex-row gap-2">
                    <Image
                      src={"/images/ex1.png"}
                      width={180}
                      height={100}
                      alt="범위 예제1"
                    />
                    <Image
                      src={"/images/ex2.png"}
                      width={180}
                      height={100}
                      alt="범위 예제2"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          <hr />

          <>
            <div className="flex flex-col items-center justify-center gap-1">
              <Button
                className="h-8 w-20 border-blue-300 text-xs"
                onClick={handlePasteImage}
              >
                추출하기
              </Button>

              {preview && (
                <div className="relative h-48 w-full">
                  {pastedImage && (
                    <Image
                      className="object-contain"
                      src={pastedImage}
                      fill
                      alt="캡처 이미지"
                    />
                  )}
                </div>
              )}
            </div>
            <form
              id="search"
              onSubmit={submitHandler}
              className="flex h-8 w-full items-center justify-center rounded-lg border border-blue-300 pl-2"
            >
              <Input
                onChange={(e) => setSearchValue(e.target.value)}
                spellCheck="false"
                disabled={loading}
                className="h-6 w-full flex-1 border-none bg-inherit text-xs outline-none"
                placeholder="캐릭터 이름을 확인해주세요."
                value={searchValue}
              />
              <button
                disabled={loading}
                type="submit"
                className={`flex h-full w-6 items-center justify-center`}
              >
                {!loading ? <GoSearch /> : <Loading />}
              </button>
            </form>
          </>
        </div>
      </Modal>
    </>
  );
}

export default ImageSearch;
