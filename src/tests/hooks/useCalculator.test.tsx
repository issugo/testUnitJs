import { renderHook } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";

test("addition", () => {
  const { result } = renderHook(() => useCalculator());
  const {
    addition,
  } = result.current;

  expect(addition("1", "2")).toBe("3");
});

test("soustraction", () => {
    const { result } = renderHook(() => useCalculator());
    const {
        soustraction,
    } = result.current;
    
    expect(soustraction("1", "2")).toBe("-1");
})

test("square", () => {
    const { result } = renderHook(() => useCalculator());
    const {
        square,
    } = result.current;
    
    expect(square("1")).toBe("1");
})

test("division", () => {
  const { result } = renderHook(() => useCalculator());
    const {
        division,
    } = result.current;
    
    expect(division("4", "2")).toBe("5");
})

test("modulo", () => {
  const { result } = renderHook(() => useCalculator());
    const {
        modulo,
    } = result.current;
    
    expect(modulo("2", "2")).toBe("0");
})