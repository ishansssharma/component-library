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