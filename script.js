const fieldsets = document.querySelectorAll('fieldset');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
let position = 0;
fieldsets[position].classList.add('enabled')

nextButton.addEventListener("click",()=> crementPosition(1));
previousButton.addEventListener("click",()=> crementPosition(-1));

function crementPosition(num){
	position+= num;
	enableCurrentPosition(position);
	switch (position){
		case 0: 
			previousButton.disabled = true;
		break;
		case 1:
			previousButton.disabled = false;
		break;
		case fieldsets.length -2:
			nextButton.disabled = false;
		break;
		case fieldsets.length -1: 
			nextButton.disabled = true;
		break;
	}

}
function enableCurrentPosition(position){
	fieldsets.forEach(fieldset => {
		fieldset.classList.remove('enabled');
	});
	fieldsets[position].classList.add('enabled');
}
const file = document.querySelector("#profile-picture");
const imgPreview = document.querySelector('#picture-preview')
const svg = document.querySelector('#img-alt');
imgPreview.style.display = 'none';
file.addEventListener("change",() => getImgData());
function getImgData() {
	svg.style.display = 'none';
	imgPreview.style.display = 'flex';
  const files = file.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgPreview.src =this.result;
    });    
  }
}

const input = document.querySelector('#user-points');
const output = document.querySelector('#user-points-output');
const meter = document.querySelector('#user-points-meter')
input.addEventListener('input', ()=>{
	output.textContent = input.value + ' / 10';
	meter.value = input.value;
});
const colorContainer = document.querySelector('.color-container')
const colorPicker = document.querySelector('#color');

colorPicker.addEventListener('input', ()=>{
	colorContainer.style.backgroundColor = colorPicker.value;
	document.documentElement.style.setProperty("--user-color", colorPicker.value);
});

const theme = document.querySelector('#theme-button');
theme.addEventListener('click', setTheme);
function setTheme() {
	const root = document.documentElement;
	const newTheme = root.className === 'dark' ? 'light' : 'dark';
	theme.innerHTML = "<span class='material-symbols-outlined'>"+newTheme+"_mode</span>"; 
	root.className = newTheme;
}
document.documentElement.className = 'dark';
