export const hrefToText = (href: string) => {
  if (href === '/') return 'Home';
  return href.charAt(1).toUpperCase() + href.slice(2);
};
