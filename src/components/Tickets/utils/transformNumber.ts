export const formatPrice = (price: number) => {
  const rounded = Math.round(price * 100) / 100;

  const parts = rounded.toString().split(".");

  //Adding space after each three characters
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return parts.join(".");
};
