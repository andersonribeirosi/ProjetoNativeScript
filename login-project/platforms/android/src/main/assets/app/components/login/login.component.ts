import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";

@Component({
    moduleId: module.id,
    selector: "ns-login",
    templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {

    public input: any;

    public constructor(private router: RouterExtensions) {
        this.input = {
            "email": "",
            "senha": ""
        }
    }

    public ngOnInit() {
        if(ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/secure"], { clearHistory: true });
        }
    }

    public login() {
        if(this.input.email && this.input.senha) {
            let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            if(this.input.email == account.email && this.input.senha == account.senha) {
                ApplicationSettings.setBoolean("authenticated", true);
                this.router.navigate(["/secure"], { clearHistory: true });
            } else {
                (new SnackBar()).simple("Dados incorretos!");
            }
        } else {
            (new SnackBar()).simple("Todos os campos são requeridos");
        }
    }

}