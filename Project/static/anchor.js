var anchors = Array.from(document.getElementsByClassName('anchors'));
var checkbox = Array.from(document.getElementsByClassName('checkbox'))[0];

anchors.forEach(element => {
    element.addEventListener('click', () => {
        checkbox.checked = false;
    })
})