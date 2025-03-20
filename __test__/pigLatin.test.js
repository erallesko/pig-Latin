const pigLatin = require("../pigLatin");

describe("pigLatin", () => {
    test("returns a string when a string is passed", () => {
        expect(typeof(pigLatin("abc"))).toBe("string")
    })
    test("when passed a single vowel, return vowel with way on the end", () => {
        expect(pigLatin("a")).toBe("away")
    })
    test("when passed a single consonant we add -ay on the end", () => {
        expect(pigLatin("b")).toBe("bay")
    })
    test("when passed a word beggining with a vowel, return word with way on the end", () => {
        expect(pigLatin("apple")).toBe("appleway")
    })
    test("when passed a word beggining with a consonant, return word with ay on the end", () => {
        expect(pigLatin("beetle")).toBe("eetlebay")
    })
    test("when passed a sentence, return with each word converted to pigLatin", () => {
        expect(pigLatin("keep on coding")).toBe("eepkay onway odingcay");
    })
})