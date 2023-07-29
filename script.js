const input = document.querySelector('#user-points');
const output = document.querySelector('#user-points-output');
const meter = document.querySelector('#user-points-meter')
input.addEventListener('input', ()=>{
	output.value = input.value
	meter.value = input.value;
});


