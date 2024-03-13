export const hrefToText = (href: string) => {
  if (href === '/') return 'Home';
  return href.charAt(1).toUpperCase() + href.slice(2);
};

export const capitalize = (str: string) => {
  // capitalize each word
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
