import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = new AppService();

  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
    /**
     * Top Row
     */
    //Valid
    it('Claim Valid Top Row', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 63, 76, "_"],
        [7, "_", 23, 38, "_", 52, "_", "_", 80],
        [9, "_", 25, "_", "_", 56, 64, "_", 83],
      ];
      const announcedNumbers = [90, 4, 46, 63, 89, 16, 76, 48];
      const claimType = "Top Row";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: true,
        message: "Accepted",
      });
    });
    //Invalid
    it('Claim Invalid Top Row', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, "_", "_", 80],
        [9, "_", 25, "_", "_", 56, 64, "_", 83],
      ];
      const announcedNumbers = [90, 4, 46, 63, 89, 16, 76, 48];
      const claimType = "Top Row";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: false,
        message: "Rejected",
      });
    });

    /**
     * Middle Row
     */
    //Valid
    it('Claim Valid Middle Row', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, "_", "_", 80],
        [9, "_", 25, "_", "_", 56, 64, "_", 83],
      ];
      const announcedNumbers = [90, 7, 23, 63, 38, 52, 76, 80];
      const claimType = "Middle Row";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: true,
        message: "Accepted",
      });
    });
    //Invalid
    it('Claim Invalid Middle Row', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, 12, "_", 80],
        [9, "_", 25, "_", "_", 56, 64, "_", 83],
      ];
      const announcedNumbers = [90, 7, 23, 63, 38, 52, 76, 80];
      const claimType = "Middle Row";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: false,
        message: "Rejected",
      });
    });

    /**
     * Bottom Row
     */
    //Valid
    it('Claim Valid Bottom Row', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, "_", "_", 80],
        [9, "_", 25, "_", "_", 56, 64, "_", 83],
      ];
      const announcedNumbers = [9, 7, 25, 56, 38, 64, 76, 83];
      const claimType = "Bottom Row";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: true,
        message: "Accepted",
      });
    });
    //Invalid
    it('Claim Invalid Bottom Row', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, 12, "_", 80],
        [9, "_", 25, "_", "_", 5, 64, "_", 83],
      ];
      const announcedNumbers = [9, 7, 25, 56, 38, 64, 76, 83];
      const claimType = "Bottom Row";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: false,
        message: "Rejected",
      });
    });

    /**
     * Full House
     */
    //Valid
    it('Valid Full House Claim ', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, "_", "_", 80],
        [9, "_", 25, "_", "_", 56, 64, "_", 83],
      ];
      const announcedNumbers = [4, 48, 11, 76, 16, 80, 52, 38, 23, 7, 83, 64, 56, 25, 9];
      const claimType = "Full House";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: true,
        message: "Accepted",
      });
    });
    //Invalid
    it('Invalid Full House Claim', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, 12, "_", 80],
        [9, "_", 25, "_", "_", 5, 64, "_", 83],
      ];
      const announcedNumbers = [4, 48, 11, 76, 16, 80, 52, 38, 23, 7, 83, 64, 56, 25, 9];
      const claimType = "Full House";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: false,
        message: "Rejected",
      });
    });

    /**
     * Early Five
     */
    //Valid
    it('Valid Early Five Claim ', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, "_", "_", 80],
        [9, "_", 25, "_", "_", 56, 64, "_", 83],
      ];
      const announcedNumbers = [4, 48, 11, 76, 16, 80, 52, 38, 23, 7, 83, 64, 56, 25];
      const claimType = "Early Five";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: true,
        message: "Accepted",
      });
    });
    //Invalid
    it('Invalid Early Five Claim', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, 12, "_", 80],
        [9, "_", 25, "_", "_", 55, 64, "_", 83],
      ];
      const announcedNumbers = [7, 48, 11, 76, 16, 80, 52, 38, 23, 7, 83, 64, 56, 25, 9];
      const claimType = "Early Five";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: false,
        message: "Rejected",
      });
    });

    /**
     * Invalid Claims
     */
    it('Invalid Claim with No claim type ', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, "_", "_", 80],
        [9, "_", 25, "_", "_", 56, 64, "_", 83],
      ];
      const announcedNumbers = [4, 48, 11, 76, 16, 80, 52, 38, 23, 7, 83, 64, 56, 25, 9];
      const claimType = "";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: false,
        message: "Invalid claim",
      });
    });
    //Invalid
    it('Invalid Claim with No announce numbers', () => {
      const ticket = [
        [4, 16, "_", "_", 48, "_", 11, 76, "_"],
        [7, "_", 23, 38, "_", 52, "_", "_", 80],
        [9, "_", 25, "_", "_", 56, 64, "_", 83],
      ];
      const announcedNumbers = '';
      const claimType = "Early Five";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: false,
        message: "Invalid claim",
      });
    });
    //Invalid
    it('Invalid Claim with No ticket numbers', () => {
      const ticket = '';
      const announcedNumbers = [4, 48, 11, 76, 16, 80, 52, 38, 23, 7, 83, 64, 56, 25, 9];
      const claimType = "Early Five";

      expect(appService.validateClaim(ticket, announcedNumbers, claimType)).toEqual({
        valid: false,
        message: "Invalid claim",
      });
    });
  });
});
