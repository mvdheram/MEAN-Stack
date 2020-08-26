// Service class injects angular into components, used to centralize task within components without event binding
// Dependency Injection to use the service in the components
import {PostModel} from './post.model';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs"; // Event Emitter "Observer Pattern"

@Injectable({providedIn:"root"})
export class  PostsService
{
   private posts: PostModel[] = [];
   private postUpdated = new Subject<PostModel[]>();

   constructor(private http: HttpClient) {}

   getPosts(){
     this.http.get<{message: string, posts: PostModel[] /* Setting the type of the data returned; get converts json to js objects*/}>('http://localhost:3000/api/posts')
       .subscribe((postData)=>{
         this.posts = postData.posts;
         this.postUpdated.next([...this.posts]) // Passing a new copy of posts to the postUpdated, so that we cant edit the posts to this service
       }); // Angular http client uses observables and thus needs to be subscribed in order to listen to changes
   }

   getPostUpdateListener()
   {
     return this.postUpdated.asObservable();
   }

   addPosts(title:String, content: String){
     const post: PostModel = {id:null,title:title,content:content}
      this.posts.push(post)
      this.postUpdated.next([...this.posts])
   }
}

