import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { filter, map } from 'rxjs/operators';

import { User, Project } from './types';
import { StoreService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private readonly usersRef = this.storeService.ref('/users');
  private readonly projectsRef = this.storeService.ref('/projects');

  projects$ = this.storeService.listen<Project[]>(this.projectsRef).pipe(
    filter(projects => projects !== null),
    map(projects => this.filterEmpty(projects))
  );

  createProjectForm = this.fb.group({
    name: '',
    assigned: '',
    status: '',
    created: ''
  });

  constructor(private fb: FormBuilder, private storeService: StoreService) {}

  ngOnInit() {}

  private projectId = 1;

  onCreateProject() {
    const { name, assigned, status, created } = this.createProjectForm.value;
    const project: Project = { id: this.projectId, name, assigned, status, created };

    this.storeService.create(this.projectsRef.child(project.id.toString()), project).subscribe(err => {
      if (err) {
        this.errorHandler(err);
      } else {
        this.projectId++;
      }
    });
  }

  private filterEmpty(items: any[]) {
    return items.filter(item => item !== undefined);
  }

  private errorHandler(err: any) {
    if (err) {
      console.log(err);
    }
  }
}
