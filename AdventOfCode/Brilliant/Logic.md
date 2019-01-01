### Prompt:

Alice, Brie, and Carlos are in a footrace together and placed 1st, 2nd, and 3rd. Brie and Carlos did not place together and Alice beat Brie. Who won the race?

### Problem Solving:

Possibilities are:

1. Alice, Brie, Carlos // Eliminated because Brie and Carlos do not place next to each other
2. Brie, Carlos, Alice // Eliminated because Brie and Carlos do not place next to each other
3. Carlos, Alice, Brie // Only viable option
4. Alice, Carlos, Brie // Eliminated because Carlos and Brie do not place next to each other
5. Brie, Alice, Carlos // Eliminated because Alice beat Brie
6. Carlos, Brie, Alice // Eliminated because Carlos and Brie do not place next to each other

### Answer:

Carlos

### Prompt

Alice, Brie, and Carlos are competing in another footrace, this time joined by Drake.

1. There was one runner between Brie and Carlos
2. There were two runners between Carlos and Drake
3. Brie wasn't 2nd.

Based on the clues above, who placed 4th?

### Problem Solving

```
Alice Brie Drake Carlos - invalid because 2
Alice Brie Carlos Drake - invalid because 2
Alice Drake Brie Carlos - invalid because 2
Alice Drake Carlos Brie - invalid because 2
Alice Carlos Drake Brie - invalid because 2
Alice Carlos Brie Drake - invalid because 2

Brie Alice Carlos Drake - invalid because 2
Brie Alice Drake Carlos - invalid because 2
Brie Carlos Drake Alice - invalid because 2
Brie Carlos Alice Drake - invalid because 2
Brie Drake Alice Carlos - invalid because 2
Brie Drake Carlos Alice - invalid because 2

Carlos Alice Brie Drake - winner winner
Carlos Alice Drake Brie - invalid because 2
Carlos Brie Drake Alice - invalid because 2
Carlos Brie Alice Drake - invalid because 3
Carlos Drake Alice Brie - invalid because 2
Carlos Drake Brie Alice - invalid because 2

Drake Carlos Alice Brie - invalid because 2
Drake Carlos Brie Alice - invalid because 2
Drake Alice Carlos Brie - invalid because 1
Drake Alice Brie Carlos - invalid because 1
Drake Brie Carlos Alice - invalid because 1
Drake Brie Alice Carlos - invalid because 3
```

#### Prompt:
Lee, Miriam, Naila, and Otis were the only 4 participants in a cake-baking competiton - they placed 1st, 2nd, 3rd, and 4th in some order.  Also,
1. Miriam wasn't first, and Otis wasn't last
2. Naila placed next to neither Miriam nor Otis
3. Lee scored better than Miriam
Based on these clues, who placed 2nd and 3rd?

#### Problem Solving:
Since Miriam wasn't first and Otis wasn't last, that narrows down a bunch:

Excluded by first clue:
Miriam Naila Otis Lee
Miriam Naila Lee Otis
Miriam Lee Naila Otis
Miriam Lee Otis Naila
Miriam Otis Naila Lee
Miriam Otis Lee Naila
Lee Miriam Naila Otis
Lee Naila Miriam Otis
Naila Miriam Lee Otis
Naila Lee Miriam Otis

Excluded by second clue:
Otis Naila Miriam Lee
Otis Naila Lee Miriam
Otis Lee Naila Miriam
Otis Lee Miriam Naila
Lee Otis Miriam Naila
Lee Miriam Otis Naila
Otis Miriam Naila Lee
Naila Miriam Otis Lee
Lee Naila Otis Miriam
Naila Otis Miriam Lee
Naila Otis Lee Miriam
Lee Otis Naila Miriam


Excluded by third clue:
Otis Miriam Lee Naila

Winner
Naila Lee Otis Miriam

#### Prompt:
Three bees named Elebuzz, Freebuzz, and Greenbuzz participate in a contest to gather the most nectar and place 1st, 2nd, and 3rd in some order.
Elebuzz gathers more than Freebuzz.  How many different orders are there of placing all three bees?

#### Problem Solving:

Elebuzz Freebuzz Greenbuzz
Elebuzz Greenbuzz Freebuzz
Greenbuzz Elebuzz Freebuzz

Excluded:
Greenbuzz Freebuzz Elebuzz
Freebuzz Greenbuzz Elebuzz
Freebuzz Elebuzz Greenbuzz

#### Prompt:

Alice, Brie, Carlos and Drake are taking a true-false quiz at school.  There are four questions.  The teacher was sneaky and made the answer to every question 'true'.  Each person got a different score, with Alice scoring the highest.  How many ways could Alice have filled out the answer sheet?

Note: The answer sheet has an ordered sequence of true-false answers.  For example, true-true-false-false, true-false-true, false, and false-false-true-true would all score 50%.

#### Problem Solving
If there are four people taking the test and they all have different scores, that means that either the lowest grade is 1/4 and Alice got 4/4 or the lowest grade is 0/4 and Alice got 3/4.

True-True-True-True - 4/4
False-True-True-True - 3/4
True-False-True-True - 3/4
True-True-False-True - 3/4
True-True-True-False - 3/4
5 possible

#### Prompt
Three beez: Elebuzz, Freebuzz, and Greenbuzz participate in another contest to gather the most nectar.  This time, there are 10 bees competing.  There are no ties.

1. Freebuzz and Greenbuzz place with 7 bees between them
2. Greenbuzz and Elebuzz place with 3 bees between them.

How many different ways could Elebuzz have placed?

#### Problem solving
Greenbuzz 1 2 3 Elebuzz 5 6 7 Freebuzz
Freebuzz 1 2 3 Elebuzz 5 6 7 Greenbuzz
Two ways

#### Prompt
Lee, Miriam, Nail, and Otis - if Lee did not finish in a place next to Miriam, how many different ways could they be ordered?

#### Problem Solving
Excluded
Miriam Lee Otis Naila
Miriam Lee Naila Otis
Lee Miriam Naila Otis
Naila Miriam Lee Otis
Naila Lee Miriam Otis
Lee Miriam Otis Naila
Otis Naila Miriam Lee
Otis Naila Lee Miriam
Naila Otis Miriam Lee
Naila Otis Lee Miriam
Otis Miriam Lee Naila
Otis Lee Miriam Naila


Not excluded:
Miriam Naila Otis Lee
Miriam Naila Lee Otis
Miriam Otis Naila Lee
Miriam Otis Lee Naila
Lee Naila Miriam Otis
Otis Lee Naila Miriam
Lee Otis Miriam Naila
Otis Miriam Naila Lee
Naila Miriam Otis Lee
Lee Naila Otis Miriam
Lee Otis Naila Miriam
Naila Lee Otis Miriam

#### Prompt
Have three boxes of balloons:
- Yellow box
- Red box
- Blue box

Boses are all mislabeled.  How many do you have to open to determine which balloon is in which box?

#### Problem solving:
- Yellow box
    - could be red or blue
- Red box 
    - could be yellow or blue
- Blue box
    - could be yellow or red

If you open the yellow box and find that it is red, it means that the blue box must be yellow, which means that the red box has to be blue.  You only have to open one box.

#### Prompt:
There are four boxes of balloons that are mislabeled: red, yellow, blue, green.  How many boxes need you open to determine where the different colored balloons are?

#### Problem solving
- Red box could be either yellow or blue or green
- Yellow box could be either red or blue or green
- Green box could be either red or yellow or blue
- Blue box could be either red or yellow or green

If open red box and find yellow, you can then move to yellow box to find what color inhabits the yellow box.  If the yellow box has a red balloon, we know that the blue and green balloons are in each other's box.  Else, if the balloon found in yellow is blue, we know that the red balloon must be in the green box and the red balloon must be in the blue box

#### Note: If there are four different boxes that may or may not be mislabeled, the minimum number of boxes necessary to know which balloon is in which box is three.

