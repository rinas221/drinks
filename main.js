let drinks =  ['молоко', 'пиво', 'пиво', 'молоко', 'молоко']

for (let drink in drinks) {
    if (drinks[drink] === 'молоко') {
        console.log('хорошо')
    } else {
        console.log('плохо')
    }
}