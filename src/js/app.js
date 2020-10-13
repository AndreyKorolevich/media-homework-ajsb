import Widget from './Widget';
import camera from '../img/camcorder.png';
import micro from '../img/microphone.png';

const container = document.getElementById('root');
const view = new Widget(container, camera, micro);

view.showWidget();
