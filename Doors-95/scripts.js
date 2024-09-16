// MAKE ICONS DRAGGABLE TO NEW SPOT WITHOUT MOVING OTHER ICONS??
// MAKE IT SO TRASH AND ANOTHER ICON CANT BE HIGHLIGHTED AT ONCE

//  I MADE ICON AND ICON2 BEHAVE THE SAME WITHIN JAVASCRIPT, 
// BUT THERE ARE SOME DIFFERENCES IN CSS/HTML SO I THOUGHT IT MADE SENSE TO KEEP
// THEM SEPERATE AND JUST REPEAT THE JAVASCRIPT CODE



// DOUBLE CLICK & DRAG PREVENTION
function setupIconInteractions(selector) {
    document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('dblclick', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });

        element.ondragstart = () => false;
    });
}

// ICON, ICON2, TRASH INTERACTIONS
setupIconInteractions('.icon');
setupIconInteractions('.icon2');
setupIconInteractions('.trash');

function setupHighlightInteractions(selector) {
    // REMOVE HIGHLIGHT WHEN ANYWHERE ELSE CLICKED
    document.addEventListener('click', function(event) {
        if (!event.target.closest(selector)) {
            document.querySelectorAll(selector).forEach(element => {
                element.classList.remove('highlighted');
            });
        }
    });

    // CLICK TO HIGHLIGHT
    document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('click', function(event) {
            event.stopPropagation();
            
            document.querySelectorAll(selector).forEach(el => {
                el.classList.remove('highlighted');
            });
            this.classList.add('highlighted');
        });
    });
}

// ICON, ICON2, TRASH HIGHLIGHT
setupHighlightInteractions('.icon');
setupHighlightInteractions('.icon2');
setupHighlightInteractions('.trash');

// CLOCK SCRIPT (DOM)
document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateClock();
    setInterval(updateClock, 1000);
});

// START POPUP
const startElement = document.querySelector('.start');

startElement.addEventListener('mouseover', function() {
    const popup = document.createElement('div');
    popup.textContent = 'Thanks for visiting! If you have any questions about me or my website, please click on the "Contact" section to see how to get in touch.';
    popup.classList.add('popup');
    document.body.appendChild(popup);

    startElement.addEventListener('mouseleave', function() {
        popup.remove();
    });
});

// NIGHT MODE
    const nightModeIcon = document.getElementById('night');


    nightModeIcon.addEventListener('click', function() {

        document.body.classList.toggle('night-mode');

        

    });


