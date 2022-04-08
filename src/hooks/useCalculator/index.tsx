const useCalculator = () => {
  const addition = (value1: string, value2: string) => {
    return Number(Number(value1) + Number(value2)).toString();
  };

  const soustraction = (value1: string, value2: string) => {
    return Number(Number(value1) - Number(value2)).toString();
  };

  const square = (value: string) => {
    return Math.sqrt(Number(value)).toString();
  };

  const division = (value1: string, value2: string) => {
    return Number(Number(value1) / Number(value2)).toString();
  }

  const modulo = (value1: string, value2: string) => {
    return Number(Number(value1) % Number(value2)).toString();
  }

  return {
    addition,
    soustraction,
    square,
    division,
    modulo
  };
};

export default useCalculator;
