const fs = require('fs');
const path = require('path');
const { setDefaultTimeout, After, AfterAll, BeforeAll, Before } = require('cucumber');
const { client,createSession, closeSession, startWebDriver,stopWebDriver } = require('nightwatch-api');


const attachedScreenshots = getScreenshots();

function getScreenshots() {
    try {
      const folder = path.resolve(__dirname, 'screenshots');
  
      const screenshots = fs.readdirSync(folder).map(file => path.resolve(folder, file));
      return screenshots;
    } catch (err) {
      return [];
    }
}

setDefaultTimeout(60000);

BeforeAll(async () => {
await startWebDriver({env:process.env.NIGHTWATCH_ENV || 'chrome'});
});

Before(async () => {
    await createSession();
});

After(async () => {
    // Delete cookies.
    await client.deleteCookies();
    return Promise.all(
        getScreenshots()
          .filter(file => !attachedScreenshots.includes(file))
          .map(file => {
            attachedScreenshots.push(file);
            return this.attach(fs.readFileSync(file), 'image/png');
          })
      );
});

AfterAll(async () => {
    await closeSession();
    await stopWebDriver();
});


