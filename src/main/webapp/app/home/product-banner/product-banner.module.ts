import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBannerComponent } from './product-banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'app/entities/product';
import { JhiAlertService } from 'ng-jhipster';
@NgModule({
    declarations: [ProductBannerComponent],
    imports: [CommonModule, NgbModule, JhiAlertService],
    providers: [ProductService]
})
export class ProductBannerModule {}
