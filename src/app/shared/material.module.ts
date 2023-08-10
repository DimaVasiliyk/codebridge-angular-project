import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
  ],
})
export class MaterialModule {}
