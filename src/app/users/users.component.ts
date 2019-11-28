import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  userName = "Lorem";
  users = ["Jonh Doe", "Juan Perez", "Efren Almanza"];

  constructor() {}

  ngOnInit() {}

  addUser() {
    console.log("He sido cliqueado", this.userName);
    this.users.push(this.userName);
  }
}
