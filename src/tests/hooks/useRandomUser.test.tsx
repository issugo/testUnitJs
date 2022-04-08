// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
  rest.get(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      return res(
        ctx.json({
          results: [
              {
                  gender: "female",
                  name: {
                      title: "Mrs",
                      first: "Ester",
                      last: "Aziz"
                  },
                  location: {
                      street: {
                          number: 2119,
                          name: "Midtoddveien"
                      },
                      city: "Rod",
                      state: "Nord-Trondelag",
                      country: "Norway",
                      postcode: "0358",
                      coordinate: {
                          latitude: "53.2968",
                          longitude: "134.54"
                      },
                      timezone: {
                          offset: "+2:00",
                          description: "Kaliningrad, South Africa"
                      }
                  },
                  email: "ester.aziz@gmail.com",
                  picture: {
                      large: "https://randomuser.me/api/portraits/women/91.jpg",
                      medium: "https://randomuser.me/api/portraits/med/women/91.jpg",
                      thumbnail: "https://randomuser.me/api/portraits/thumb/women/91.jpg"
                  }
              }
          ]
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load user mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Utilisateur/i));
  expect(container.getElementsByTagName("img").length).toBe(1);
  expect(container.getElementsByTagName("p").length).toBe(2)
  expect(container.getElementsByTagName("p")[1].textContent).toBe("Mrs Ester Aziz")
});
