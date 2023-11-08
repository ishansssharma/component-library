const overviewButtons = document.querySelectorAll(".overview__button");

const components = document.querySelectorAll(".component");

overviewButtons.forEach(button => {
	button.addEventListener("click", displayComponent)

})


function displayComponent(event) {
	const button = event.currentTarget;
	const componentToDisplay = button.dataset.component;

	components.forEach(component => {
		component.classList.remove("component--visible");

		if (component.dataset.name === componentToDisplay) {
			component.classList.add('component--visible');
		}

	})


	overviewButtons.forEach(button => {
		button.classList.remove("overview__button--active");

		if (button.dataset.component === componentToDisplay) {
			button.classList.add("overview__button--active");
		}

	})
}


const accordionContainer = document.querySelector(".accordion__expanded");

const accordionExpanded = document.querySelector(".accordion__expanded--info--visible");

accordionContainer.addEventListener("click", function () {

	accordionExpanded.classList.toggle("accordion__expanded--info--visible");
});

const clickedMessage = document.querySelector(".clicked__button");
const activeButton = document.querySelector(".click__me--active");

activeButton.addEventListener("click", () => {
	clickedMessage.classList.add("clicked__button--visible");

	setTimeout(() => {
		clickedMessage.classList.remove("clicked__button--visible");
	}, 1200);
});

const toastGreen = document.querySelector(".toast__normal");
const buttonToastGreen = document.querySelector(".toast-button__green");




buttonToastGreen.addEventListener("click", () => {
	toastGreen.classList.add("toast__normal--visible");
	setTimeout(() => {
		toastGreen.classList.remove("toast__normal--visible")
	}, 2000);
});

const toastOrange = document.querySelector(".toast__advarsel");
const buttonToastOrange = document.querySelector(".toast-button__orange");

buttonToastOrange.addEventListener("click", () => {
	toastOrange.classList.add("toast__advarsel--visible");
	setTimeout(() => {
		toastOrange.classList.remove("toast__advarsel--visible")
	}, 2000);
});

const toastRed = document.querySelector(".toast__error");
const buttonToastRed = document.querySelector(".toast-button__red");

buttonToastRed.addEventListener("click", () => {
	toastRed.classList.add("toast__error--visible");
	setTimeout(() => {
		toastRed.classList.remove("toast__error--visible")
	}, 2000);
});

const createToast = () => {

}






const animalChips = document.querySelectorAll(".choicechip-animal");

animalChips.forEach(animalChip => {
	animalChip.addEventListener("click", () => {
		animalChip.classList.toggle("choicechip-animal--click");
	})

});