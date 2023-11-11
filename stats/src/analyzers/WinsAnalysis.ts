import { Analyzer } from '../Summary'
import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'

export class WinsAnalysis implements Analyzer {
  constructor(public team: String) {}

  run(matches: MatchData[]): string {
    let wins = 0

    matches.forEach((match) => {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++
      }
    })

    return `Team ${this.team} won ${wins} games.`
  }
}
