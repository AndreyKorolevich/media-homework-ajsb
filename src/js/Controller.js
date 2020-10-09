export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  start() {
    this.view.showWidget();
  }
}
