var pastGames = [
  {
    icon: 'icon-soccerball',
    ended: 'Ended 4 hours ago', 
    played: '14 played', 
    location: 'Near San Francisco'
  },
  {
    icon: 'icon-basketball',
    ended: 'Ended 5 hours ago',
    played: '22 played', 
    location: 'Near Austin, Texas'
  }
  ,
  {
    icon: 'icon-frisbee',
    ended: 'Ended 8 hours ago',
    played: '8 played', 
    location: 'Near New York, New York'
  }
  ,
  {
    icon: 'icon-soccerball',
    ended: 'Ended 12 hours ago',
    played: '13 played', 
    location: 'Near Palo Alto, California'
  }
  ,
  {
    icon: 'icon-basketball',
    ended: 'Ended 2 days ago',
    played: '18 played', 
    location: 'Near Oakland, California'
  }
  ,
  {
    icon: 'icon-frisbee',
    ended: 'Ended 3 days ago',
    played: '9 played', 
    location: 'Near San Diego, California'
  }
  ,
  {
    icon: 'icon-basketball',
    ended: 'Ended 5 days ago',
    played: '12 played', 
    location: 'Near Toronto, ON, Canada'
  }
  ,
  {
    icon: 'icon-basketball',
    ended: 'Ended 1 week ago',
    played: '6 played', 
    location: 'Near Montreal, QC, Canada'
  }
];
Template.getLocation.helpers({
  pastGames: pastGames
});
