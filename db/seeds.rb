# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
houses = House.create([
  { 
    name: "Mali House",
    image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
  }, 
  { 
    name: "Southwest House",
    image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
  },
  { 
    name: "Delta",
    image_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
  }, 
  { 
    name: "Alaska House",
    image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
  }, 
  { 
    name: "JetBlue",
    image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
  }, 
  { 
    name: "American House",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
  }
])

reviews = Review.create([
    {
        title: "New House",
        description: "I had a lovely time",
        score: 5,
        house: houses.first
    },
        {
        title: "Old House",
        description: "I had a bad time",
        score: 1,
        house: houses.first
    }
])