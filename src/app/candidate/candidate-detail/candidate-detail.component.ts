import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Candidate} from '../../models/candidate';
import {CandidateService} from '../candidate.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  candidate: Candidate;
  private successTextAlert: string;
  private errorTextAlert: string;
  private show: boolean;

  editCandidate: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.show = false;
    this.getCandidate();
    this.editCandidate = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      academicFormation: new FormControl('', Validators.required),
      institution: new FormControl('', Validators.required),
      knowledge: new FormControl('', Validators.required),
      bio: new FormControl('', Validators.required),
    });
  }

  getCandidate(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.candidateService.getCandidate(id)
      .subscribe(candidate => this.candidate = candidate);
  }

  goBack(): void {
    this.location.back();
  }

  delete() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.candidateService.deleteCandidate(id)
      .subscribe(candidate => this.candidate = candidate);
    this.goBack();
  }

  updateJob(candidateInfo: Candidate) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.candidateService.updateCandidate(id, candidateInfo).subscribe(
      response => {
        this.successTextAlert = 'Usuário criado, entre utilizando suas credenciais.';
      },
      error => {
        this.errorTextAlert = error;
      }
    );
    this.goBack();
  }

  showForm() {
    this.show = !this.show;
  }

}
