import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Project} from '../../types/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  @Input() editMode = false;

  constructor(private readonly dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.projects.subscribe(projects => {
      this.projects = projects;
    });
  }

  removeProject(index: number) {
    this.projects.splice(index, 1);
    this.dataService.projects.next(this.projects);
  }
}
