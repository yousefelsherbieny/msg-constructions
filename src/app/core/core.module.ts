import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { SliderComponent } from './theme/slider/slider.component';
import { AboutUsComponent } from './theme/about-us/about-us.component';
import { ProductsComponent } from './theme/products/products.component';
import { ContactUsComponent } from './theme/contact-us/contact-us.component';
import { FixedService } from './utils/fixed.service';
import { RouterModule } from '@angular/router';
import { CartComponent } from './theme/cart/cart.component';
import { FormsModule } from '@angular/forms';
const fixed = new FixedService();
@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, SliderComponent, AboutUsComponent, ProductsComponent, ContactUsComponent, CartComponent],
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, LayoutComponent, TranslateModule],
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
