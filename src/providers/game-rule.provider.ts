
export class ClaimRule{

    public getTicketsByRowType(rowType: string, ticket: any){
        let ticketNums = []
        switch (rowType) {
            case "Top Row":
                return ticket[0].filter(item=> item !== "_");
            case "Middle Row":
                return ticket[1].filter(item=> item !== "_");
            case "Bottom Row":
                return ticket[2].filter(item=> item !== "_");
            case "Full House":
                return ticket.flat().filter(item=> item !== "_");
            case "Early Five":
                return ticket.flat().filter(item=> item !== "_").slice(0, 5);
            default:
              return null;
          }
          return ticketNums;
    }
}