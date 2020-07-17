
function generateValue() {
    return ((Math.random(200) * 1000)).toPrecision(3)
}
function addText(event) {
    let state = document.getElementById('text')
    let value = state.textContent = generateValue();
    localStorage.state = value;
}
function loadLocal(params) {
    document.getElementById('text').textContent = localStorage.state
}
