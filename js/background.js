VANTA.NET({
    el: 'body',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xffffff,
    backgroundColor: 0x0,
    points: 20.00,
    maxDistance: 10.00,
    spacing: 15.00
});

let html = document.getElementsByTagName('html')[0];
if (html.scrollHeight <= html.clientHeight) {
    html.style.height = '100%';
    document.getElementsByTagName('body')[0].style.height = '100%';
    document.getElementsByClassName('content')[0].style.height = '90%';
}