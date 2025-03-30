const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

const yesButton = document.getElementById('yesButton');
yesButton.addEventListener('click', () => {
    alert("Yay! I'm so happy you said yes!");
});

noButton.addEventListener('click', () => {
    alert("Oh no! But I still love you!");
});
