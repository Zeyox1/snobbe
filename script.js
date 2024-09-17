// Typewriter effect function
function typeWriter(text, elementId, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById(elementId).textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Customize the typewriter text and speed
const typewriterText = "discord.gg/garagen";
const typingSpeed = 50; // Adjust speed in milliseconds

// Clear the element before typing starts
document.getElementById('typewriter-text').textContent = '';

// Start typing after the page loads
window.onload = function() {
    typeWriter(typewriterText, 'typewriter-text', typingSpeed);
};

// Elements for background video and audio
const bgVideo = document.getElementById('bg-video');
const bgAudio = document.getElementById('bg-audio');
const overlay = document.getElementById('overlay');

// Smooth transition and media start when overlay is clicked
overlay.addEventListener('click', function() {
    // Smooth fade out overlay (blur screen)
    overlay.classList.add('hidden');

    // Start the background video
    bgVideo.play();
    
    // Unmute and play the audio
    bgAudio.play();
});

// Smoke effect for cursor
const smoke = document.getElementById('smoke');

document.addEventListener('mousemove', function(e) {
    smoke.style.left = e.pageX + 'px';
    smoke.style.top = e.pageY + 'px';
});

// Smoke pulse effect
setInterval(() => {
    const clone = smoke.cloneNode();
    document.body.appendChild(clone);
    setTimeout(() => {
        clone.remove();
    }, 1500);  // Remove after the animation completes
}, 100);  // Spawn a new "smoke puff" every 100ms