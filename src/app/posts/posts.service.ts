// Service class injects angular into components, used to centralize task within components without event binding
// Dependency Injection to use the service in the components
import {PostModel} from './post.model';
import {Injectable} from "@angular/core";
import {Subject} from "rxjs"; // Event Emitter "Observer Pattern"

@Injectable({providedIn:"root"})
export class  PostsService
{
   private posts: PostModel[] = [];
   private postUpdated = new Subject<PostModel[]>();

   getPosts(){
     return [...this.posts]; // Spread Operator [Arrays are reference types in TS]
   }

   getPostUpdateListener()
   {
     return this.postUpdated.asObservable();
   }

   addPosts(title:String, content: String){
     const post: PostModel = {title:title,content:content}
      this.posts.push(post)
      this.postUpdated.next([...this.posts])
   }
}
