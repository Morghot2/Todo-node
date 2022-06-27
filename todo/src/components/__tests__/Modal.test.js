import MyModal from "../Modal";
import { render, screen, wait, cleanup, act, waitFor } from "../../test-utils";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

test("Does Modal contains 'User list heading' ?", () => {
  setTimeout(() => {
    const tree = act(() => render(<MyModal />));
    const element = screen.findByTestId("modal-heading");
    expect(element.toHaveTextContent("User details"));
  });
}, 2000);

test("Does Modal component contains 'User list heading' ?", async () => {
  const modal = act(() => render(<MyModal />));
  const element = await waitFor(screen.findByTestId("modal-heading"));
  expect(element.toHaveTextContent("User details"));
});

// setTimeout(() => {a
//   expect(tree.findByText(/User details/i)).toBe();
// }, 2000)

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         data: button,
//       }),
//   })
// );

// describe("Modal", () => {
//   it("Renders properly", async () => {
//     act(() => render(<MyModal />));
//     expect(await screen.findByText(/User details/i)).toBeInDocument();
//   });
// });

// test("renders learn react link", async () => {
//   fetch.mockImplementationOnce(button)
//   const { findByText } = render(<MyModal />);
//   const element = await findByText(/User details/i);
//   expect(element).toBeInTheDocument();
// });
