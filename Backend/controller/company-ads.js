const { SUCCESS, SERVER_CRASH, NOT_FOUND } =
  require("../utils/config").STATUS_CODES;
const CompanyAdsServices = require("../db/services/company-ads");
const CompanyAdsController = {
  createCompany(request, response) {
    const companyObject = request.body;
    const promise = CompanyAdsServices.createCompany(companyObject);
    promise
      .then((value) => {
        response
          .status(SUCCESS)
          .json({ message: "company added successfully" });
      })
      .catch((error) => {
        response
          .status(SUCCESS)
          .json({ message: "can't add company", error: error });
      });
  },
  createAds(request, response) {
    const adsObject = request.body;
    const promise = CompanyAdsServices.createAds(adsObject);
    promise
      .then((value) => {
        response
          .status(SUCCESS)
          .json({ message: "advertisement added successfully" });
      })
      .catch((error) => {
        response
          .status(NOT_FOUND)
          .json({ message: "can't add advertisement", error: error });
      });
  },
  async getAllAds(request, response) {
    const companyAds = await CompanyAdsServices.getAllAds();
    if (companyAds.isEmpty) {
      response.status(NOT_FOUND).json({ message: "no advertisement found" });
    } else {
      response.status(SUCCESS).json({ advertisements: companyAds });
    }
  },
  async serachAds(request,response ) {
    const search_string = request.body.search_string;
    const companyAds = await CompanyAdsServices.searchAds(search_string);
    if (companyAds.isEmpty) {
      response.status(NOT_FOUND).json({ message: "no advertisement found" });
    } else {
      response.status(SUCCESS).json({ advertisements: companyAds });
    }
  },
};
module.exports = CompanyAdsController;
