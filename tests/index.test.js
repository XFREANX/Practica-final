const fs = require('fs');
const path = require('path');

test('La página HTML contiene el texto esperado', () => {
    const filePath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('<h1>¡Hola Mundo!</h1>');
});
