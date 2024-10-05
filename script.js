// Track mouse movement to create custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Add event listener to the Exit button
document.getElementById("exitButton").addEventListener("click", function () {
    window.location.href = "https://cybermap.kaspersky.com/";
});
