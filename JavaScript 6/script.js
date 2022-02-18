// There are 3 situations.
// The 1st one 
// Just imagine a very bad of them. So, you are under the gun and tring to escape. Every words that you say can help you with it, but if you mistake, you should write a will. The atacker has level of stress from 0 to 3. If stress ups to 2 or 3, you should write a will. If you don't lie to him you will escape.
let info = alert('Паспорт: Вас зовут J/john, и у вас есть 1000 долларов, но у вас нет ни пенни. Ах да, ваш нападавший - (Бездомный) с последнего урока, которого не пустили в клуб. Passport: Your name is J/john, and you have 1000$, but you have not got any penny. Oh yeah, your atacker is а (Homeless) man from the last lesson who was not allowed into the club.')
let stressLvl = 0
let startQ = prompt('What is your name?')
if (startQ === 'John' || startQ === 'john') {
    console.log('I trust you')
} else {
    stressLvl = 1 
    console.log('Atacker s stress:', stressLvl + ',', 'If I were you, I would say only the truth. And yeah, I have checked your passport, asshole');
}
let second = prompt('How much money do you have?')
    if (second >= 100 && second <= 1000) {
        console.log('I trust you, It is the truth. (Not at all, but truth)')
        let atacker = prompt('So, the last question. Who am I?')
        if (atacker === 'Homeless' || atacker === 'homeless') {
            console.log('Oh, you remember me. That is good, you can leave.')
        } else {
            console.log('I count from 5 to 0. BOOOM!')
        }
    } else {
        console.log('Atacker s stress:',stressLvl + 1 + ',', 'BOOOOOOOM!','Are you sirious? I said, I have checked your passport, asshole.')
    }