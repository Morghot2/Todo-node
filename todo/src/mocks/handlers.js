import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5001/", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "1",
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          age: 27,
        },
        {
          id: "2",
          firstName: "Lech",
          lastName: "Nowak",
          email: "nowaklech@gmail.com",
          age: 25,
        },
        {
          id: "3",
          firstName: "Jan",
          lastName: "Kowalski",
          email: "jankowalski@gmail.com",
          age: 43,
        },
      ]),
      ctx.delay(150)
    );
  }),
  rest.get("http://localhost:5001/button", (res, req, ctx) => {
    return res(
      ctx.json({
        show: true,
        type: "new",
      }),
      ctx.delay(150)
    );
  }),
  rest.get("http://localhost:5001/currentuser", (res, req, ctx) => {
    return res(ctx.json({ user: 1 }), ctx.delay(150));
  }),
];
 