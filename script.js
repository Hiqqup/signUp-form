const fieldsets = document.querySelectorAll('fieldset');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
let position = 0;
fieldsets[position].classList.add('enabled')
addToChildren(position+1,'right');

nextButton.addEventListener("click",()=> crementPosition(1));
previousButton.addEventListener("click",()=> crementPosition(-1));

function crementPosition(num){

	fieldsets[position].classList.remove('enabled');
	if(num==1){
		addToChildren(position, 'left');
		removeFromChildren(position+num,'right');
	}
	if(num==-1){
		addToChildren(position, 'right');
		removeFromChildren(position+num,'left');
	}
	position+= num;

	fieldsets[position].classList.remove('invisible');
	fieldsets[position].classList.add('enabled');
	if(fieldsets[position+1]){
		addToChildren(position+1, 'right');
	}
	if(fieldsets[position-1]){
		addToChildren(position-1, 'left');
	}
	handleButtons(position);
}
function addToChildren(position, arg){
	fieldsets[position].classList.add('invisible');
	fieldsets[position].childNodes[fieldsets[position].childNodes.length -2].classList.add(arg);
}
function pushNoInvis(position, arg){
	fieldsets[position].childNodes[fieldsets[position].childNodes.length -2].classList.add(arg);
}
function removeFromChildren(position, arg){
	fieldsets[position].childNodes[fieldsets[position].childNodes.length -2].classList.remove(arg);
}

function handleButtons(position){
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
