require("express-async-errors");
const BloodBank = require("../models/bloodbank-model/bloodbankModel");

/**
 * @desc Get all public bloodbanks
 * @returns an array of all available public bloodbanks
 */
module.exports = class bloodbankServices {
  static async retrieveAllPublicBloodbanks() {
    return await BloodBank.find(
      { bloodbankType: "public" },
      { bloodbankName: true, _id: false }
    ).lean();
  }
};
