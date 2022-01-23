//первый тест на фреймворке TestCafe
import { Selector } from 'testcafe'

fixture `microsoft test(s)`
    .page `https://www.microsoft.com/`;

const searchResult = Selector('#topResultRegion');

//next text of test
test('Our 1st test', async t=> {
    
    await t
    //search "Word"
    .click ('#search')
    .typeText ('#cli_shellHeaderSearchInput', 'Word')
    .pressKey('enter')
    //checking for a match with "Microsoft 365"
    .expect(searchResult.innerText).contains('Microsoft 365')
});
