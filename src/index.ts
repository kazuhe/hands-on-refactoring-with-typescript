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

document.addEventListener("DOMContentLoaded", () => {
  const LIST = ["foo", "bar", "Baz", "qux", "piyo piyo"];
  const container = document.querySelector("#container");
  if (container !== null) {
    for (let i = 0; i < LIST.length; i++) {
      const p = document.createElement("p");
      p.textContent = toPascalCase(LIST[i]);
      container.appendChild(p);
    }
  }
});
