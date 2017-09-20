import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Template from './template';
import App from './App';

export default function serverRenderer({clientStats, serverStats}) {
    return (req, res, next) => {
        const context = {},
            helmet = Helmet.renderStatic();
        const markup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context = {context}>
                <App/>
            </StaticRouter>
        );

        res.status(200).send(Template({markup, helmet}))
    }
}