import secureCompare from "./mod.ts";

const a = Math.random().toString(36).substring(2, 15);
const b = Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

Deno.test("Should take the same amount of time comparing different string sizes", () => {
  let now = Date.now();
  secureCompare(b, a);
  const t1 = Date.now() - now;

  now = Date.now();
  secureCompare(b, b);
  const t2 = Date.now() - now;

  if (Math.abs(t1 - t2) > 1) {
    throw Error(
      "Constant time test failed - greater than a 1 millisecond difference.",
    );
  }
});

Deno.test("Should return true for equal strings", () => {
  if (!secureCompare(a, a)) {
    throw Error(
      "Same string test failed - returned false for identical strings.",
    );
  }
});

Deno.test("Should return false for different strings (size, a < b)", () => {
  if (secureCompare(a, a + "x")) {
    throw Error(
      "Different string w/ different sizes (a < b) test failed - returned true for different strings.",
    );
  }
});

Deno.test("Should return false for different strings (size, a > b)", () => {
  if (secureCompare(a + "x", a)) {
    throw Error(
      "Different string w/ different sizes (a > b) test failed - returned true for different strings.",
    );
  }
});

Deno.test("Should return false for different strings (size, a = b)", () => {
  if (secureCompare(a + "x", a + "y")) {
    throw Error(
      "Different string w/ same size test failed - returned true for different strings.",
    );
  }
});

Deno.test("Should return true if the strings are identical in utf8", () => {
  if (!secureCompare("你好世界", "你好世界")) {
    throw Error(
      "UTF8 test failed - returned false for identical strings.",
    );
  }
});
