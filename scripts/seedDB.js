const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "Farenheit 451",
    authors: "Ray Bradbury",
    description:
      "Guy Montag is a fireman. In his world, where television rules and literature is on the brink of extinction, firemen start fires rather than put them out. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden.Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But then he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television.When Mildred attempts suicide and Clarisse suddenly disappears, Montag begins to question everything he has ever known. He starts hiding books in his home, and when his pilfering is discovered, the fireman has to run for his life.",
    image: ""
  },
  {
    title: "Crazy Rich Asians",
    authors: "Kevin Kwan",
    description:
      "When New Yorker Rachel Chu agrees to spend the summer in Singapore with her boyfriend, Nicholas Young, she envisions a humble family home and quality time with the man she hopes to marry. But Nick has failed to give his girlfriend a few key details. One, that his childhood home looks like a palace; two, that he grew up riding in more private planes than cars; and three, that he just happens to be the country’s most eligible bachelor. On Nick’s arm, Rachel may as well have a target on her back the second she steps off the plane, and soon, her relaxed vacation turns into an obstacle course of old money, new money, nosy relatives, and scheming social climbers.",
    image: ""
  },
  {
    title: "Into Thin Air",
    authors: "Jon Krakauer",
    description:
      "Into Thin Air is the definitive account of the deadliest season in the history of Everest by the acclaimed Outside journalist and author of the bestselling Into the Wild. Taking the reader step by step from Katmandu to the mountain's deadly pinnacle, Krakauer has his readers shaking on the edge of their seat. Beyond the terrors of this account, however, he also peers deeply into the myth of the world's tallest mountain. What is is about Everest that has compelled so many poeple--including himself--to throw caution to the wind, ignore the concerns of loved ones, and willingly subject themselves to such risk, hardship, and expense?",
    image: ""
  },
  {
    title: "The Martian",
    authors: "Andy Weir",
    description:
      "Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he's sure he'll be the first person to die there. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he's alive--and even if he could get word out, his supplies would be gone long before a rescue could arrive. Chances are, though, he won't have time to starve to death. The damaged machinery, unforgiving environment, or plain-old human error are much more likely to kill him first.But Mark isn't ready to give up yet. Drawing on his ingenuity, his engineering skills--and a relentless, dogged refusal to quit--he steadfastly confronts one seemingly insurmountable obstacle after the next. Will his resourcefulness be enough to overcome the impossible odds against him?",
    image: ""
  },
  {
    title: "This Is How You Lose Her",
    authors: "Junot Diaz",
    description:
      "On a beach in the Dominican Republic, a doomed relationship flounders. In a New Jersey laundry room, a woman does her lover’s washing and thinks about his wife. In Boston, a man buys his love child, his only son, a first baseball bat and glove. At the heart of these stories is the irrepressible, irresistible Yunior, a young hardhead whose longing for love is equaled only by his recklessness--and by the extraordinary women he loves and loses. In prose that is endlessly energetic, inventive, tender, and funny, these stories lay bare the infinite longing and inevitable weakness of the human heart. They remind us that passion always triumphs over experience, and that “the half-life of love is forever.”"
  },
  {
    title: "The Alchemist",
    authors: "Paulo Coelho",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations. Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.",
    image: ""
  },
  {
    title: "Do Androids Dream of Electric Sheep?",
    authors: "Philip K. Dick",
    description:
      "By 2021, the World War had killed millions, driving entire species into extinction and sending mankind off-planet. Those who remained coveted any living creature, and for people who couldn't afford one, companies built incredibly realistic simulacrae: horses, birds, cats, sheep. . . They even built humans. Emigrées to Mars received androids so sophisticated it was impossible to tell them from true men or women. Fearful of the havoc these artificial humans could wreak, the government banned them from Earth. But when androids didn't want to be identified, they just blended in. Rick Deckard was an officially sanctioned bounty hunter whose job was to find rogue androids, and to retire them. But cornered, androids tended to fight back, with deadly results.",
    image: ""
  },
  {
    title: "Dieter Rams: Ten Principles for Good Design",
    authors: "Cees W. De Jong, Klaus Klemp, Erik Mattie",
    description:
      "Exquisitely produced to reflect Dieter Rams' aesthetic philosophy, this book presents highlights from a forty-year career designing iconic consumer products that enhance our daily lives. For decades, anyone who cared about product design looked to the Braun label when choosing their appliances, radios, and other consumer items. Now Dieter Rams, the guiding force behind the Braun look, breaks down his design principles and processes in this elegant book. Enumerating each of his ten principles such as good design is innovative; good design is aesthetic; good design is useful, etc., this book presents one hundred items that embody these guidelines. Readers will find items that are familiar such as the ubiquitous coffee grinder but also those that are more unusual such as shelving systems and cigarette lighters. A fascinating essay places Dieter Rams in the context of modern design, from Bauhaus to Philip Johnson. Archival materials include photos of Rams' design team and excerpts from his publications and speeches. The book closes with a chronological overview of design icons, categorized by function, that show the enormous breadth of Rams' vision. Taken together, these images and texts offer the most comprehensive overview of Dieter Rams' work to date and will serve as both a reference and an inspiration for anyone interested in how and why good design matters.",
    image: ""
  },
  {
    title: "The Art of War",
    authors: "Sun Zhu",
    description:
      "The Art of War is the oldest and most influential military strategy text in existence. Ancient Chinese general, military strategist, and philosopher,  Sun Tzu's, teachings on how to successfully respond to and handle situations of conflict lives on as a must-read for for today's business leaders, politicians, and anyone heading into heated situations. Whether you approach this reading for its historical significance, or choose to apply this knowledge toward achieving success in your own life, this collection of mantras and proverbs is certain to leave you enlightened.",
    image: ""
  },
  {
    title: "Big Little Lies",
    authors: "Liane Moriarty",
    description:
      "A murder...A tragic accident...Or just parents behaving badly? What's indisputable is that someone is dead. Madeline is a force to be reckoned with. She's funny, biting, and passionate; she remembers everything and forgives no one. Celeste is the kind of beautiful woman who makes the world stop and stare but she is paying a price for the illusion of perfection. New to town, single mom Jane is so young that another mother mistakes her for a nanny. She comes with a mysterious past and a sadness beyond her years. These three women are at different crossroads, but they will all wind up in the same shocking place.",
    image: ""
  },
  {
    title: "The Great Gatsby",
    authors: "F. Scott Fitzgerald",
    description:
      "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
    image: ""
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });