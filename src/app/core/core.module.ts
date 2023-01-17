import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [],
  providers: [AuthService],
})
export class CoreModule {
}
