document.querySelector('#loginForm').addEventListener('submit', validare);

function validare(event){
    if(emailOK() && passOK()){
        return true;
    }
    else {
        event.preventDefault();
    }
}

function emailOK(){
    const email = document.querySelector('#exampleInputEmail1');

    if(email.value.endsWith('.ro')){
        email.classList.remove('is-invalid');
        document.querySelector('#emailHelp').classList.add('hidden');
        return true;
    }
    else {
        // atenționare
        document.querySelector('#emailHelp').classList.remove('hidden');
        email.classList.add('is-invalid');
        email.focus();
        return false; 
    }
}

function passOK(){
    const pass = document.querySelector('#exampleInputPassword1');

    if(pass.value.match(/\d/)){
        pass.classList.remove('is-invalid');
        document.querySelector('#passHelp').classList.add('hidden');
        return true;
    }
    else {
        // atenționare
        document.querySelector('#passHelp').classList.remove('hidden');
        pass.classList.add('is-invalid');
        pass.focus();
        return false; 
    }
}

// READ MORE ... SHOW LESS

const moreLess = document.querySelectorAll('span.toggle');

moreLess.forEach(elem => elem.addEventListener('click', toggleArticle));

function toggleArticle(){
    this.classList.toggle('read');
    this.closest('p').querySelector('span').classList.toggle('hidden');
    if(this.classList.contains('read')) {
        this.innerHTML = 'Show less';
    }
    else {
        this.innerHTML = 'Read more ...';
    }
}

// DATA și ORA

const dataOra = document.querySelector('#dataOra');

function ora(){
    let currentDate = new Date();

    let ziua = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'];                
    dataOra.innerHTML = ziua[currentDate.getDay()];

    dataOra.innerHTML += ' --- ' + currentDate.getDate() + '.'
                    + (currentDate.getMonth()+1) + '.'
                    + currentDate.getFullYear();

    let secunde = currentDate.getSeconds();
    if(secunde<10) secunde = '0'+secunde; 

    dataOra.innerHTML += ' --- ' + currentDate.getHours() + ':'
                    + currentDate.getMinutes() + ':'
                    + secunde;

                    + currentDate.getMinutes() + ':'
    
}

// let interval = setInterval(ora, 1000);

// SPREAD și REST    ...

let numere = [3,2,15,7,3];

console.log(Math.max(...numere));

function margini(...args) {
    return args[0] + args[args.length-1]
}

console.log(margini(...numere));


// OPERATORUL TERNAR

// (expresie) ? ceva : altceva

let a = 10;

console.log(a >= 10 ? true : false);