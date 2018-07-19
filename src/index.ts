import { html, render } from 'lit-html';
import { Router } from 'lit-route';
import App from './app/app';

const appRoot = document.getElementById('applicationRoot');

if (appRoot) {
    const router = new Router(() => render(App(), appRoot), appRoot);
    router.init();
}