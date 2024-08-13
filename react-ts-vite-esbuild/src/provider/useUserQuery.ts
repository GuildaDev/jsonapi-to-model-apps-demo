import { useQuery } from "@tanstack/react-query";
import { User } from "../model/User";

const response = {
  "data": {
    "type": "users",
    "id": "1",
    "attributes": {
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
    },
    "relationships": {
      "address": {
        "data": {
          "type": "addresses",
          "id": "1",
        },
      },
      "company": {
        "data": {
          "type": "companies",
          "id": "1",
        },
      },
    },
  },
  "included": [
    {
      "type": "addresses",
      "id": "1",
      "attributes": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496",
        },
      },
    },
    {
      "type": "companies",
      "id": "1",
      "attributes": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets",
      },
    },
  ],
};

export function useUserQuery() {
  return useQuery({
    queryKey: ["user", 1],
    queryFn: async () => {
      const requestMock = new Promise((resolve) => {
        setTimeout(() => {
          resolve(response);
        }, 100);
      });

      const data = await requestMock;
      const user = new User(data);
      return user;
    },
  });
}
