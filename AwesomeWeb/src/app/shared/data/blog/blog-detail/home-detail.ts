import { Blog } from './blog';

export class HomeDetail {
  static Details: Blog[] = [
    new Blog(
      '1',
      'February 28, 2020',
      'What\'s new?',
      [
        {
          quote: '',
          text: ''
        }
      ],
      'Stephen Cate',
      '1,000',
      '50',
      "Comments: ",
      []
    )
  ]

  static getDetails(): Blog[] {
    return this.Details;
  }

  static getDetail(id: string): Blog {
    return this.Details.find(b => b.id === id);
  }
}
