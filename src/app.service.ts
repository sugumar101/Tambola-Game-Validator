import { Injectable } from '@nestjs/common';
import { ClaimRule } from './providers/game-rule.provider'

@Injectable()
export class AppService {
  // constructor(
  //   /**
  //    * Injecting Providers
  //    */
  //   private readonly claimRule: ClaimRule,
  // ){} 

  getHello(): string {
    return 'Hello World!';
  }

  validateClaim(ticket, numbersAnnounced, claimType){
    if (!ticket || !numbersAnnounced || !claimType) {
      return { valid: false, message: "Invalid claim" };
    }
    let claimRule = new ClaimRule();
    let ticketNums = claimRule.getTicketsByRowType(claimType, ticket);
    const rowTypes = [
      "Top Row",
      "Middle Row",
      "Bottom Row",
      "Full House",
      "Early Five"
    ]
    if (!rowTypes.includes(claimType) || !ticketNums) {
      return { valid: false, message: "Invalid claim" };
    }

    if (ticketNums.every(num => numbersAnnounced.includes(num))) {
      return { valid: true, message: "Accepted" };
    } else {
      return { valid: false, message: "Rejected" };
    }
  }
}
