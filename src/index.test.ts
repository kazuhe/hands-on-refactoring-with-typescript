import { toPascalCase } from "./index";

describe("toPascalCase", () => {
  test.each([
    ["foo", "Foo"],
    ["Bar", "Bar"],
    ["baz qux", "BazQux"],
  ])(
    "text が %p の時、%p となること",
    (text: string, result: string) => {
      expect(toPascalCase(text)).toBe(result);
    }
  );
});
