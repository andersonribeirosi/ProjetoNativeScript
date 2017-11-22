import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";

@Component({
    moduleId: module.id,
    selector: "ns-register",
    templateUrl: "register.component.html",
})
export class RegisterComponent {

    public input: any;

    public constructor(private location: Location) {
        this.input = {
            "nome": "",
            "telefone": "",
            "email": "",
            "senha": ""
        }
    }

    public register() {
        if(this.input.nome && this.input.telefone && this.input.email && this.input.senha) {
            ApplicationSettings.setString("account", JSON.stringify(this.input));
            this.location.back();
        } else {
            (new SnackBar()).simple("Todos os campos são requeridos!");
        }
    }

    public goBack() {
        this.location.back();
    }

}