import { renderCart } from './render.js';
import { adjustQty, confirmRemove, closeForm } from './modal.js';

renderCart();

window.adjustQty = adjustQty;
window.confirmRemove = confirmRemove;
window.closeForm = closeForm;