import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() containerClassName = 'Name';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() name: string | undefined;
  @Input() label!: string;
  @Input() for: string | undefined;
  @Input() text: string | undefined;
  @Input() type!: string;
  @Input() isInfo: boolean = true;
  @Input() infoMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.control = this.control ?? new FormControl('');
  }
} 
