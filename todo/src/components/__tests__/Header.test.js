import { render, screen, wait, cleanup } from "../../test-utils";
import React from "react";
import Header from "../Header";



test("Does Header component has an h1 ''User List ?", () => {
  render(<Header />);
  const headingElement = screen.getByText(/User List/i);
  setTimeout(() => {
    console.log("This will run after 2 second");
    expect(headingElement).toBeInDocument();
  }, 2000);
});

it('renders correctly', () => {
  const tree = render(<Header />);

  expect(tree).toMatchSnapshot();
});

// test("Header renders lazy", () => {
//   const { debug } = render(
//     <React.Suspense fallback="Test loading">
//       <Header />
//     </React.Suspense>
//   );
//   debug();
//   // const headingElement = screen.getByText(/User List/i);
//   // expect(headingElement).toBeInDocument();
//   expect(screen.getByText(/User List/i)).toBeInDocument();
// });
