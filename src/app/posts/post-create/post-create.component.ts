import {Component} from "@angular/core";

import {NgForm} from "@angular/forms";
import {PostsService} from "../posts.service";

@Component({
  selector:'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls : ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor(public postsService:PostsService) {}

  errorMessage = 'Please enter something'

  onAddPosts(form :NgForm) {
    if (form.invalid)
    {
      return this.errorMessage;
    }
    this.postsService.addPosts(form.value.title,form.value.content)
  form.onReset();
  }

}
