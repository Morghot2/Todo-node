import MyModal from "./helpers/MyModalTest";
import { render, screen, wait, cleanup, act, waitFor } from "../../test-utils";

const button = {
  show: true,
  type: "new",
};

test("Does Modal contains 'User list heading' ?", async () => {
  const tree = render(<MyModal />);
  const element = screen.findByTestId('dupa');

  await waitFor(() => {
    expect(element.toHaveTextContent('User details'));
  });

});

// setTimeout(() => {
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
