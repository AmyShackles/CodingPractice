function power_set(kirbies) {
  let poses = [[]];
  for (let kirby in kirbies) {
    let length = poses.length;
    for (let pose in poses) {
      let dance = poses[pose];
      poses.push(dance.concat(kirbies[kirby]))
    }
  }
  return poses;
}

console.table(power_set(['(>*_*<)', '(>*_*)>', '<(*_*)>', '<(*_*<)' ]))
