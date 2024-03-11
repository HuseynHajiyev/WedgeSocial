export interface LinkInterface {
  href: string;
  label: string;
  title?: string;
}

export interface LinksArrayInterface {
  title: string;
  links: LinkInterface[];
}

export interface User {
  firstName: string;
  lastName: string;
  DOB: string;
  passwordHash: string;
  email: string;
  phone: string;
  about: string;
}
