import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { User } from "../model/User";
import data from "../model/data.json";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  user: User | null = null;

  ngOnInit() {
    this.user = new User(data);
  }
}
