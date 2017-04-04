import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    template: `
        <footer>
            Created By <a href="https://github.com/myronkurus/">Myron Kurus</a>
        </footer>
    `,
    styles: [`
        footer {
            padding: 20px 0;
            color: #ffffff;
            background-color: #333333;
            text-align: center;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
        }
        footer a {
            color: #aaaaaa;
        }               
    `]
})

export class FooterComponent {

}