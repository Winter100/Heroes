import Tesseract from "tesseract.js";

export const imageToName = async (img: string | File) => {
  if (!img) return;

  try {
    const result = await Tesseract.recognize(img, "kor+eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          // 로딩 현황
          // console.log(Math.round(m.progress * 100));
        }
      },
    });

    const text = result.data.text;
    return text.split("\n").filter(Boolean) ?? [];
  } catch (e) {}
};
