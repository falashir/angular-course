import { Component } from "@angular/core";
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  serverId = 10;
  serverStatus = "offline";

  getServerStatus(){
      return this.serverStatus;
  }
}
