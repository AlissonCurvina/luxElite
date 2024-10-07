import { Component } from '@angular/core';
import { PricingInfoCardComponent } from '../../components/pricing-info-card/pricing-info-card.component';
import { CommonModule, NgForOf, NgFor } from '@angular/common';

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [PricingInfoCardComponent, NgForOf, NgFor, CommonModule,],
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.css'
})

export class PricingComponent {
    public cardsList: any[] = [
        {
            id: 0,
            title:'Básico',
		    smallInfo: 'Descubra o mundo do luxo com o nosso pacote básico, criado para oferecer uma experiência exclusiva e sofisticada sem comprometer o bolso', 
		    packFeatures: [
                '1 bolsa de luxo',
                '1 peça de roupa de luxo',
                '1 pet de pequeno porte'
            ], 
		    packPrice: 750
        },
        {
            id: 1,
            title:'Premium',
		    smallInfo: 'Eleve sua experiência com o pacote premium. Cada detalhe deste pacote é pensado para proporcionar uma experiência repleta de conforto e elegância', 
		    packFeatures: [
                '1 bolsa de luxo',
                '1 peça de roupa de luxo',
                '1 pet de pequeno ou médio porte',
                'Criação de uma backstore exclusiva (empresário ou investidor)'
            ], 
		    packPrice: '1K'
        },
        {
            id: 2,
            title:'Elegance',
		    smallInfo: 'O pacote elegance foi criado para os assinantes que desejam um nível ainda mais elevado de exclusividade e personalização', 
		    packFeatures: [
                '2 bolsas de luxo',
                '2 peças de roupa de luxo',
                '1 pet de pequeno ou médio porte',
                '1 joia de grife (menor custo)',
                'Criação de uma backstore exclusiva (empresário ou investidor)'
            ], 
		    packPrice: '3K'
        },
        {
            id: 3,
            title:'Diamante',
		    smallInfo: 'O pacote diamante é para aqueles que querem experienciar o luxo e a elegância como um verdadeiro herdeiro', 
		    packFeatures: [
                '2 bolsas de luxo',
                '3 peça de roupa de luxo',
                '2 pet de pequeno ou grande porte',
                '1 joia de grife (médio custo)',
                '1 sessão de fotos com um carro de luxo (10 fotos)',
                'Criação de uma backstore exclusiva como herdeiro'
            ], 
		    packPrice: '10K'
        },
        {
            id: 4,
            title:'Lux Elite',
		    smallInfo: 'O máximo em luxo e exclusividade para quem busca o melhor dos melhores', 
		    packFeatures: [
                '2 bolsas de luxo',
                '3 peça de roupa de luxo',
                '2 pet de pequeno ou grande porte',
                '1 joia de grife (alto custo)',
                '1 sessão de fotos com um carro de luxo (fotos ilimitadas)',
                'Criação de uma backstore exclusiva como herdeiro'
            ], 
		    packPrice: '20K'
        },
    ]
}