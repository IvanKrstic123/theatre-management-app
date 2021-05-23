import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerformancesService } from 'src/app/shared/services/performances.service';

@Component({
  selector: 'app-type-performance',
  templateUrl: './type-performance.component.html',
  styleUrls: ['./type-performance.component.scss'],
})
export class TypePerformanceComponent implements OnInit {
  typeForm: FormGroup;
  @Output() typeEmit = new EventEmitter<any>();

  constructor(
    private builder: FormBuilder,
    private performancesService: PerformancesService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.typeForm = this.builder.group({
      type: ['', Validators.required],
    });
  }

  back() {
    this.typeEmit.emit(0);
  }

  preskoci() {
    this.typeEmit.emit(2);
  }

  addType() {
    this.typeEmit.emit(this.typeForm.value);
    this.performancesService.addType(this.typeForm.value);
  }
}
