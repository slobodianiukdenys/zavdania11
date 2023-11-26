const fs = require('fs')

let arr = []
let obj = {
    name: '',
    surname: '', 
    birthday: '',
    email: '',
}
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})    

function FillArray(){
    readline.question(`\x1b[32mВведіть ім'я:\x1b[0m `, rl1 => {
        obj.name = rl1

        readline.question(`\x1b[32mВведіть прізвище:\x1b[0m `, rl2 => {
            obj.surname = rl2   

            readline.question(`\x1b[32mВведіть дату народження(рік-місяць-день):\x1b[0m `, rl3 => {
                obj.birthday = rl3

                readline.question(`\x1b[32mВведіть електронну пошту:\x1b[0m `, rl4 => {
                    obj.email = rl4
                    console.log('Дані збережено')
                    readline.close()
                    arr.push(obj)
                    fs.writeFileSync('person.txt', JSON.stringify(arr))
                })
            })
        })    
    })
}
FillArray()

