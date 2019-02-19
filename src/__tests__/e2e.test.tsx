import puppeteer from 'puppeteer';

it('Should add to cart and checkout', async () => {
	let browser = await puppeteer.launch({
		headless: true
	});
	let page = await browser.newPage();
	page.emulate({
		viewport: {
			width: 500,
			height: 2400
		},
		userAgent: ''
	});
	await page.goto('http://localhost:3000/');
	await page.waitForSelector('.product');
	let input = await page.$('.product-input');
	let addToCartBtn = await input!.$('.btn');
	await addToCartBtn!.click();

	await page.click('.checkout');
	await page.waitForSelector('#checkout-sum-wrap');
	let sumwrap = await page.$eval('#checkout-sum-wrap', el => el.innerHTML);
	expect(sumwrap).toBe('Total: $2.99');

	let checkoutFooter = await page.$('#checkout-footer');
	let checkoutButton = await checkoutFooter!.$('button');
	await checkoutButton!.click();

	sumwrap = await page.$eval('#checkout-sum-wrap', el => el.innerHTML);
	expect(sumwrap).toBe('Total: $0.00');
});
