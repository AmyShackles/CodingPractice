/* --- Day 2: Inventory Management System ---
You stop falling through time, catch your breath, and check the screen on the
device. "Destination reached. Current Year: 1518. Current Location: North Pole
Utility Closet 83N10." You made it! Now, to find those anomalies.

Outside the utility closet, you hear footsteps and a voice. "...I'm not sure
either. But now that so many people have chimneys, maybe he could sneak in that
way?" Another voice responds, "Actually, we've been working on a new kind of
suit that would let him fit through tight spaces like that. But, I heard that a
few days ago, they lost the prototype fabric, the design plans, everything!
Nobody on the team can even seem to remember important details of the project!"

"Wouldn't they have had enough fabric to fill several boxes in the warehouse?
They'd be stored together, so the box IDs should be similar. Too bad it would
take forever to search the warehouse for two similar box IDs..." They walk too
far away to hear any more.

Late at night, you sneak to the warehouse - who knows what kinds of paradoxes
you could cause if you were discovered - and use your fancy wrist device to
quickly scan every box and produce a list of the likely candidates (your puzzle
input).

To make sure you didn't miss any, you scan the likely candidate boxes again,
counting the number that have an ID containing exactly two of any letter and
then separately counting those with exactly three of any letter. You can
multiply those two counts together to get a rudimentary checksum and compare it
to what your device predicts.

For example, if you see the following box IDs:

abcdef contains no letters that appear exactly two or three times.
bababc contains two a and three b, so it counts for both.
abbcde contains two b, but no letter appears exactly three times.
abcccd contains three c, but no letter appears exactly two times.
aabcdd contains two a and two d, but it only counts once.
abcdee contains two e.
ababab contains three a and three b, but it only counts once.
Of these box IDs, four of them contain a letter which appears exactly twice, and
three of them contain a letter which appears exactly three times. Multiplying
these together produces a checksum of 4 * 3 = 12.

What is the checksum for your list of box IDs? */
day2Input = `ohvflkatysoimjxbunazgwcdpr
ohoflkctysmiqjxbufezgwcdpr
ohvflkatysciqwxfunezgwcdpr
fhvflyatysmiqjxbunazgwcdpr
ohvhlkatysmiqjxbunhzgwcdxr
ohvflbatykmiqjxbunezgscdpr
ohvflkatasaiqjxbbnezgwcdpr
ohvflkatyymiqjxrunetgwcdpr
ohvflkatbsmiqhxbunezgwcdpw
oheflkytysmiqjxbuntzgwcdpr
ohvflkatrsmiqjibunezgwcupr
ohvflkaiysmiqjxbunkzgwkdpr
ohvilkutysmiqjxbuoezgwcdpr
phvflkatysmkqjxbulezgwcdpr
ohvflkatnsmiqjxbznezgpcdpr
ohvylkatysriqjobunezgwcdpr
ohvflkatytmiqjxbunezrwcypr
ohvonkatysmiqjxbunezgwxdpr
ohvflkatgsmoqjxyunezgwcdpr
ohvflkbtqsmicjxbunezgwcdpr
ohvflkatysmgqjqbunezgwcdvr
ohvtlkatyrmiqjxbunezgwcdpi
ohvflkatyskovjxbunezgwcdpr
ohvflkayysmipjxbunezgwcdpu
ohvalkltysmiqjxbunezgecdpr
ohvflkatysmiqjxiunezgnndpr
ohvflkatyomiqjxbbnezgwcdpp
ohvflkatysmiqjxbuoezgncdpy
omvflkvtysmiqjxwunezgwcdpr
ohvflkatynmicjxbunezgwpdpr
ohvflkatyqmaqjxbunezvwcdpr
ohbfhkatysmiqjxbunezgwcdqr
ohvflkatesmiqjvbunezpwcdpr
ohvflkatysmsqjxiunezgwcdhr
ohvfjkatysmwqjxbunezgwcddr
ohvflkanysmiqjxbunwkgwcdpr
ohqflkatysmiqjxbuuezgwcddr
ohvflkatysmvqjxbznlzgwcdpr
ohvflkatysmiqjxbunjzwwqdpr
ohvfjkatysmiqxxbunezgwcupr
chvfxkatysmiqjxxunezgwcdpr
uhvflkatitmiqjxbunezgwcdpr
ohvflbatysmiqjxbuntzgwcdor
ohvflkmtysmmqjxbunexgwcdpr
ohvflsatysmyqjxjunezgwcdpr
ohvfskatysmiqjjbunezgwcdpg
ohvflkatysniqjxbunexgwcrpr
ohvfekatysmiqjxbunedswcdpr
ohvfltatysmjqjxbunezghcdpr
ohvflkatydmiqjxvunezggcdpr
oavflkatysmiqjxtunazgwcdpr
ohvflkltysmiqjxbuzeugwcdpr
ohbflkatysmiqjybuuezgwcdpr
ehvfzkatysmiqjxbuhezgwcdpr
odvflkatssmiqjxbunezgwcdpj
ohvflkatysmiqjzbufezgwbdpr
jhvflkdtysmiqqxbunezgwcdpr
ohvflkatysmiqjwbunengwcnpr
ohvfskatysmiqjxbxuezgwcdpr
ohvflkatysmiqjobvnezgwcrpr
ohvrlkatysmiqjxbwnezgrcdpr
ofvflkatysmiqjxbunezpwcdwr
ohvfxdatyomiqjxbunezgwcdpr
yhvflkatydmiqjxbubezgwcdpr
ohvflkatysdiqjxbuneztwcspr
ohvflkatydmiquxbunezgwcbpr
ohvflkatysmiqcxbukezgwcdwr
ohvflkntasmiqjxbunezghcdpr
lhvflkatysmiqjxbunezqwckpr
ehifikatysmiqjxbunezgwcdpr
ohvflkatysmiqjcbutezgwcdpm
ohvflkatjssiqrxbunezgwcdpr
oyvflkavysmiqjxlunezgwcdpr
orvflkgtysmiqjxbukezgwcdpr
ihvflkatysmiqaxbunpzgwcdpr
ohvflkatusmiqjxbbnezgwchpr
ohvflkatysbiqjxvuneugwcdpr
ohvflkatysmiqjcbungzgwcwpr
ovvflkatysmidjxbunezgscdpr
ohvflqatysmiljxbunfzgwcdpr
ghvfokatysmiqjxbunqzgwcdpr
nxvflkatysmxqjxbunezgwcdpr
ohvflkatysmiqjxbexezgwrdpr
ohvfrkatysmhqjxbuntzgwcdpr
ohvflkvtysmiqjxocnezgwcdpr
ohvglkgtysmiqjxnunezgwcdpr
ohvflkatysmnqjxbunecgwqdpr
oyvflkatysgiqjxbcnezgwcdpr
ofvflkatysmiqjxbunfzgwcdpg
otvflkttysmiqjxbunezgwmdpr
ohvflkvtysmiqjbbunezgzcdpr
ahvflkatysyiqjxbunezvwcdpr
ohiflkatysmydjxbunezgwcdpr
ohvfwkatysmvqjxbunezwwcdpr
ohvflkatysbiqjxbunergwodpr
hhvsdkatysmiqjxbunezgwcdpr
ihvflkwtysmiqjxbunezgacdpr
ohvfljatysmiqcxbunuzgwcdpr
ohvflkatysqiqlwbunezgwcdpr
ohvflkauysmkqjxwunezgwcdpr
ohvflkatysmoqjqbunezgwodpr
ohvslkvtysmipjxbunezgwcdpr
olvflkatysmiujxbunezgwctpr
osvflxatysmiqjxbenezgwcdpr
orvflkhtysmiqjxbinezgwcdpr
ohcflkatystiqjxbunezbwcdpr
ohcflkatyfmifjxbunezgwcdpr
ohvflkatdsmiqjxbrnezgwcdpt
ohvflkatysmiqjxbwnqzawcdpr
oevflkakysmiqjxbunezgwcdpt
ofvflkatysmiqjxbunbqgwcdpr
ohvflkatysmdqjxbunefqwcdpr
ohvklkalysmiqjxbunezgwcepr
ocvflhatysmiqjxbunezzwcdpr
uhvflkatysmiqmxbunezgwcxpr
ohvflkatyshikjhbunezgwcdpr
lbvflkatysmoqjxbunezgwcdpr
ohvflkatssmuqjxbunezgscdpr
ohvflkatysmifyxbuvezgwcdpr
ohvfikatysmiqjxbunezgwfupr
ohvmlkaiysmiqjxqunezgwcdpr
ohvflkatysmiqjxiunpzgwcdpo
lhvflkatysmpqjxbenezgwcdpr
ohvflkatysmiqjobunengwczpr
ohoflkatysniqjxbunezgccdpr
ohvfxkatysmiqjgbunyzgwcdpr
ohvflkytysmiljxbubezgwcdpr
hhvsdkatysmiqjxjunezgwcdpr
ohvflkatysmiqjtuunezgwcdpt
ohvfdkxtysmiqjubunezgwcdpr
ohxflkatysmiyjxbunezgwcdhr
ohvflkatysmiqjibunezgwcppd
ohvflkatysmihjxbunezgwcdhj
ohvflkatysmiqjxronezgwcdvr
ofrflxatysmiqjxbunezgwcdpr
ohvwlkatysmiqjxounezgscdpr
ohvflkatcodiqjxbunezgwcdpr
oqvflkatysmiqjxbunebgwmdpr
ohvflmatysmisjxbunezqwcdpr
ovvflkatysmiqjxbuxezgwcdpe
ohvflkatysmdejxbuneztwcdpr
hhvflkathsmiqjxbwnezgwcdpr
ohkflkatlsmsqjxbunezgwcdpr
ohvflkktysmizjxhunezgwcdpr
ohzflkatysmiqjrbunezgwcdpj
ohuflwatysmiqjxbunezgwcdgr
ohvflkatysmiqvxmunpzgwcdpr
xhvflkwtysmiqjxbunezgwjdpr
whvflkatysmiqjxbunezgzcopr
ohvflkayysmiqjxuznezgwcdpr
khvflkasysmiqjxbunezgwcdpv
ohvflkatylmiqjxbpnozgwcdpr
ohvflkgtysziqjxbunezgwgdpr
ohvfljaiysmiqjxbuvezgwcdpr
ohvflkxtyslizjxbunezgwcdpr
ohzflkatysmiqjxbcnezgwcdar
ohvflkatysmiqjxbisecgwcdpr
shvflkatyjmiqjkbunezgwcdpr
mhvflkatysmiqjxvunezgwcdpk
ohfflkatysmiqjxbunczgwcppr
ohvflkatysmiqjkzunezgwcdpc
ohvflkatysmifjxbuneygwctpr
ohvflkatysmimjbbunezgwcdpe
ohvflkatjsciqjxbunezgwcdpa
ohvxlkatysmitjxbunezswcdpr
ohvslkatfsmiqjxbunezgwudpr
ohvflkatysmiqexbugezgwcdnr
onvflkatysmiqjxkunezgtcdpr
fhsflkalysmiqjxbunezgwcdpr
oyvflkatysmiqjobxnezgwcdpr
ohvflkatysmiqjxbunezswgdvr
phvflkatyymiqjxvunezgwcdpr
oivflzutysmiqjxbunezgwcdpr
ohvflkftysmiqjxbunezkwcopr
ohvflkatysmwnjxbunezgwcdpp
ohvflkatysmiqkxcunezgwndpr
phvklkatysmiqjhbunezgwcdpr
ohvflrawysmiqjxbunhzgwcdpr
ohvflkatysmiqjxbunecgwcdig
ohvflpakysmiqjxbunezgwrdpr
odvflkatykmiqjxbunezglcdpr
ohtflkatysiiqjxblnezgwcdpr
lhvfpkatysmiqjxbupezgwcdpr
ohvflkatdsmiqjpbunezgwcdps
ohvflkztysmiqjxvunezgwjdpr
ohvflbatysmxqoxbunezgwcdpr
ohvklkaigsmiqjxbunezgwcdpr
ohvfgkawysmiqjxbunezgwcdur
ohvflkatyskpqjlbunezgwcdpr
ohvflkatyqmiqjhbupezgwcdpr
ohqflkatysmiqjxzonezgwcdpr
ohxfnkatyymiqjxbunezgwcdpr
ohmflkatpsmiqjxbunezgwcdpw
ohvflkatysmiqjibnnewgwcdpr
vevflkatysmiqjxbunezgwcypr
ohvflkatydmiqwxbungzgwcdpr
ohsrlkatysmiqjxbcnezgwcdpr
ohvflkptyvmiqexbunezgwcdpr
opzflkatysmiqjxrunezgwcdpr
ohvflkitysmiqjxcunezgwcmpr
ohvflkatysmhhjxblnezgwcdpr
ohvflkatysfiqjxbunrzgwmdpr
ohvflkatyamibjxbunezgwcdpf
ohvflkalysmigjxbunezggcdpr
ohvflkatwsmisjxbunezgdcdpr
dhvflkatysmlqjxbunszgwcdpr
ohvflkatysmiqjxbueeygwcbpr
ohvflkatgsmiqjnbunezhwcdpr
svvflkatysmiqjxbunezgwckpr
opvflkatysmiqpxbufezgwcdpr
ohnvlkatysmiqjxbunezglcdpr
phvflkutysjiqjxbunezgwcdpr
ohvflabtysmiqjjbunezgwcdpr
ouvflkatysmiqjsbunezgwcdpk
osvflkatysmijjxbunezgwcypr
owvflkatysmiqjxbukxzgwcdpr
ohvfliatvsmiljxbunezgwcdpr
ohvflkatysmiqjxbumezbwtdpr
ohvflkatyfcicjxbunezgwcdpr
ohvflkatysmiqldbunezgfcdpr
oqvflkatysmiqixkunezgwcdpr
ohvflkatysmiqjxbulezgicdpe
ohvflkatysmiqjxbuniegwcdpl
ohvflkatysmiqjwbunbzgwcdhr
ohvflkatysmiqjdbunezgwwdkr
ohqflkytysmiqjxbunezgwcdpc
ohvflkatysmigjxbunezqwwdpr
ohvfloatysmiqjpbumezgwcdpr
ohvklkathkmiqjxbunezgwcdpr
ohvflkstjsmiqjxbunezgwctpr
ohvvlkatysmiqjxbunewgwcdir
ohnflkatysmiqjxbunszgwcdlr
ohvflkatysmnqjxbunezgxcdlr
ohvfrkatysmiqjxbonezgwcdor
ihvflkatysmiqjxbuneogwcxpr
ohvflkatysmiqjxbunecgwcccr
owvflkatysmivjxbunezgwjdpr
ohvflkgtysmiqjxbunczhwcdpr
ohyqlkatysmiqjxbunezgwcypr
ohvflkatysmiqjvbunezuwcdpw
ohvflkathsmiqmxbuoezgwcdpr
ehvjlkajysmiqjxbunezgwcdpr
ohvflkltysmiqjxblnezgwjdpr
oovflkvtfsmiqjxbunezgwcdpr
olvfzkatysmiqjxyunezgwcdpr
ohvflkatysqitjxbunezgncdpr
yhvflkatysmkqjxbunazgwcdpr
zlvolkatysmiqjxbunezgwcdpr
ohvflpatysmiqjxbunezgwcapb
ohvflkatysmuqjxbunezgfcdur`

function checksum(input) {
  let arr = input.split('\n');
  let threeCount = 0;
  let twoCount = 0;
  for (let row = 0; row < arr.length; row++) {
    let counts = {};
    let three = 0;
    let two = 0;
    for (let col = 0; col < arr[row].length; col++) {
      if (counts[arr[row][col]]) {
        counts[arr[row][col]]++;
      } else {
        counts[arr[row][col]] = 1;
      }
      if (counts[arr[row][col]] == 2) {
        two++
      } else if (counts[arr[row][col]] == 3) {
        two--;
        three++;
      } else if (counts[arr[row][col]] > 3) {
        three--;
      }
    }
    if (two > 0) {
      twoCount++;
    }
    if (three > 0) {
      threeCount++
    }
  }
  return threeCount * twoCount;
}

checksum(day2Input);

/*--- Part Two ---
Confident that your list of box IDs is complete, you're ready to find the boxes
full of prototype fabric.

The boxes will have IDs which differ by exactly one character at the same
position in both strings. For example, given the following box IDs:

abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
The IDs abcde and axcye are close, but they differ by two characters (the second
and fourth). However, the IDs fghij and fguij differ by exactly one character,
the third (h and u). Those must be the correct boxes.

What letters are common between the two correct box IDs? (In the example above,
this is found by removing the differing character from either ID, producing
fgij.)*/
