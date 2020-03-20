import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import store from './store';

import Layout from './components/layout'
import DressBuilderPage from './components/dressBuilderPage';
import theme from './components/theme';

const App = () => {
    return (
        <Provider store={store} >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout >
                    <DressBuilderPage />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
