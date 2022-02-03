const tweet = {
    created_at: "Thu May 10 17:41:57 +0000 2018", id_str: "994633657141813248",
    text:
    'Just another Extended Tweet with more than 140 characters, generated as a documentati on example, showing that ["tru... https://t.co/U7Se4NM7Eu',
    display_text_range: [0, 140], truncated: true,
    user: {
    id_str: "944480690",
    screen_name: "ExampleName", },
      extended_tweet: {
        full_text:
    'Just another Extended Tweet with more than 140 characters, generated as a documenta tion example, showing that ["truncated": true] and the presence of an "extended_tweet" obj ect with complete text and "entities" #documentation #parsingJSON #GeoTagged https://t.co/ e9yhQTJSIA',
    display_text_range: [0, 249], entities: {
    hashtags: [ {
              text: "documentation",
              indices: [211, 225],
            },
            {
              text: "parsingJSON",
              indices: [226, 238],
    }, {
              text: "GeoTagged",
              indices: [239, 249],
            },
    ], },
      },
      comments: [
    {
    created_at: "Thu May 10 19:13:57 +0000 2018", id_str: "994633657141813248",
    text: "Just a simple comment",
    user: {
    id_str: "944488470",
    screen_name: "ExampleNameTwo", },
    }, ],
    };


    // Question 1 
    console.log(tweet.user.screen_name); 

    // Question 2 

    console.log(tweet.comments[0].text)

    