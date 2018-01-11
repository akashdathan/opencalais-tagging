"use strict";
/*------------------------------------------------------------------------------
   About      : Opencalais tagging
   
   Created on : Thu Jan 11 2018
   Author     : Akash Dathan
------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const calais_tagging_1 = require("./calais-tagging");
const text = `“President Trump’s threat to revise our country’s libel laws is, frankly, not credible,” the American Civil Liberties Union said in a statement on Wednesday.
Mr. Trump’s remarks reflected a broader frustration in his inner circle over critical coverage in recent days that has cast him as an erratic and ill-prepared commander in chief.
On Tuesday, Mr. Trump’s longtime personal lawyer, Michael D. Cohen, filed a defamation lawsuit against BuzzFeed News for publishing, last January, a salacious and mostly unsubstantiated intelligence dossier that purported to describe how Russia had aided the Trump campaign. The dossier characterized Mr. Cohen as a central figure in what it described as a globe-spanning conspiracy.
Mr. Cohen also filed a separate suit in federal court against Fusion GPS, the research firm that prepared the dossier. Fusion GPS and BuzzFeed both said they would aggressively defend themselves against the suits.
Last week, a lawyer working on Mr. Trump’s behalf, Charles J. Harder of Harder Mirell & Abrams in Beverly Hills, Calif., sent an 11-page cease-and-desist letter to the publisher of Mr. Wolff’s book, “Fire and Fury: Inside the Trump White House.”
Mr. Harder’s letter demanded that the publisher, Henry Holt and Company, withdraw the book from stores and apologize; the publisher responded by moving up the book’s release date and increasing its first print run to one million copies, from 150,000.
Mr. Trump’s remarks on Wednesday about libel law seemed, at times, to refer obliquely to the book, which debuted at No. 1 on the New York Times nonfiction best-seller list, and has provided fodder for dozens of news articles, opinion pieces and cable news segments.`;
const calais = calais_tagging_1.OpencalaisTagging.tag(text, 'ym2rpqymeSW7hyVYX5n61R4kJP0J5sa4');
//# sourceMappingURL=index.js.map