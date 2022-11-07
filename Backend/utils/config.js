module.exports = {
    ROUTES:{
        ROOT:'/',
        GET_ALL_ADS:'/get_all_ads',
        SEARCH_ADS:'/search_ads',
        CREATE_COMPANY:'/create_company',
        CREATE_ADS:'/create_ads'
    },
    STATUS_CODES:{
        SUCCESS:200,
        SERVER_CRASH:500,
        NOT_FOUND:404
    },
    SCHEMAS:{
        COMPANIES:'companies',
        ADS:'ads'
    }
}