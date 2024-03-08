
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


const { screen } = require('@testing-library/dom');
const fs = require('fs');
const { JSDOM } = require('jsdom');


function loadHtmlFile(filePath) {
    const html = fs.readFileSync(filePath, 'utf-8');
    return new JSDOM(html).window.document;
}

test('Check if input and label are available', () => {
    const document = loadHtmlFile('index.html');

    const navBar = document.querySelector('nav');
    expect(navBar).toBeTruthy();

    const cardLength = document.querySelectorAll('.card');
    expect(cardLength.length).toBeGreaterThanOrEqual(3);

    const images = document.querySelector('img');
    expect(images).toBeTruthy();

    const footer = document.querySelector('footer');
    expect(footer).toBeTruthy();
});

describe('CSS Grid and Flexbox Test', () => {
    let css;

    beforeAll(() => {
        css = fs.readFileSync('./style.css', 'utf8');
    });

    it('should contain grid property', () => {
        expect(css).toMatch(/display:\s*grid;/);
    });

    it('should contain flex property', () => {
        expect(css).toMatch(/display:\s*flex;/);
    });
});
