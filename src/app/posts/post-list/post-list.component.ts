import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {PostModel} from "../post.model";
import {PostsService} from "../posts.service";
import {Subscription} from "rxjs";

@Component(
  {
    selector: 'app-post-list',
    templateUrl : './post-list.component.html',
    styleUrls : ['./post-list.component.css']
  }
)

export class PostListComponent implements OnInit, OnDestroy { // Lifecycle for Initialization and destruction of the subscription
  posts : PostModel[] = []

  private postSub: Subscription;

  constructor(public postsService:PostsService) { } // Creates a public property and store the value
  ngOnDestroy(): void {
        this.postSub.unsubscribe();
    }

  ngOnInit(): void { // Used to create Initialization tasks
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdateListener().subscribe((posts:PostModel[]) => // Observer Subscribe to the Observable to update the posts array of this component
    {
      this.posts = posts;
    })
    }
}
