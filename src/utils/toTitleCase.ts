export const toTitleCase = (str?: string | null) => {
  if (!str) return '';
  return str.replace(
    /\w\S*/g,
    substr => substr.charAt(0).toUpperCase() + substr.substr(1).toLowerCase()
  );
};
