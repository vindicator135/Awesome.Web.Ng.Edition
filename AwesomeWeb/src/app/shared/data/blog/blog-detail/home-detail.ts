import { Blog } from './blog';

export class HomeDetail {
  static Details: Blog[] = [
    new Blog(
      '1',
      'February 28, 2020',
      'Need a motivational speaker? I speak for free',
      [
        {
          quote: '',
          text: 'The best speeches I have heard, I have heard for free. And it is usually those ones spoken out of passion, and the simple desire to help and touch somebody that really lands their meaning to anybody who listens.'
        },
        {
          quote: '',
          text: 'And as it stands, A Journey To Awesome is a journey not for money, but to awesome! So if you have a charity, a not-for-profit event, and you need a speaker to inspire and motivate and land a key message for your organization, school or group, please email me at mark.stephen.cate@gmail.com.'
        },
        {
          quote: '',
          text: 'Happy to pay it forward!'
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
