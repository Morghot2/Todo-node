import { render, screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

test("Does Header component has an h1 ''User List ?", () => {
    const initialState = {output:10}
    const mockStore = configureStore()
    let store,wrapper
    store = mockStore(initialState)

    render(<Provider store={store}><Header /></Provider>)
    const headingElement = screen.getByText(/User List/i)
    expect(headingElement).toBeInDocument()
})

