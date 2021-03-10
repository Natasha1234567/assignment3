export interface User {
    id: number;
    name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    website: string;
    address: {
      city: string;
      geo: { lat: string, lng: string },
      street: string,
      suite: string,
      zipcode: string
    };
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };
  }
