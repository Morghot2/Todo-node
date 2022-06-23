
import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import usersApiReducer  from './redux/slices/apiSlice'

// function renderWithProviders(
//     ui,
//     {
//       preloadedState = {},
//       store = configureStore(preloadedState),
//       ...renderOptions
//     } = {}
//   ) {
//     function Wrapper({ children }) {
//       return <Provider store={store}><BrowserRouter>{children}</BrowserRouter></Provider>
//     }
//     return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
//   }
  
function render(ui, { route = '/', initialState = {} } = {}) {
    // window.history.pushState({}, 'Test page', route);
    const store = configureStore({ reducer: usersApiReducer, preloadedState: initialState });

    const Wrapper = ({ children }) => {
        return (
            <Provider store={store}>
                <BrowserRouter>{children}</BrowserRouter>
            </Provider>
        );
    };

    return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };





//PREVIOUS SETUP STARTER
// // test-utils.jsx
// import React from "react";
// import { render as rtlRender } from "@testing-library/react";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// // Import your own reducer
// import usersApiReducer from './redux/slices/apiSlice'


// }

// // re-export everything
// export * from "@testing-library/react";
// // override render method
// export { render }