import { Component } from "@angular/core";
import { LoginService } from "@boklisten/bl-connect";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "bl-reporter";
  constructor(private loginService: LoginService) {
    this.loginService
      .login("aholskil@gmail.com", "password")
      .then(() => {
        console.log("logged in!");
      })
      .catch(() => {
        console.log("could not login");
      });
  }
}
