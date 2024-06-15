import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-imagen-listas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagen-listas.component.html',
  styleUrl: './imagen-listas.component.css'
})
export class ImagenListasComponent {
  images = [
    {
      title: 'Spiderman - Multiverso',
      description: ' El multiverso permite que estas distintas encarnaciones del héroe, como Spider-Gwen, Spider-Man Noir y Miles Morales, interactúen y colaboren, creando historias ricas y dinámicas. Este concepto no solo amplía el alcance narrativo del personaje, sino que también celebra la diversidad y la creatividad dentro del mundo de los superhéroes.',
      url: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/split-image-of-spider-geddon-miles-morales-and-spider-man-feature.jpg'
    },
    {
      title: 'Spiderman - Multiverso',
      description: ' El multiverso permite que estas distintas encarnaciones del héroe, como Spider-Gwen, Spider-Man Noir y Miles Morales, interactúen y colaboren, creando historias ricas y dinámicas. Este concepto no solo amplía el alcance narrativo del personaje, sino que también celebra la diversidad y la creatividad dentro del mundo de los superhéroes.',
      url: 'https://images.thedirect.com/media/article_full/spider-man-2-multiverse.jpg'
    },
    {
      title: 'Spiderman - Multiverso',
      description: ' El multiverso permite que estas distintas encarnaciones del héroe, como Spider-Gwen, Spider-Man Noir y Miles Morales, interactúen y colaboren, creando historias ricas y dinámicas. Este concepto no solo amplía el alcance narrativo del personaje, sino que también celebra la diversidad y la creatividad dentro del mundo de los superhéroes.',
      url: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/03/spider-man-mcu-multiverse.jpg'
    },
    {
      title: 'Spiderman - Multiverso',
      description: ' El multiverso permite que estas distintas encarnaciones del héroe, como Spider-Gwen, Spider-Man Noir y Miles Morales, interactúen y colaboren, creando historias ricas y dinámicas. Este concepto no solo amplía el alcance narrativo del personaje, sino que también celebra la diversidad y la creatividad dentro del mundo de los superhéroes. ',
      url: 'https://static.wixstatic.com/media/5aa366_5f05f7d263e940629fa8fd2f22e7f8f1~mv2.png/v1/fill/w_1000,h_757,al_c,q_90,usm_0.66_1.00_0.01/5aa366_5f05f7d263e940629fa8fd2f22e7f8f1~mv2.png'
    },
    {
      title: 'Spiderman - Multiverso',
      description: ' El multiverso permite que estas distintas encarnaciones del héroe, como Spider-Gwen, Spider-Man Noir y Miles Morales, interactúen y colaboren, creando historias ricas y dinámicas. Este concepto no solo amplía el alcance narrativo del personaje, sino que también celebra la diversidad y la creatividad dentro del mundo de los superhéroes. ',
      url: 'https://media.thenerdstash.com/wp-content/uploads/2023/05/Spider-Man-Across-the-Spider-Verse-Core-Spider-Characters-Explained.jpg'
    },
    {
      title: 'Spiderman - Multiverso',
      description: ' El multiverso permite que estas distintas encarnaciones del héroe, como Spider-Gwen, Spider-Man Noir y Miles Morales, interactúen y colaboren, creando historias ricas y dinámicas. Este concepto no solo amplía el alcance narrativo del personaje, sino que también celebra la diversidad y la creatividad dentro del mundo de los superhéroes.',
      url: 'https://poptv.orange.es/wp-content/uploads/sites/3/2023/05/spiderman-multiverso-curiosidades-01.jpg'
    }
  ];

}
