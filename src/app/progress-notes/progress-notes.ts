import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
 
@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-progress-notes',
  styleUrl: './progress-notes.css',
  templateUrl: './progress-notes.html'
})
export class ProgressNotes {
  progressForm = new FormGroup({
    projectCode: new FormControl(''),
    projectName: new FormControl(''),
    date: new FormControl(''),
    currentStatus: new FormControl(''),
    teamMember: new FormControl(''),
    progressNote: new FormControl(''),
 });
 progressNotes = 'Initial progress note';
 errorMessage = '';
 projectCodes = {
    PPT101: 'Project Progress Tracker',
    WEB202: 'Website Redesign',
    APP303: 'Mobile Application Development',
    DATA404: 'Data Analytics Dashboard'
};
  updateProjectName() {
    const code = this.progressForm.value.projectCode;
    if (code === 'PPT101') {
        this.progressForm.patchValue({
        projectName: 'Project Progress Tracker'
    });

    this.errorMessage = '';

    } else if (code === 'WEB202') {
      this.progressForm.patchValue({
      projectName: 'Website Redesign'
    });

    this.errorMessage = '';

    } else if (code === 'APP303') {
      this.progressForm.patchValue({
      projectName: 'Mobile Application Development'
    });

    this.errorMessage = '';

    } else if (code === 'DATA404') {
      this.progressForm.patchValue({
      projectName: 'Data Analytics Dashboard'
    });

    this.errorMessage = '';

    } else {
      this.progressForm.patchValue({
      projectName: ''
    });

    this.errorMessage = 'Project code not found.';
  }
}
}
