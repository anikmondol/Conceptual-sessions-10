// ------------first part-----------------

let count = document.getElementById('count');
let sum = 0;


function clickMe() {
    count.innerText = sum += 1;
}

document.getElementById('minus_btn').addEventListener('click', function () {
    count.innerText = sum -= 1;
})


// ------------seconde part-----------------

let serialCount = 1;


document.getElementById('submit_btn').addEventListener('click', function () {
    const text = document.getElementById('text_area').value;

    const review = document.getElementById('review');
    const p = document.createElement('p');

    if (text === '') {
        alert('please completed the comment section')
    } else {
        p.innerText = `${serialCount}. ${text}`;
        serialCount += 1;
        review.appendChild(p)

        document.getElementById('text_area').value = '';
    }

})


// --------------bonus part----------------------


document.getElementById('text_area').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const text = document.getElementById('text_area').value;
        const review = document.getElementById('review');
        const p = document.createElement('p');
        console.log(text);
        if (text === '') {
            alert('please completed the comment section')
        } else {
            p.innerText = `${serialCount}. ${text}`;
            serialCount += 1;
            review.appendChild(p)
            document.getElementById('text_area').value = '';
        }

    }
})