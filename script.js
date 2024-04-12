const hello = document.getElementById('hello');
const languageSelect = document.getElementById('language');

languageSelect.addEventListener('change', () => {
	const language = languageSelect.value;
	switch (language) {
		case 'es':
			hello.innerText = 'Hola';
			break;
		case 'fr':
			hello.innerText = 'Bonjour';
			break;
		default:
			hello.innerText = 'Hello';
	}
});