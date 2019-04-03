function mergeLists(l1, l2) {
  let result = [];
  while (l1.length || l2.length) {
    let char;
    if (l1[0] < l2[0]) {
      char = l1.shift();
    } else {
      char = l2.shift();
    }
    result.push(char);
  }
  return result;
}

mergeLists(['armadillo', 'brontosaurus', 'caterpillar', 'dog', 'elk', 'rattlesnake', 'shepherd'], ['afghan hound', 'alaskan bear', 'bear', 'cat', 'emu', 'stingray'])
