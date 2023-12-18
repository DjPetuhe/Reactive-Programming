import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './app.component';

@Pipe({
  name: 'searchPost',
  pure: false
})

export class SearchPost implements PipeTransform {
    transform(posts: Post[], filter: string) {
        return posts.filter(post => {
            let match = post.title.toLowerCase().includes(filter.toLowerCase()) 
            match = match || post.text.toLowerCase().includes(filter.toLocaleLowerCase())
            match = match || post.date.toLocaleDateString().toLowerCase().includes(filter.toLocaleLowerCase())
            return match
        })
    }
}