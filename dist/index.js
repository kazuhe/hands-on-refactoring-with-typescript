"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const LIST = ["foo", "bar", "Baz", "qux", "piyo piyo"];
    const container = document.querySelector("#container");
    for (let i = 0; i < LIST.length; i++) {
        const p = document.createElement("p");
        const text = LIST[i];
        const words = text.match(/[a-z]+/gi);
        if (!words)
            return;
        const result = words
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join("");
        p.textContent = result;
        // @ts-expect-error
        container.appendChild(p);
    }
});
