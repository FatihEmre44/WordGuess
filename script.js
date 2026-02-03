const inputs = document.querySelector('.inputs');
const kalan = document.querySelector('.guess-left span');
const ipucu = document.querySelector('.hint span');
const false1 = document.querySelector('.wrong-letter span');
const answer = document.querySelector('.answer-input');
const resetBtn = document.querySelector('.reset-btn');

let hak = 12;
const yanlis = [];
let words = '';
let dogru=[];
function resetgame() {
    let rast = wordList[Math.floor(Math.random() * wordList.length)];
    words = rast.word;
    const hint = rast.hint;

    hak = 5; // her sıfırlamada hak yenilenmeli
    yanlis.length = 0; // yanlış harf listesi temizlenmeli

    kalan.textContent = hak;
    ipucu.textContent = hint;
    false1.textContent = '';

    let html = '';
    for (let i = 0; i < words.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}

function game(a) {
    let key = a.target.value.toLowerCase(); // harf küçük olsun
    answer.value = ''; // yazdıktan sonra temizle

    if (key.match(/^[a-z]$/)) {
        if (words.includes(key)&&!yanlis.includes(key)) {
            for (let i = 0; i < words.length; i++) {
                if (words[i] === key) {
                    inputs.querySelectorAll('input')[i].value = key;
                    dogru.push(key);
                }
            }
        } else {
            hak--;
            yanlis.push(key);
            kalan.textContent = hak;
            false1.textContent = yanlis.join(', ');
        }
    }
    if(dogru.length===words.length){
        alert('Bravo kelime='+words);
        resetgame();
    }
    else if(hak<1){
        alert('Hakkiniz kalmadi kelime='+words)
        resetgame();
    }
  
}

resetBtn.addEventListener('click', resetgame);
answer.addEventListener('input', game);
document.addEventListener('keydown', () => answer.focus());
resetgame();

