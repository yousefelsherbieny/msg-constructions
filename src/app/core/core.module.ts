import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { SliderComponent } from './theme/slider/slider.component';
import { AboutUsComponent } from './theme/about-us/about-us.component';
import { ProductsComponent } from './theme/products/products.component';
import { ServicseComponent } from './theme/servicse/servicse.component';
import { CartComponent } from './theme/cart/cart.component';
import { CartService } from './theme/cart/cart.service';
import { ContactUsComponent } from './theme/contact-us/contact-us.component';
import { FixedService } from './utils/fixed.service';
import { BlogsComponent } from './theme/blogs/blogs.component';
const fixed = new FixedService();
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SliderComponent,
    AboutUsComponent,
    ProductsComponent,
    ServicseComponent,
    CartComponent,
    ContactUsComponent,
    ContactUsComponent,
    BlogsComponent,
  ],
  imports: [CommonModule, TranslateModule],
  exports: [HeaderComponent, CartComponent, FooterComponent, LayoutComponent, TranslateModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'ar' },
    { provide: FixedService, useValue: fixed },
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }
}
