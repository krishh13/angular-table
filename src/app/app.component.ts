import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // userData = [
  //   {
  //     "postId": 1,
  //     "id": 1,
  //     "name": "id labore ex et quam laborum",
  //     "email": "Eliseo@gardner.biz",
  //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  //   },
  //   {
  //     "postId": 1,
  //     "id": 2,
  //     "name": "quo vero reiciendis velit similique earum",
  //     "email": "Jayne_Kuhic@sydney.com",
  //     "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  //   },
  //   {
  //     "postId": 1,
  //     "id": 3,
  //     "name": "odio adipisci rerum aut animi",
  //     "email": "Nikita@garfield.biz",
  //     "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  //   },
  //   {
  //     "postId": 1,
  //     "id": 4,
  //     "name": "alias odio sit",
  //     "email": "Lew@alysha.tv",
  //     "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  //   },
  //   {
  //     "postId": 1,
  //     "id": 5,
  //     "name": "vero eaque aliquid doloribus et culpa",
  //     "email": "Hayden@althea.biz",
  //     "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  //   },
  //   {
  //     "postId": 2,
  //     "id": 6,
  //     "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
  //     "email": "Presley.Mueller@myrl.com",
  //     "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
  //   },
  //   {
  //     "postId": 2,
  //     "id": 7,
  //     "name": "repellat consequatur praesentium vel minus molestias voluptatum",
  //     "email": "Dallas@ole.me",
  //     "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
  //   },
  //   {
  //     "postId": 2,
  //     "id": 8,
  //     "name": "et omnis dolorem",
  //     "email": "Mallory_Kunze@marie.org",
  //     "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
  //   },
  //   {
  //     "postId": 2,
  //     "id": 9,
  //     "name": "provident id voluptas",
  //     "email": "Meghan_Littel@rene.us",
  //     "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
  //   },
  //   {
  //     "postId": 2,
  //     "id": 10,
  //     "name": "eaque et deleniti atque tenetur ut quo ut",
  //     "email": "Carmen_Keeling@caroline.name",
  //     "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
  //   },
  //   {
  //     "postId": 3,
  //     "id": 11,
  //     "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
  //     "email": "Veronica_Goodwin@timmothy.net",
  //     "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
  //   },
  //   {
  //     "postId": 3,
  //     "id": 12,
  //     "name": "modi ut eos dolores illum nam dolor",
  //     "email": "Oswald.Vandervort@leanne.org",
  //     "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
  //   },
  //   {
  //     "postId": 3,
  //     "id": 13,
  //     "name": "aut inventore non pariatur sit vitae voluptatem sapiente",
  //     "email": "Kariane@jadyn.tv",
  //     "body": "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
  //   },
  //   {
  //     "postId": 3,
  //     "id": 14,
  //     "name": "et officiis id praesentium hic aut ipsa dolorem repudiandae",
  //     "email": "Nathan@solon.io",
  //     "body": "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum"
  //   }];

//    filterData = this.userData;


// //     searchInput(val: string) {
// //       if (!val) {
// //         this.filterData = this.userData;
// //       } else {
// //         this.filterData = this.userData.filter((x) => {
// //           return (x.name.trim().toLowerCase().indexOf(val.trim().toLowerCase()) > -1 ||
// //           x.email.trim().toLowerCase().indexOf(val.trim().toLowerCase()) > -1 ||
// //           x.body.trim().toLowerCase().indexOf(val.trim().toLowerCase()) > -1 ||
// //           x.id.toString().toLowerCase().indexOf(val.trim().toLowerCase()) > -1
// //           ); });
// //     }
// // }

// // property: any;

//     searchInput(val: string) {
//       if (!val) {
//         this.filterData = this.userData;
//       } else {
//         this.filterData = this.userData.filter((x: any) => {
//           const filter = Object.keys(x);
//           return filter.some(element => x[element].toString().toLowerCase().indexOf(val.toString().trim().toLowerCase()) !== -1);
//           });
//     }
// }



}

// searchInput(val: string) {
//   this.newArr = [];
//   this.newArr = this.userData.forEach((y) => {
//     Object.values(y).forEach(value => {
//       return this.newArr.push(value);
//     }); } );
// console.log(this.newArr);

//   if (!val) {
//     this.filterData = this.userData;
//   } else {
//     this.filterData = this.newArr.filter((x) => {
//         return x.toString().toLowerCase().includes(val.trim().toLowerCase());
//        } );
// }
// }

// searchInput(val: string) {
//   if (!val) {
//     this.filterData = this.userData;
//   } else {
//     this.filterData = this.userData.filter((x) => {
//       for (this.property in x) {
//       if (Object.hasOwnProperty(this.property)) {
//       return this.property.toString().toLowerCase().indexOf(val.trim().toLowerCase()) > -1; } }
// });
// }
// }
// }

          // x.email.trim().toLowerCase().includes(val.trim().toLowerCase());
          // x.body.trim().toLowerCase().includes(val.trim().toLowerCase());

// productData: ProductDataType[] = [
//     {
//       "albumId": 1,
//       "id": 1,
//       "title": "accusamus beatae ad facilis cum similique qui sunt",
//       "url": "https://via.placeholder.com/600/92c952",
//       "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//     },
//     {
//       "albumId": 1,
//       "id": 2,
//       "title": "reprehenderit est deserunt velit ipsam",
//       "url": "https://via.placeholder.com/600/771796",
//       "thumbnailUrl": "https://via.placeholder.com/150/771796"
//     },
//     {
//       "albumId": 1,
//       "id": 3,
//       "title": "officia porro iure quia iusto qui ipsa ut modi",
//       "url": "https://via.placeholder.com/600/24f355",
//       "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//     },
//     {
//       "albumId": 1,
//       "id": 4,
//       "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//       "url": "https://via.placeholder.com/600/d32776",
//       "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//     },
//     {
//       "albumId": 1,
//       "id": 5,
//       "title": "natus nisi omnis corporis facere molestiae rerum in",
//       "url": "https://via.placeholder.com/600/f66b97",
//       "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//     },
//     {
//       "albumId": 1,
//       "id": 6,
//       "title": "accusamus ea aliquid et amet sequi nemo",
//       "url": "https://via.placeholder.com/600/56a8c2",
//       "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
//     },
//     {
//       "albumId": 1,
//       "id": 7,
//       "title": "officia delectus consequatur vero aut veniam explicabo molestias",
//       "url": "https://via.placeholder.com/600/b0f7cc",
//       "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
//     },
//     {
//       "albumId": 1,
//       "id": 8,
//       "title": "aut porro officiis laborum odit ea laudantium corporis",
//       "url": "https://via.placeholder.com/600/54176f",
//       "thumbnailUrl": "https://via.placeholder.com/150/54176f"
//     },
//     {
//       "albumId": 1,
//       "id": 9,
//       "title": "qui eius qui autem sed",
//       "url": "https://via.placeholder.com/600/51aa97",
//       "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
//     },
//     {
//       "albumId": 1,
//       "id": 10,
//       "title": "beatae et provident et ut vel",
//       "url": "https://via.placeholder.com/600/810b14",
//       "thumbnailUrl": "https://via.placeholder.com/150/810b14"
//     },
//     {
//       "albumId": 1,
//       "id": 11,
//       "title": "nihil at amet non hic quia qui",
//       "url": "https://via.placeholder.com/600/1ee8a4",
//       "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
//     },
//     {
//       "albumId": 1,
//       "id": 12,
//       "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
//       "url": "https://via.placeholder.com/600/66b7d2",
//       "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
//     },
//     {
//       "albumId": 1,
//       "id": 13,
//       "title": "repudiandae iusto deleniti rerum",
//       "url": "https://via.placeholder.com/600/197d29",
//       "thumbnailUrl": "https://via.placeholder.com/150/197d29"
//     },
//     {
//       "albumId": 1,
//       "id": 14,
//       "title": "est necessitatibus architecto ut laborum",
//       "url": "https://via.placeholder.com/600/61a65",
//       "thumbnailUrl": "https://via.placeholder.com/150/61a65"
//     },
//     {
//       "albumId": 1,
//       "id": 15,
//       "title": "harum dicta similique quis dolore earum ex qui",
//       "url": "https://via.placeholder.com/600/f9cee5",
//       "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
//     }];

//   }

// export interface ProductDataType {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// }
