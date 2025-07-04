const div = document.getElementById("select");
for (let i = 0; i < 6; i++) {
    const label = document.createElement('label');
    label.innerHTML = `<p>${i + 1}</> <input type='number' placeholder='Anzahl' id='input_${i + 1}'<br>`
    div.appendChild(label);
    div.appendChild(document.createElement('br'));
}
const button = document.createElement('button');
button.id = 'calc';
button.innerText = "Berechnen";
div.appendChild(button);
button.addEventListener('click', function() {
    ids = [readAll('input_1'), readAll('input_2'), readAll('input_3'), readAll('input_4'), readAll('input_5'), readAll('input_6')]
    val = [];
    for (let i = 0; i < 6; i++) {
        val.push(Number(ids[i].value));
    }
    menge = 0;
    for (let i = 0; i < 6; i++) {
        menge = menge + val[i];
    }
    calculate = (val[0] + 2 * val[1] + 3 * val[2] + 4 * val[3] + 5 * val[4] + val[5] * 6) /menge;
    const p = document.getElementById('result');
    p.innerText = calculate;
})
function readAll(id) {
    return document.getElementById(String(id));
}