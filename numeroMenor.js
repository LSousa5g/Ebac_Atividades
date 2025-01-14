const form = document.getElementById('formValida');
const num1 = document.getElementById('numero1'); 
const num2 = document.getElementById('numero2');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const num1 = document.getElementById('numero1'); 
    const num2 = document.getElementById('numero2');  
    const mensagemNumMenor = `O primeiro numero: <b>${num1.value}</b> é maior que o segundo numero: <b>${num2.value}</b> coloque um numero menor`;
    const segundoNumeroMaior = `O primeiro numero: <b>${num1.value}</b> é menor que o numero numero: <b>${num2.value}</b> parabens!`;

    if(num1.value > num2.value) {

        const mensagemNumeroValido = document.querySelector('.numMenor');
        mensagemNumeroValido.innerHTML = mensagemNumMenor;
        mensagemNumeroValido.style.display = 'block';
        num1.style.border = '1px solid red';

    } else{
        const mensagemNumeroInvalido = document.querySelector('.numMaior');
        mensagemNumeroInvalido.innerHTML = segundoNumeroMaior;
        mensagemNumeroInvalido.style.display = 'block';
}  
})

num1, num2.addEventListener('change', function(e) {
    console.log(e.target.value);

if(num1.value > num2.value) {
    
    num1.classList.add('erro');
    document.querySelector('.numMenor').style.display = 'block';
} else{
    num1.classList.remove('erro');
    document.querySelector('.numMenor').style.display = 'none';}
});
