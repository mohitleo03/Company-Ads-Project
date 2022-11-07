const { Schema, SchemaTypes } = require("../connect");
const { ADS } = require("../../utils/config").SCHEMAS;
const mongoose = require("../connect");
const adsSchema = new Schema(
  {
    _id: { type: SchemaTypes.Number, required: true },
    companyId: { type: SchemaTypes.Number, required: true },
    primaryText: { type: SchemaTypes.String, required: true },
    headline: { type: SchemaTypes.String, required: true },
    description: { type: SchemaTypes.String, required: true },
    CTA: { type: SchemaTypes.String, required: true },
    imageUrl: { type: SchemaTypes.String, required: true },
  },
  {
    timestamps: true,
  }
);
const AdsModel = mongoose.model(ADS, adsSchema);
module.exports = AdsModel;
