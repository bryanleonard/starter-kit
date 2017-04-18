import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	});
});

describe ('index.html', () => {
	it('should say hello', (done) => {
		const index = fs.readFileSync('./src/index.html', "utf-8");

		jsdom.env(index, function(err, window) {
			const h1 = window.document.getElementsByTagName('h1')[0];

			expect(h1.innerHTML).to.equal("Welcome!");
			done();
			window.close() //free up memory
		});
	})
})

describe ('index.html', () => {
	it('h2 should say Users', (done) => {
		const index = fs.readFileSync('./src/index.html', "utf-8");

		jsdom.env(index, function(err, window) {
			const h2 = window.document.getElementsByTagName('h2')[0];

			expect(h2.innerHTML).to.equal("Users");
			done();
			window.close() //free up memory
		});
	})
})
