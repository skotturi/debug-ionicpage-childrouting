
GOAL: to setup child routing on an ionic page module

Current solution: each page module contains: 

```
<ion-content>
  <router-outlet></router-outlet>
</ion-content>
```

with child routes: 
```
const routes: Routes = [
  {
    path: '',
    component: PageOnePage,
    children: [
      {
        path: 'part-one',
        component: PartoneComponent
      },
      {
        path: 'part-two',
        component: ParttwoComponent
      }
    ]
  }
];
```
