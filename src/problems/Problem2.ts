export class Problem2 {
  public cellCompete(states: number[], days: number): number[] {
    let stateLength: number = states.length;
    for (let i = 0; i < days; i++) {
      let statesClone: number[] = [...states];
      states[0] = statesClone[1];
      states[stateLength-1] = statesClone[stateLength - 2];
      for (let j = 1; j < stateLength-1; j++) {
        states[j] = statesClone[j-1] ^ statesClone[j+1];
      }
    }
    return states;
  }
}