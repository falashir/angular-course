import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNew = false;
  resetNotAllow = true;
  serverCreation = "No Servers";
  serverName = "initName";
  username = "";
  createServer = false;
  servers = ['server 1'];
  displayMark = true;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNew = true;
    }, 1000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreation = "There is New ONE and the name is " + this.serverName;
    this.createServer = true;
    this.servers.push(this.serverName);
  }
  onUpdate(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  displaySecret(){
    this.displayMark = !this.displayMark;
    this.log.push(Date());
  }
}
