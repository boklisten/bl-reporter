import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { Component, Injectable } from "@angular/core";
import { LoginService } from "@boklisten/bl-connect";

@Component({ selector: "app-reporter", template: "" })
class ReporterStubComponent {}

@Injectable()
class LoginStubService {
  public login(username: string, password: string): Promise<any> {
    return new Promise(() => {});
  }
}

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ReporterStubComponent],
      providers: [{ provide: LoginService, useClass: LoginStubService }]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
