export default class View {
  constructor(container) {
    this.container = container;
    this.addTicket = this.addTicket.bind(this);
  }

  showWidget() {
    const widget = document.createElement('div');
    widget.classList.add('widget');
    widget.innerHTML = `
      <div class="list"></div>
      <div class="footer">
      <form class="form">
        <input class="form-input" name="input" type="text">
      </form>
      <div class="actions">
        <div class="video"><img src="../../pic/camcorder.png"></div>
        <div class="audio"><img src="../../pic/microphone.png"</div>
      </div>
      </div>
    `;

    this.container.appendChild(widget);
    document.querySelector('.video').addEventListener('click', () => {
      console.log('df');
    });
    document.querySelector('.form').addEventListener('submit', this.addTicket);
  }

  addTicket(event) {
    event.preventDefault();
    const text = event.target.input.value;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.showTicket(text, latitude.toFixed(5), longitude.toFixed(5));
        }, (error) => {
          this.showModal();
          console.error(error);
        },
      );
    }
  }

  resetInput() {
    this.container.querySelector('.form-input').value = '';
  }

  showTicket(text, latitude, longitude) {
    const lilst = document.querySelector('.list');
    const ticket = document.createElement('div');
    ticket.classList.add('ticket');
    ticket.innerHTML = `
       <div class="text">${text}</div>
       <div class="date">${new Date().toLocaleString()}</div>
       <div class="geo">[${latitude},${longitude}]</div>
    `;
    lilst.insertAdjacentElement('afterbegin', ticket);
    this.resetInput();
  }

  showModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-text">Something is wrong  
      <p>Sorry, but we can't determine your location, 
         please give us permission on use geolocation, 
         or text your coordinates
      </p>
      <p>Comma-separated latitude and longitude</p>
      <form class="modal-form">
        <input name="modal" type="text">
        <button type="reset" class="cancel">Cancel</button>
        <button type="submit" class="ok">Ok</button>
      </form>
      </div>
    `;
    this.container.querySelector('.widget').appendChild(modal);
    this.container.querySelector('.modal-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const value = event.target.modal.value.split(',');
      const latitude = value[0].trim();
      const longitude = value[1].trim();
      const text = document.querySelector('.form-input').value;

      this.hideModal();
      this.showTicket(text, latitude, longitude);
    });

    this.container.querySelector('.modal-form').addEventListener('reset', (event) => {
      event.preventDefault();
      this.hideModal();
    });
  }

  hideModal() {
    this.container.querySelector('.modal').remove();
    this.resetInput();
  }

  // showError(target, text) {
  //   target.focus();
  //   const error = document.createElement('div');
  //   error.dataset.id = 'error';
  //   error.className = 'form-error';
  //   error.textContent = `${text}`;
  //
  //   document.body.appendChild(error);
  //   const { top, left } = target.getBoundingClientRect();
  //   error.style.top = `${window.scrollY + top - target.offsetHeight / 2 + error.offsetHeight}px`;
  //   error.style.left = `${window.scrollX + left}px`;
  // }
  //
  // deleteError() {
  //   if (document.querySelector('.form-error')) {
  //     document.querySelector('.form-error').remove();
  //   }
  // }
}
