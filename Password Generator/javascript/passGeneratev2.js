let password = '';
let p = document.getElementById('password');
p.innerHTML = 'Your password will appear here.';

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialChars = '!@#$%+&*(){}[]-_';
const numbers = '0123456789';

let parameters = {
    passLength: 12,
    lowerCase: true,
    specialChar: true,
    upperCase: true,
    numbers: true
};

function getParameters(){
    parameters['passLength'] = document.getElementById('passwordLength').value;
    parameters['lowerCase'] = document.getElementById('lowerCase').checked;
    parameters['specialChar'] = document.getElementById('specialChar').checked;
    parameters['upperCase'] = document.getElementById('uppercaseChar').checked;
    parameters['numbers'] = document.getElementById('numbers').checked;
    password = '';
    verifyLength();
}

function verifyLength(){
    if(parameters.lowerCase !== true && parameters.specialChar !== true && parameters.upperCase !== true && parameters.numbers !== true){
        p.value = 'Please set some parameter.';
        return console.log('Sem parâmetro');
    }
    if(parameters.passLength <= 0){
        p.value = 'Congratulations, you has been created a blank password :)';
    }else if(parameters.passLength >= 100){
        alert('This is really necessary?');
        generate();
    }else {
        generate();
    }
}

function generate(){
    let key = 0;
    let keyMultiplier = 4;
    for(let i = 0; password.length <= parameters.passLength; i++){
        if(password.length <= parameters.passLength){
            key = Math.floor(Math.random() * keyMultiplier);
            //LowerCase
            if(parameters.lowerCase === true){
                if(key === 0){
                    password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
                }else if(key !== 0){
                    key = Math.floor(Math.random() * keyMultiplier);
                }
            }
            //Special Characters
            if(parameters.specialChar === true){
                if(key === 1){
                    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
                } else if(key !== 1){
                    key = Math.floor(Math.random() * keyMultiplier);
                }
            }
            //UpperCase
            if(parameters.upperCase === true){
                if(key === 2){
                    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
                }else if(key !== 2){
                    key = Math.floor(Math.random() * keyMultiplier);
                }
            }
            //Numbers
            if(parameters.numbers === true){
                if(key === 3){
                    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                } else if(key !== 3){
                    key = Math.floor(Math.random() * keyMultiplier);
                }
            }
        }
    }
    p.value = password.substring(0, parameters.passLength);
}