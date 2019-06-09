import { Component } from '@angular/core';
import { Rule, SchematicContext, Tree, TreeConstructor } from '@angular-devkit/schematics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'libAdd';
  ngOnInit() {
    console.log('tree props ' + Tree.);
  }
}
