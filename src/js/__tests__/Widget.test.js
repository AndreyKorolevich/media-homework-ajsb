import Widget from "../Widget";
const widget = new Widget();

test('should get array with string', () => {
  const received = widget.checkValidity('51.50851, -0.12572');
  expect(received[0]).toBe('51.50851, -0.12572');
});

test('should get array with string', () => {
  const received = widget.checkValidity('51.50851,-0.12572');
  expect(received[0]).toBe('51.50851,-0.12572');
});

test('should get array with string', () => {
  const received = widget.checkValidity('[51.50851, -0.12572]');
  expect(received[0]).toBe('[51.50851, -0.12572]');
});

test('should get null', () => {
  const received = widget.checkValidity('[51.50851. -0.12572]');
  expect(received).toBe(null);
});

test('should get null', () => {
  const received = widget.checkValidity('[51,50851, -0.12572]');
  expect(received).toBe(null);
});

test('should get null', () => {
  const received = widget.checkValidity('[51.50851, --0.12572]');
  expect(received).toBe(null);
});

test('should get null', () => {
  const received = widget.checkValidity('[, -0.12572]');
  expect(received).toBe(null);
});

test('should get null', () => {
  const received = widget.checkValidity('[51.50851,]');
  expect(received).toBe(null);
});
