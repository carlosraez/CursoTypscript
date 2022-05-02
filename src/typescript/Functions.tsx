export const Functions = () => {
  /**
   * Return sum a plus b
   * @param a number
   * @param b number
   * @returns number
   */
  const sumar = (a: number, b: number): number => a + b;
  return (
    <>
      <h3>Functions</h3>
      <span>El resultado es: {sumar(1, 1)}</span>
    </>
  );
};
