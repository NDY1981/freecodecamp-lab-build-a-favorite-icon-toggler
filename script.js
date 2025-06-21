const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");

first.addEventListener('click', function () {
	if (first.classList.contains("filled")) {
		first.innerHTML = "&#9825;";
		first.classList.remove("filled");
	} else {
		first.innerHTML = "&#10084;";
		first.classList.add("filled");
	}
});

second.addEventListener('click', function () {
	if (second.classList.contains("filled")) {
		second.innerHTML = "&#9825;";
		second.classList.remove("filled");
	} else {
		second.innerHTML = "&#10084;";
		second.classList.add("filled");
	}
});

third.addEventListener('click', function () {
	if (third.classList.contains("filled")) {
		third.innerHTML = "&#9825;";
		third.classList.remove("filled");
	} else {
		third.innerHTML = "&#10084;";
		third.classList.add("filled");
	}
});