export class Feedback {
  // "Id": 1,
  //     "Statement": "Are you satisfied with doctor treatmment?",
  //     "Rating": 5,
  //     "AdditionalComments": "nice "
  QuestionId: number;
  Statement: string;
  //Rating:number;
  AdditionalComment: string;
  Rating: QuestionRating;
  constructor(
    QuestionId: number,
    Statement: string,
    // Rating:number,
    AdditionalComment: string,
    Rating: QuestionRating
  ) {
    this.QuestionId = QuestionId;
    this.Statement = Statement;
    this.Rating = Rating;
    this.AdditionalComment = AdditionalComment;
  }
}

export class QuestionRating {
  Rating: number;
  Question: Question;
  constructor(Rating: number, Question: Question) {
    this.Rating = Rating;
    this.Question = Question;
  }
}

export class Question {
  QuestionId: number;
  Statement: string;
  constructor(QuestionId: number, Statement: string) {
    this.QuestionId = QuestionId;
    this.Statement = Statement;
  }
}
