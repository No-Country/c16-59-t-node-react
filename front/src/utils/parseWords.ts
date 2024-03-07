export const unScripted = (text: string) => {
  return text.replace(/-/g, " ");
};

export const parseWords = (text: string) => {
  text = unScripted(text);

  let wordsArray = text.split(" ");

  wordsArray.splice(0, 1);

  const firstWord =
    wordsArray[0].charAt(0).toUpperCase() + wordsArray[0].slice(1);

  return [firstWord, ...wordsArray.slice(1)].join(" ");
};
