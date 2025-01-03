import { View } from '../core/View.js';

export class HomeView extends View {
  async render() {
    const element = document.createElement('div');
    element.innerHTML = `
      <h1>Welcome to Vanilla JS SPA</h1>
      <p>This is the home page</p>
    `;
    return element;
  }
}
