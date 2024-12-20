import { Component } from '@angular/core';
import { PricingInfoCardComponent } from '../../components/pricing-info-card/pricing-info-card.component';
import { CommonModule, NgForOf, NgFor } from '@angular/common';
import { CartService, CartItem } from '../../services/cart/cart.service';
import { Router } from '@angular/router';


interface Package {
    title: string;
    smallInfo: string;
    packFeatures: string[];
    packPrice: number; 
}

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [PricingInfoCardComponent, NgForOf, NgFor, CommonModule],
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.css'] 
})

export class PricingComponent {
    public cardsList: Package[] = [ 
        {
            title: 'Básico',
            smallInfo: 'Descubra o mundo do luxo com o nosso pacote básico, criado para oferecer uma experiência exclusiva e sofisticada sem comprometer o bolso',
            packFeatures: [
                '1 bolsa de luxo',
                '1 peça de roupa de luxo',
                '1 pet de pequeno porte'
            ],
            packPrice: 750 
        },
        {
            title: 'Premium',
            smallInfo: 'Eleve sua experiência com o pacote premium. Cada detalhe deste pacote é pensado para proporcionar uma experiência repleta de conforto e elegância',
            packFeatures: [
                '1 bolsa de luxo',
                '1 peça de roupa de luxo',
                '1 pet de pequeno ou médio porte',
                'Criação de uma backstore exclusiva (empresário ou investidor)'
            ],
            packPrice: 1000 
        },
        {
            title: 'Elegance',
            smallInfo: 'O pacote elegance foi criado para os assinantes que desejam um nível ainda mais elevado de exclusividade e personalização',
            packFeatures: [
                '2 bolsas de luxo',
                '2 peças de roupa de luxo',
                '1 pet de pequeno ou médio porte',
                '1 joia de grife (menor custo)',
                'Criação de uma backstore exclusiva (empresário ou investidor)'
            ],
            packPrice: 3000 
        },
        {
            title: 'Diamante',
            smallInfo: 'O pacote diamante é para aqueles que querem experienciar o luxo e a elegância como um verdadeiro herdeiro',
            packFeatures: [
                '2 bolsas de luxo',
                '3 peças de roupa de luxo',
                '2 pets de pequeno ou grande porte',
                '1 joia de grife (médio custo)',
                '1 sessão de fotos com um carro de luxo (10 fotos)',
                'Criação de uma backstore exclusiva como herdeiro'
            ],
            packPrice: 10000 
        },
        {
            title: 'Lux Elite',
            smallInfo: 'O máximo em luxo e exclusividade para quem busca o melhor dos melhores',
            packFeatures: [
                '2 bolsas de luxo',
                '3 peças de roupa de luxo',
                '2 pets de pequeno ou grande porte',
                '1 joia de grife (alto custo)',
                '1 sessão de fotos com um carro de luxo (fotos ilimitadas)',
                'Criação de uma backstore exclusiva como herdeiro'
            ],
            packPrice: 20000 
        },
    ];

    constructor(private cartService: CartService, private router: Router) {}

    addToCart(pack: Package) {
        const cartItem: CartItem = {
            id: this.cardsList.indexOf(pack), 
            nome: pack.title,                 
            preco: pack.packPrice,             
            quantidade: 1                   
        };
    
        this.cartService.addToCart(cartItem);
        this.router.navigate(['/checkout']);
    }
}
