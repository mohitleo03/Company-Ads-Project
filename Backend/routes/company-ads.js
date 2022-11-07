const express = require('express');
const router = express.Router();
const {createAds,createCompany,getAllAds,serachAds} = require('../controller/company-ads');
const {CREATE_ADS,CREATE_COMPANY,GET_ALL_ADS,SEARCH_ADS} = require('../utils/config').ROUTES;
router.post(CREATE_COMPANY,createCompany);
router.post(CREATE_ADS,createAds);
router.get(GET_ALL_ADS,getAllAds);
router.post(SEARCH_ADS,serachAds);
module.exports = router;