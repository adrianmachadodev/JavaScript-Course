
const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]

const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

const getUser = (id, cb) => {
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject) => {
        if (!user) reject(`Doesn't exist a user with id ${id}`)
        else resolve(user);
    })


}

// Una promesa es un objeto con 2 callbacks internos 

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)

    return promise = new Promise((resolve, reject) => {
        if (!email) reject(`${user.name} hasn't email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email,
        })
    })

}


//Esto se utiliza
/* getUser(1) 
    .then(user => getEmail(user))
    .then(res  => console.log(res))
    .catch(err => console.log(err)) // usar catch para manejar erroress */

getUser(2)
    .then(getEmail)
    .then(console.log)
    .catch(console.log) // usar catch para manejar erroress

/* if (err) return console.log(err)
    getEmail(user, (err, res) => {
        if (err) return console.log(err)
        console.log(res)
    })
 */