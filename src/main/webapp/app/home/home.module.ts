import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { ProductBannerComponent } from './product-banner/product-banner.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
@NgModule({
    imports: [StoreSharedModule, MatCardModule, MatButtonModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent, ProductBannerComponent, ProductCatalogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreHomeModule {}
