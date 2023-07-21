import { Component } from '@angular/core';
import { ForumWithUserDTO } from '../models/forumWithUserDto';
import { PostService } from '../services/post.service';
import { ClaimServiceService } from '../services/claim-service.service';
import { ReclamationWithUserDto } from '../models/reclamationWithUserDto';
@Component({
  selector: 'app-all-claims',
  templateUrl: './all-claims.component.html',
  styleUrls: ['./all-claims.component.css']
})
export class AllClaimsComponent {
  forums: ReclamationWithUserDto[] = [];

  constructor(private claimServiceService: ClaimServiceService) { }

  ngOnInit() {
    this.fetchForums();
  }

  fetchForums() {
    this.claimServiceService.getAllForumsWithUserInfo().subscribe(
      (data) => {
        this.forums = data;
      },
      (error) => {
        console.error('Error fetching forums:', error);
      }
    );
  }


}
