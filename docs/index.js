const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
	});
});

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active');
	});
}

// Function to create heart effects
function createHearts(event) {
	const heart = document.createElement('span');
	heart.className = 'heart';
	heart.innerHTML = '❤️';
	const x = event.clientX, y = event.clientY;	// Set position where clicked
	const duration = Math.random() * 2 + 1; // Set animation duration between 1 and 3 seconds
	// Apply styles:
	heart.style.left = `${x}px`;
	heart.style.top = `${y}px`;
	heart.style.animationDuration = `${duration}s`;
	document.body.appendChild(heart);	// Add heart to the document
	setTimeout(() => {	// Remove heart after animation
		heart.remove();
	}, duration * 1000);
}

// Add an event listener to the entire document for creating hearts on click
document.addEventListener('click', createHearts);