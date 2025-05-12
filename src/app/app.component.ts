import { Component } from '@angular/core';
import { ContentModule } from './Component/content/content.module';

@Component({
  selector: 'app-root',
  imports: [ContentModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'git-tool';
}
