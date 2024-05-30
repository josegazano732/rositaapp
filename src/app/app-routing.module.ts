import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactoComponent } from './pages/contacto/contacto.component';



const app_routes: Routes=[
    {path: 'home', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item' , component: ItemComponent},
    {path: 'contacto' , component: ContactoComponent
        
    },
    {path: '**' ,pathMatch:'full', redirectTo: 'home' }
]



@NgModule({
    imports: [
        RouterModule.forRoot(app_routes,{useHash:true})
    ]
})
export class AppRoutingModule {

}

