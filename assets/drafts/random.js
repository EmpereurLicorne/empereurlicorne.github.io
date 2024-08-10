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

                effectEnabled = !effectEnabled;
                document.addEventListener('mousemove', updateTorchEffect);
                reactivateTorchEffect();
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

let effectEnabled = false;
let storedMousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // Initialisation à la position centrale

function updateTorchEffect(e) {
    if (!testscript || !effectEnabled) return;

    const isTouchEvent = e.type.startsWith('touch');

    let x, y;

    if (isTouchEvent) {
        const touch = e.touches[0] || e.changedTouches[0];
        x = touch.clientX;
        y = touch.clientY;

        const maxRadius = 1000;
        const radius = Math.min(maxRadius, 0.2 * window.innerWidth);

        const cardEffect = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${radius}px)`;

        document.querySelector('#container').style.background = cardEffect;

        storedMousePosition = { x, y };

        console.log("phone");
    } else {
        x = e.clientX;
        y = e.clientY;

        const maxRadius = 200;
        const radius = Math.min(maxRadius, 0.2 * window.innerWidth);

        const cardEffect = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${radius}px)`;

        document.querySelector('#container').style.background = cardEffect;

        storedMousePosition = { x, y };

        console.log("ordi");
    }
}

function reactivateTorchEffect() {
    if (!testscript || !effectEnabled) return;

    const { x, y } = storedMousePosition;

    const maxRadius = 200;
    const radius = Math.min(maxRadius, 0.2 * window.innerWidth);

    const cardEffect = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${radius}px)`;

    document.querySelector('#container').style.background = cardEffect;
}
function toggleEffect(e) {
    e.preventDefault();
    if (testscript) {
        effectEnabled = !effectEnabled;
        if (!effectEnabled) {
            document.querySelector('#container').style.background = 'rgba(0, 0, 0, 1)';
            document.removeEventListener('mousemove', updateTorchEffect);
        } else {
            document.addEventListener('mousemove', updateTorchEffect);
            reactivateTorchEffect();
        }
    }
}

function updateMousePosition(e) {
    storedMousePosition = { x: e.clientX, y: e.clientY };
}

document.addEventListener('mousemove', updateMousePosition);
document.addEventListener('mousemove', updateTorchEffect);
document.addEventListener('contextmenu', toggleEffect);
