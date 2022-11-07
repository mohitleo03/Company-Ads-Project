const { Schema, SchemaTypes } = require("../connect");
const { COMPANIES } = require("../../utils/config").SCHEMAS;
const mongoose = require("../connect");
const companySchema = new Schema(
  {
    _id: { type: SchemaTypes.Number, required: true },
    name: { type: SchemaTypes.String, required: true },
    url: { type: SchemaTypes.String, required: true },
  },
  {
    timestamps: true,
  }
);
const CompaniesModel = mongoose.model(COMPANIES,companySchema);
module.exports = CompaniesModel;