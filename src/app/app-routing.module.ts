import { MydeliveriesComponent } from './mydeliveries/mydeliveries.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListCentresComponent } from './list-centres/list-centres.component';
import { Router } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { UpdateClaimComponent } from './update-claim/update-claim.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AddcentreComponent } from './addcentre/addcentre.component';
import { UpdatecentreComponent } from './updatecentre/updatecentre.component';
import { AllClaimsComponent } from './all-claims/all-claims.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { ActiviteCentreComponent } from './activite-centre/activite-centre.component';
import { VerifyComponent } from './verify/verify.component';
import { AddActiviteComponent } from './add-activite/add-activite.component';
import { UpdateactivityComponent } from './updateactivity/updateactivity.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  //{path: '', component: SideBarComponent},
  {path: 'centres', component: ListCentresComponent},

  {path:'signup',component: RegisterComponent},
  {path:'addclaim',component: AddClaimComponent},
  {path:'myclaims',component: ClaimsListComponent},
  {path:'update-claim/:id',component: UpdateClaimComponent},
  {path:'addpost',component: AddPostComponent},
  {path:'postlist',component: PostListComponent},
  {path:'postdetails/:id',component: PostDetailsComponent},
  {path:'deliveries',component: DeliveriesComponent},
  {path:'update-post/:id',component: UpdatePostComponent},
  {path:'addcentre',component: AddcentreComponent},
  {path:'update-centre/:id',component: UpdatecentreComponent},
  {path:'allClaims',component: AllClaimsComponent},
  {path:'claimDetails/:id',component: ClaimDetailsComponent},
  {path:'centre-activites/:id',component: ActiviteCentreComponent},
  {path:'verify',component: VerifyComponent},
  {path:'addactivity/:id',component: AddActiviteComponent},
  {path:'updateActivity/:id',component:UpdateactivityComponent},
  { path: 'map', component: MapComponent }, 
  { path: 'order-details/:orderId', component: OrderDetailComponent }, 
  { path: 'order-product/:orderId', component: OrderProductComponent },
  { path: 'mydeliveries', component: MydeliveriesComponent }, 

  


  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
