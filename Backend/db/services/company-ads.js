const AdsModel = require("../models/ads");
const CompaniesModel = require("../models/companies");
module.exports = {
  createCompany(companyObject) {
    const promise = CompaniesModel.create(companyObject);
    return promise;
  },
  createAds(adsObject) {
    const promise = AdsModel.create(adsObject);
    return promise;
  },
  async getAllAds() {
    const ads = await AdsModel.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "company",
        },
      },
      {
        $unwind: {
          path: "$company",
        },
      },
      {
        $project: {
          _id: 1,
          companyId: 1,
          companyName: "$company.name",
          companyUrl: "$company.url",
          primaryText: 1,
          headline: 1,
          description: 1,
          CTA: 1,
          imageUrl: 1,
        },
      },
    ]);
    return ads;
  },
  async searchAds(serach_string) {
    const ads = await AdsModel.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "company",
        },
      },
      {
        $unwind: {
          path: "$company",
        },
      },
      {
        $project: {
          _id: 1,
          companyId: 1,
          companyUrl: "$company.url",
          companyName: "$company.name",
          primaryText: 1,
          headline: 1,
          description: 1,
          CTA: 1,
          imageUrl: 1,
        },
      },
      {
        $match: {
          $or: [
            {
              companyName: { $regex: serach_string, $options: "$i" },
            },
            {
              primaryText: { $regex: serach_string, $options: "$i" },
            },
            {
              headline: { $regex: serach_string, $options: "$i" },
            },
            {
              description: { $regex: serach_string, $options: "$i" },
            },
          ],
        },
        // $or:[
        //     {
        //         $match:{
        //             companyName:{$regex:serach_string,$options:"$i"}
        //         }
        //     },
        //     {
        //         $match:{
        //             primaryText:{$regex:serach_string,$options:"$i"}
        //         }
        //     },
        //     {
        //         $match:{
        //             headline:{$regex:serach_string,$options:"$i"}
        //         }
        //     },
        //     {
        //         $match:{
        //             description:{$regex:serach_string,$options:"$i"}
        //         }
        //     }
        // ]
      },
    ]);
    return ads;
  },
};
