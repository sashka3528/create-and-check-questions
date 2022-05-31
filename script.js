
let test = document.querySelector('#test');
let button = document.querySelector('#button');

let questions = [
        {
                text: 'вопрос 1?',
                right: 0,
                variants: [
                        'вариант 1',
                        'вариант 2',
                        'вариант 3'
                ]
        },
        {
                text: 'вопрос 2?',
                right: 1,
                variants: [
                        'вариант 1',
                        'вариант 2',
                        'вариант 3'
                ]
        },
        {
                text: 'вопрос 3?',
                right: 2,
                variants: [
                        'вариант 1',
                        'вариант 2',
                        'вариант 3'
                ]
        },
];

let i = 1;
let j = 0;

for (let question of questions) {
        let div = document.createElement('div');
        div.classList.add('question' + i);

        let p = document.createElement('p');

        p.innerHTML = question.text;
        div.append(p);

        for (let variant of question.variants) {
                let label = document.createElement('label');
                label.innerHTML = ' ' + variant;

                let input = document.createElement('input');
                input.type = 'radio';
                input.name = i;

                label.prepend(input);
                div.append(label);
        }
        

        test.append(div);
        i++;
}

function checkQuest(quest) {
        let inputs = quest.querySelectorAll('input');
        let right = questions[j].right

        if (inputs[right].checked) {
                inputs[right].parentElement.classList.add('right');
        } else {
                for (let input of inputs) {
                        if (input.checked) {
                                input.parentElement.classList.add('wrong');
                        }
                }
        }
        
        j++;
} 

button.addEventListener('click', function remove() {
        let quest1 = test.querySelector('.question1');
        let quest2 = test.querySelector('.question2');
        let quest3 = test.querySelector('.question3');

        checkQuest(quest1);
        checkQuest(quest2);
        checkQuest(quest3);

        this.removeEventListener('click', remove);
});