// codigo 3695
const code = require("./codeBreaker")

test("Si todas coinciden espero XXXX", () => {
    expect(code.codeBreaker("3695")).toBe("XXXX");
})
test("Si ninguna coincide espero cadena vacia", () => {
    expect(code.codeBreaker("8847")).toBe("");
})
test("Si una coincide espero X", () => {
    expect(code.codeBreaker("3217")).toBe("X");
})
test("Si una esta incluida espero _", () => {
    expect(code.codeBreaker("6421")).toBe("_");
})
test("Si una coincide y otra esta incluida espero X_",()=>{
    expect(code.codeBreaker("3987")).toBe("X_");
})
test("Si dos coincide y una esta incluida espero XX_",()=>{
    expect(code.codeBreaker("3985")).toBe("XX_");
})
test("Si una coincide y dos estan incluida espero X__ ",()=>{
    expect(code.codeBreaker("6597")).toBe("X__");
})
test("Si todas estan incluidas espero ____",()=>{
    expect(code.codeBreaker("5963")).toBe("____");
})


// expect(value).toBe(2);