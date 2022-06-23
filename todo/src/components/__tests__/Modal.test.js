import MyModal from "../Modal";
import { render, screen, wait, cleanup } from "../../test-utils";








test("Does Modal contains 'User list heading' ?", async () => {
  render(<MyModal />);

  expect(await screen.getByText(/User details/i)).toBeInDocument();

});
