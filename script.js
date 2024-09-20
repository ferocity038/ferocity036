const canvas = document.getElementById('FEROCITY');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(?)+';
const nums = '0123456789';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(?)+0123456789'
const fontSize = 20;
const columns = canvas.width/fontSize;
const rainDrops = [];
for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}
const draw = () => {
context.fillStyle = 'rgba(0, 0, 0, 0.05)';
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = 'red';
context.font = fontSize + 'px monospace';
for(let i = 0; i < rainDrops.length; i++)
{
const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.963){
rainDrops[i] = 0;
}
rainDrops[i]++;
}
};
setInterval(draw, 20);
