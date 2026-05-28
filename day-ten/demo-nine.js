class BasePage {
  async navigate() {
    console.log("Base navigation");
  }
}

class LoginPage extends BasePage {
  async navigate() {
    console.log("Login navigation");
  }
}

const loginPage = new LoginPage();
loginPage.navigate();