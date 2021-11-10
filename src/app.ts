interface Duck {
  hat: boolean;
  color: string;
  glasses: boolean;
  coat: boolean;
}

const rubberDucky: Duck = {
  hat: false,
  color: 'yellow',
  glasses: false,
  coat: false
}
const ducky = document.getElementById('duck');
ducky.textContent = rubberDucky.color;
console.log(rubberDucky);