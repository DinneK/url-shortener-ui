describe("URLs home page flow", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
      statusCode: 200,
      ok: true,
      fixture: "UrlStub",
    });
    cy.wait(500);
    cy.visit("http://localhost:3000");
  });

  it("Should be able to visit the home page and render the correct elements", () => {
    cy.get("h1").contains("URL Shortener");
  });

  it("Should see an existing URL with a title and Urls", () => {
    cy.get("h3")
      .contains("Awesome photo")
      .get("a")
      .contains("http://localhost:3001/useshorturl/1")
      .get("p")
      .contains("https://images.unsplash.com/photo-1");
  });

  it("Should see a form and inputs", () => {
    cy.get('[placeholder="Title..."]')
      .type("A Picture")
      .get('[placeholder="URL to Shorten..."]')
      .type(
        "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"
      )
      .get("button")
      .click();
  });

  it("should be able to display an error when the user does not fill out whole form and the info is rendered", () => {
    cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
      id: 2,
      long_url:
        "https://media.istockphoto.com/id/1349363968/photo/giraffe-riding-an-elephant-on-field-friendship-and-cooperation-concept.jpg?b=1&s=170667a&w=0&k=20&c=f5K4jUJ3fT55j7EV_wAcu3yjWHP3xPJ0gg9SPo9krEE=",
      short_url: "http://localhost:3001/useshorturl/2",
      title: "Blargadi Boo",
    });
    cy.visit("http://localhost:3000/report");
    cy.get('[placeholder="Title..."]')
      .type("Blargadi Boo")
      .get('[placeholder="URL to Shorten..."]')
      .type(
        "https://media.istockphoto.com/id/1349363968/photo/giraffe-riding-an-elephant-on-field-friendship-and-cooperation-concept.jpg?b=1&s=170667a&w=0&k=20&c=f5K4jUJ3fT55j7EV_wAcu3yjWHP3xPJ0gg9SPo9krEE="
      )
      .get("form > button")
      .click();
    cy.get(":nth-child(2) > h3")
      .contains("Blargadi Boo")
      .get(":nth-child(2) > p")
      .contains("https://media.istockphoto.com/id");
  });
});
