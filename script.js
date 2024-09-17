
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


const typewriterText = "discord.gg/garagen";
const typingSpeed = 50; 


document.getElementById('typewriter-text').textContent = '';


window.onload = function() {
    typeWriter(typewriterText, 'typewriter-text', typingSpeed);
};


const bgVideo = document.getElementById('bg-video');
const bgAudio = document.getElementById('bg-audio');
const overlay = document.getElementById('overlay');


overlay.addEventListener('click', function() {
    overlay.classList.add('hidden');
    bgVideo.play();
    bgAudio.play();
});


const smoke = document.getElementById('smoke');

document.addEventListener('mousemove', function(e) {
    smoke.style.left = e.pageX + 'px';
    smoke.style.top = e.pageY + 'px';
});


setInterval(() => {
    const clone = smoke.cloneNode();
    document.body.appendChild(clone);
    setTimeout(() => {
        clone.remove();
    }, 1500);  
}, 100);  