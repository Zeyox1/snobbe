function typeWriter(text, elementId, speed) {
    let i = 0;
    let isDeleting = false;

    function type() {
        const element = document.getElementById(elementId);
        
        if (!isDeleting && i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (isDeleting && i > 0) {
            element.textContent = text.substring(0, i - 1);
            i--;
            setTimeout(type, speed);
        } else if (!isDeleting && i === text.length) {
            setTimeout(() => { 
                isDeleting = true; 
                type(); 
            }, 1000);  
        } else if (isDeleting && i === 0) {
            
            isDeleting = false;
            setTimeout(type, speed);
        }
    }

    type();
}

const typewriterText = "Hi chat";
const typingSpeed = 50; 

window.onload = function() {
    typeWriter(typewriterText, 'typewriter-text', typingSpeed);
};


const bgVideo = document.getElementById('bg-video');
const bgAudio = document.getElementById('bg-audio');
const overlay = document.getElementById('overlay');

bgAudio.volume = 0.1; 


overlay.addEventListener('click', function() {
    overlay.classList.add('hidden');
    bgVideo.play();
    bgAudio.play();
});

const volumeControl = document.getElementById('volume-control');

volumeControl.addEventListener('input', function() {
    const volume = volumeControl.value / 10; 
    bgAudio.volume = volume;
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
