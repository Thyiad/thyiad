import React, { FC } from 'react';
import { render, hydrate } from 'react-dom';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { loadableReady } from '@loadable/component';
import Index from './index';

if (process.env.SYS_TYPE === 'ssr') {
    loadableReady(() => {
        // hydrate(<AppBrowser />, document.getElementById('root'));
        hydrateRoot(document.getElementById('root'), <Index />);
    });
} else {
    // render(<AppBrowser />, document.getElementById('root'));
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<Index />);
}
