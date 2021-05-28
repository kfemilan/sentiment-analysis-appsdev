import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  txt: string = "";
  score: any;
  pos: number = 0;
  neu: number = 0;
  neg: number = 0;
  comp: number = 0;
  names = ["Positive", "Neutral", "Negative", "Compound"];

  getScore() {
    
    this.httpClient.get('http://127.0.0.1:5000/sentiment/'+this.txt).subscribe(data=>{
      this.score = data as string;
      console.log(this.score);
      this.pos = this.score.pos
      this.neg = this.score.neg
      this.neu = this.score.neu
      this.comp = this.score.compound
      console.log(this.pos)
    })

  }

}
