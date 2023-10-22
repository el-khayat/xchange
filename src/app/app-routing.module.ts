import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FreindsComponent } from './pages/freinds/freinds.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { AuthCompComponent } from './auth-comp/auth-comp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'freinds', component: FreindsComponent },
  { path: 'notificatins', component: NotificationsComponent },
  { path: 'auth', component: AuthCompComponent },
  { path: 'add', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
