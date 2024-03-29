import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/data-fake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = 'https://gamearena.gg/wp-content/uploads/2023/09/nami-coven-2023.jpeg'
  contentTitle:string = ''
  contentDescription:string = ''
  contentDescription2:string = ''
  contentDescription3:string = ''
  contentDescription4:string = ''
  contentDescription5:string = ''
  private id:string | null = '0'

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.contentDescription2 = result.descriptionSecond
    this.contentDescription3 = result.descriptionThird
    this.contentDescription4 = result.descriptionFourth
    this.contentDescription5 = result.descriptionFifth
    this.photoCover = result.photoCover
  }

}
