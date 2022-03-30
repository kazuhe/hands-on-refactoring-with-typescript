/**
 * テキストをパスカルケースにする
 */
export const toPascalCase = (text: string): string => {
  const words = text.match(/[a-z]+/gi);
  if (!words) return "";
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

/**
 * 要素を取得する
 */
const getElement = (selector: string): HTMLElement | null =>
  document.querySelector(selector);

/**
 * テキストを挿入する
 */
const insertText =
  (element: HTMLElement) =>
  (text: string): string => {
    const p = document.createElement("p");
    p.textContent = text;
    element.appendChild(p);
    return text;
  };

document.addEventListener("DOMContentLoaded", () => {
  const container = getElement("#container");
  if (container !== null) {
    ["foo", "bar", "Baz", "qux", "piyo piyo"]
      .map(toPascalCase)
      .map(insertText(container));
  }
});
