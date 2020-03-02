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
    ),
    new Blog(
      '2',
      'March 3, 2020',
      'Preparing for a speech? Happy to help!',
      [
        {
          quote: '',
          text: 'If you haven\'t done a speech before, there could be nothing more daunting than staring at a blank page! I have been caught in that empty page way too many times than I could count. I\'ve scribbled my way out of them most times, but I know the feeling.'
        },
        {
          quote: '',
          text: 'And if by some herculean effort you were able to mount the words for a speech, the next question arises – how do you present it well?!'
        },
        {
          quote: '',
          text: 'The truth is, everyone has a story to tell. There is only this gap between those beautiful stories and those lessons that so clearly exist in our minds from our past experiences, to being able to see it written in words and heard well by somebody else. Because the truth is, it\'s not easy to speak you mind - that is a learned skill which takes time and work.'
        },
        {
          quote: '',
          text: 'I have been mentoring people in their public speaking pursuits as I have been on the journey myself. And what I\'ve learned from developing my public speaking is that you need to continuously learn from feedback. And feedback from an audience, an evaluator or a coach is essential.'
        },
        {
          quote: '',
          text: 'Some say you got to fail it until you make it. That\'s true, but I think you got to fail knowing your lessons so when you do make it, you can teach somebody else.'
        },
        {
          quote: '',
          text: 'If you need that extra nudge to land that awesome message of yours, hit me up at mark.stephen.cate@gmail.com.'
        },
        {
          quote: '',
          text: 'Let\'s make speaking your mind sound awesome!'
        }
      ],
      'Stephen Cate',
      '100',
      '20',
      'Comments: ',
      []
    ),
    new Blog(
      '3',
      'March 4, 2020',
      'About me',
      [
        {
          quote: '',
          text: 'Hi! I\'m Stephen and I am aspiring to craft the most beautiful and meaningful speech the world has ever heard!'
        },
        {
          quote: '',
          text: 'So far, that goal propelled my Toastmasters journey from newbie to being voted best speaker of the year in my local club after joining in 3 months. I won and represented our club since in all four Toastmasters contest at the next levels of the competition including Table Topics, Humorous speech, Evaluations, and the International speech. And in my rookie year, I ended up winning 2nd in the Division level for my International speech, I titled, “Mr. Goodlife”.'
        },
        {
          quote: '',
          text: 'But truth be told, speaking has always been a challenge. As a new migrant in Australia, English not being my first language, it has always been a challenge to speak my mind. I struggled with it at work when trying to communicate my ideas or stand my ground on arguments. But in the very beginning coming here, even in day to day life, just ordering food at Maccas made me nervous! It was an internal struggle to say chips when I want fries, serviette when I want tissue, and tomato sauce when I want ketchup!'
        },
        {
          quote: '',
          text: 'I fumbled. I stuttered. I googled for words in every turn. Until…'
        },
        {
          quote: '',
          text: 'I made a commitment to LEARN how to speak my mind and to share what I learned. Just as I tell my kids – sharing is caring!'
        },
        {
          quote: '',
          text: 'Now it still surprises me to admit that I enjoy speaking in public. And it humbles me to know there are some people who are keen to learn from me on how?!'
        },
        {
          quote: '',
          text: 'I\'m still on this journey to awesome though. It\'s my path to learning and giving as I go while on my way to crafting the world\'s most profound speech!'
        },
        {
          quote: '',
          text: 'So, I hope ending up here helps you in some shape or form. I believe there is such joy in knowing you are heard, and your thoughts have made an impact. It\'s a wonderful feeling you get when you have genuinely spoken your mind.'
        },
        {
          quote: '',
          text: 'Cheers, Stephen'
        }
      ],
      'Stephen Cate',
      '39',
      '19',
      'Comments: ',
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
