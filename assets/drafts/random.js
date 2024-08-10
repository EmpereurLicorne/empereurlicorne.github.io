let clickCount = 0;
let switchLinkVisible = false;
let testscript = false

function createSwitchLink() {
    const topPart = document.querySelector('.top-part');

    if (!document.getElementById('switch-link')) {
        const switchContainer = document.createElement('div');
        switchContainer.className = 'switch on';
        switchContainer.id = 'switch-link';

        const slider = document.createElement('span');
        slider.className = 'slider';

        const switchLink = document.createElement('a');
        switchLink.href = '#';

        switchContainer.appendChild(slider);
        switchContainer.appendChild(switchLink);

        topPart.appendChild(switchContainer);

        switchContainer.addEventListener('click', function() {
            if (switchContainer.classList.contains('on')) {
                switchContainer.classList.remove('on');
                 //switch désactivé

                
                var newStyle = document.getElementById("style");
                newStyle.href = "assets/drafts/temp.css";

                var newDiv = document.createElement('div');
                newDiv.id = 'container';

                var pageDiv = document.querySelector('.page');
                pageDiv.parentNode.insertBefore(newDiv, pageDiv);

                testscript = true


            } else {
                switchContainer.classList.add('on');
                //switch activer
                location.reload();
            }
        });
    } else {
        const switchContainer = document.getElementById('switch-link');
        if (switchLinkVisible) {
            switchContainer.style.display = 'none';
            switchLinkVisible = false;
        } else {
            switchContainer.style.display = 'block';
            switchLinkVisible = true;
        }
    }
}

const imgElement = document.getElementById('profile-image');
if (imgElement) {
    imgElement.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 3) {
            createSwitchLink();
            clickCount = 0;
        }
    });
}

let effectEnabled = true;

function updateTorchEffect(e) {
    if (!testscript || !effectEnabled) return;

    const x = e.clientX;
    const y = e.clientY;
    
    const maxRadius = 200;
    const radius = Math.min(maxRadius, 0.2 * window.innerWidth);
    
    const cardEffect = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${radius}px)`;

    document.querySelector('#container').style.background = cardEffect;
}

document.addEventListener('mousemove', updateTorchEffect);

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    if (testscript) {
        effectEnabled = !effectEnabled;
        if (!effectEnabled) {
            document.querySelector('#container').style.background = 'rgba(0, 0, 0, 1)';
        } else {
            document.addEventListener('mousemove', updateTorchEffect);
        }
    }
});

document.addEventListener('wheel', function(e) {
    e.preventDefault();
}, { passive: false });
