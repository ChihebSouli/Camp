import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListCentresComponent } from './list-centres/list-centres.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { UpdateClaimComponent } from './update-claim/update-claim.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdatecentreComponent } from './updatecentre/updatecentre.component';
import { AddcentreComponent } from './addcentre/addcentre.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { AllClaimsComponent } from './all-claims/all-claims.component';
import { ActiviteCentreComponent } from './activite-centre/activite-centre.component';
import { VerifyComponent } from './verify/verify.component';
import { AddActiviteComponent } from './add-activite/add-activite.component';
import { UpdateactivityComponent } from './updateactivity/updateactivity.component';
import { MapComponent } from './map/map.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    ListCentresComponent,
    RegisterComponent,
    AddClaimComponent,
    ClaimsListComponent,
    UpdateClaimComponent,
    AddPostComponent,
    PostListComponent,
    PostDetailsComponent,
    DeliveriesComponent,
    UpdatePostComponent,
    UpdatecentreComponent,
    AddcentreComponent,
    ClaimDetailsComponent,
    AllClaimsComponent,
    ActiviteCentreComponent,
    VerifyComponent,
    AddActiviteComponent,
    UpdateactivityComponent,
    MapComponent,
    OrderDetailComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
