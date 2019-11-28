import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private name = "Efren";

  person = {
    name: "Efren",
    lastname: "Almanza Lamas",
    email: "contacto@spyrocode.com"
  };

  getName() {
    return this.name;
  }
}
