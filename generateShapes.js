function generateSquare(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="70,10 70,170 230,170 230,10" fill="${data.shape_color}"/>
    <text x="150" y="110" font-size="45" text-anchor="middle" fill="${data.text_color}">${data.text}</text>
</svg>`
}

function generateTriangle(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 70,170 230,170" fill="${data.shape_color}"/>
    <text x="150" y="130" font-size="45" text-anchor="middle" fill="${data.text_color}">${data.text}</text>
</svg>`

}

function generateCircle(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${data.shape_color}" />
    <text x="150" y="115" font-size="45" text-anchor="middle" fill="${data.text_color}">${data.text}</text>
</svg>`
}

module.exports = { generateSquare, generateTriangle, generateCircle };
