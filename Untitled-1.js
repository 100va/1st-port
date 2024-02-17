let yourName = "";
function welcome(yourName) {
    const one = `I like you ${yourName} so I want to say hello`;
    const two = `You dont know me huh!! So let me know u more ${yourName}!`
    const three = `Hi good new buddy! I'm here for u ><`
    const responses = [one, two, three]
    let i = Math.floor(Math.random() * 2)
    console.log(responses[i]);
}
welcome('Brick')