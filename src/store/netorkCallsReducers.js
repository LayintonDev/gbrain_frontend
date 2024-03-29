import Cookies from 'js-cookie';
import {
    BUY_AIRTIME_FAIL,
    BUY_AIRTIME_REQUEST,
    BUY_AIRTIME_SUCCESS,
    BUY_CG_DATA_FAIL,
    BUY_CG_DATA_REQUEST,
    BUY_CG_DATA_SUCCESS,
    BUY_DATA_FAIL,
    BUY_DATA_REQUEST,
    BUY_DATA_SUCCESS,
    BUY_ELECTRICITY_FAIL,
    BUY_ELECTRICITY_REQUEST,
    BUY_ELECTRICITY_SUCCESS,
    BUY_EXAM_PIN_FAIL,
    BUY_EXAM_PIN_REQUEST,
    BUY_EXAM_PIN_SUCCESS,
    BUY_TV_CABLES_FAIL,
    BUY_TV_CABLES_REQUEST,
    BUY_TV_CABLES_SUCCESS,
    FORGET_PASSWORD_FAIL,
    FORGET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PIN_FAIL,
    FORGET_PIN_REQUEST,
    FORGET_PIN_SUCCESS,
    FUND_WALLET_BY_MONNIFY_FAIL,
    FUND_WALLET_BY_MONNIFY_REQUEST,
    FUND_WALLET_BY_MONNIFY_SUCCESS,
    GET_AIRTEL_CG_DATA_PLAN_FAIL,
    GET_AIRTEL_CG_DATA_PLAN_REQUEST,
    GET_AIRTEL_CG_DATA_PLAN_SUCCESS,
    GET_AIRTEL_DATA_PLAN_FAIL,
    GET_AIRTEL_DATA_PLAN_REQUEST,
    GET_AIRTEL_DATA_PLAN_SUCCESS,
    GET_ELECTRICITY_PROVIDERS_FAIL,
    GET_ELECTRICITY_PROVIDERS_REQUEST,
    GET_ELECTRICITY_PROVIDERS_SUCCESS,
    GET_GLO_CG_DATA_PLAN_FAIL,
    GET_GLO_CG_DATA_PLAN_REQUEST,
    GET_GLO_CG_DATA_PLAN_SUCCESS,
    GET_GLO_DATA_PLAN_FAIL,
    GET_GLO_DATA_PLAN_REQUEST,
    GET_GLO_DATA_PLAN_SUCCESS,
    GET_LOGGED_IN_USER_FAIL,
    GET_LOGGED_IN_USER_REQUEST,
    GET_LOGGED_IN_USER_SUCCESS,
    GET_MTN_DATA_PLAN_FAIL,
    GET_MTN_DATA_PLAN_REQUEST,
    GET_MTN_DATA_PLAN_SUCCESS,
    GET_MTN_SME_DATA_PLAN_FAIL,
    GET_MTN_SME_DATA_PLAN_REQUEST,
    GET_MTN_SME_DATA_PLAN_SUCCESS,
    GET_NOTIFICATION_FAIL,
    GET_NOTIFICATION_REQUEST,
    GET_NOTIFICATION_SUCCESS,
    GET_SELL_AIRTIME_DETAILS_FAIL,
    GET_SELL_AIRTIME_DETAILS_REQUEST,
    GET_SELL_AIRTIME_DETAILS_SUCCESS,
    GET_TRANSACTION_HISTORY_FAIL,
    GET_TRANSACTION_HISTORY_REQUEST,
    GET_TRANSACTION_HISTORY_SUCCESS,
    GET_VARIANTS_FAIL,
    GET_VARIANTS_REQUEST,
    GET_VARIANTS_SUCCESS,
    GIFT_DATA_FAIL,
    GIFT_DATA_REQUEST,
    GIFT_DATA_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    SELL_AIRTIME_FAIL,
    SELL_AIRTIME_REQUEST,
    SELL_AIRTIME_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    VERIFY_DETAILS_FAIL,
    VERIFY_DETAILS_REQUEST,
    VERIFY_DETAILS_SUCCESS,
    VERIFY_METER_FAIL,
    VERIFY_METER_REQUEST,
    VERIFY_METER_SUCCESS
} from './constant';

export const initialGloDataState = {
    gloDataPlans: [],
    loading: false,
    error: null
};

export const initialGloCgDataState = {
    gloCgDataPlans: [],
    loading: false,
    error: null
};

export const initialMtnDataState = {
    mtnDataPlans: [],
    loading: false,
    error: null
};
export const initialMtnSmeDataState = {
    mtnSmeDataPlans: [],
    loading: false,
    error: null
};
export const initialAirtelDataState = {
    airtelDataPlans: [],
    loading: false,
    error: null
};
export const initialAirtelCgDataState = {
    airtelCgDataPlans: [],
    loading: false,
    error: null
};

export const initialUserState = {
    loading: false,
    error: null,
    user: {}
};

export const initialRegisterState = {
    loading: false,
    error: null,
    user: {}
};

export const initialPinResetState = {
    pin_reset_loading: false,
    error: null,
    user: {}
};
export const initialUserUpdate = {
    Update_user_loading: false,
    error: null,
    user: {}
};

export const initialLoginState = {
    loading: false,
    error: null,
    user: {}
};
export const initialresetState = {
    loading: false,
    error: null,
    user: {}
};

export const initialLogoutState = {
    loading: false,
    error: null,
    user: {}
};

export const initialAirtimeOrderState = {
    airtime: {},
    loading: false,
    error: null
};
export const initialSellAirtimeState = {
    airtime: {},
    airtimeLoading: false,
    error: null
};
export const initialDataOrderState = {
    data: {},
    loading: false,
    error: null
};
export const initialDataGiftingOrderState = {
    dataGiftData: {},
    dataGiftloading: false,
    dataGiftError: null
};
export const initialCgOrderState = {
    CgData: {},
    Cgdataloading: false,
    CgdataError: null
};
export const initialFundingState = {
    paymentStatus: {},
    loading: false,
    error: null
};
export const initialVariationsState = {
    variations: [],
    loading: false,
    error: null
};
export const initialElectriProvidersState = {
    providers: [],
    loading: false,
    error: null
};
export const initialTvCableState = {
    data: {},
    loading: false,
    error: null
};
export const initialElectricityState = {
    data: {},
    loading: false,
    error: null
};
export const initialExamPinState = {
    data: {},
    loading: false,
    error: null
};
export const initialHistoryState = {
    histories: [],
    loading: false,
    error: null
};
export const initialAirtimeDetailState = {
    airtimeDetails: [],
    loading: false,
    error: null
};
export const initialBtcDetailState = {
    btcDetails: [],
    loading: false,
    error: null
};
export const verifyDetailsState = {
    verifyDetails: null,
    verifyLoading: false,
    error: null
};
export const verifyMeterState = {
    meterVerify: null,
    verifyMeterLoading: false,
    error: null
};

export const initialNotificationState = {
    notification: {},
    notificationLoading: false,
    error: null
};
// get data plans reducers starts here

export const getGloDataReducer = (state = initialGloDataState, action) => {
    switch (action.type) {
        case GET_GLO_DATA_PLAN_REQUEST:
            return { ...state, loading: true };

        case GET_GLO_DATA_PLAN_SUCCESS:
            return { ...state, loading: false, gloDataPlans: action.payload };
        case GET_GLO_DATA_PLAN_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getGloCgDataReducer = (state = initialGloCgDataState, action) => {
    switch (action.type) {
        case GET_GLO_CG_DATA_PLAN_REQUEST:
            return { ...state, loading: true };

        case GET_GLO_CG_DATA_PLAN_SUCCESS:
            return { ...state, loading: false, gloCgDataPlans: action.payload };
        case GET_GLO_CG_DATA_PLAN_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getMtnSmeDataReducer = (state = initialMtnSmeDataState, action) => {
    switch (action.type) {
        case GET_MTN_SME_DATA_PLAN_REQUEST:
            return { ...state, loading: true };

        case GET_MTN_SME_DATA_PLAN_SUCCESS:
            return { ...state, loading: false, mtnSmeDataPlans: action.payload };
        case GET_MTN_SME_DATA_PLAN_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getMtnDataReducer = (state = initialMtnDataState, action) => {
    switch (action.type) {
        case GET_MTN_DATA_PLAN_REQUEST:
            return { ...state, loading: true };

        case GET_MTN_DATA_PLAN_SUCCESS:
            return { ...state, loading: false, mtnDataPlans: action.payload };
        case GET_MTN_DATA_PLAN_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getAirtelDataReducer = (state = initialAirtelDataState, action) => {
    switch (action.type) {
        case GET_AIRTEL_DATA_PLAN_REQUEST:
            return { ...state, loading: true };

        case GET_AIRTEL_DATA_PLAN_SUCCESS:
            return { ...state, loading: false, airtelDataPlans: action.payload };
        case GET_AIRTEL_DATA_PLAN_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getAirtelcgDataReducer = (state = initialAirtelCgDataState, action) => {
    switch (action.type) {
        case GET_AIRTEL_CG_DATA_PLAN_REQUEST:
            return { ...state, loading: true };

        case GET_AIRTEL_CG_DATA_PLAN_SUCCESS:
            return { ...state, loading: false, airtelCgDataPlans: action.payload };
        case GET_AIRTEL_CG_DATA_PLAN_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// login user reducer starts here

export const loginUserReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return { ...state, loading: true };

        case LOGIN_USER_SUCCESS: {
            Cookies.set('user', action?.payload?.jwt, { expires: 1 });
            Cookies.set('user_id', action?.payload?.user?.id, { expires: 1 });

            window.location.replace('/');
            return { ...state, loading: false, user: action.payload.user };
        }
        case LOGIN_USER_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

//get a user details reducers

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case GET_LOGGED_IN_USER_REQUEST:
            return { ...state, loading: true };

        case GET_LOGGED_IN_USER_SUCCESS: {
            return { ...state, loading: false, user: action.payload };
        }
        case GET_LOGGED_IN_USER_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// update user profile reducers

export const userUpdateReducer = (state = initialUserUpdate, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return { ...state, Update_user_loading: true };

        case UPDATE_USER_SUCCESS: {
            return { ...state, Update_user_loading: false, user: action.payload };
        }
        case UPDATE_USER_FAIL:
            return { ...state, Update_user_loading: false, error: action.payload };

        default:
            return state;
    }
};

//logout user reducers starts her
export const logoutReducer = (state = initialLogoutState, action) => {
    switch (action.type) {
        case LOGOUT_USER_REQUEST:
            return { ...state, loading: true };

        case LOGOUT_USER_SUCCESS:
            Cookies.remove('user');
            Cookies.remove('user_id');
            window.location.replace('/pages/login');

            return { ...state, loading: false, user: action.payload };

        case LOGOUT_USER_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

//RESET PASSWORD REDUCER
export const resetPasswordReducer = (state = initialresetState, action) => {
    switch (action.type) {
        case RESET_PASSWORD_REQUEST:
            return { ...state, loading: true };

        case RESET_PASSWORD_SUCCESS: {
            Cookies.set('user', action?.payload?.jwt, { expires: 1 });
            Cookies.set('user_id', action?.payload?.user?.id, { expires: 1 });
            window.location.replace('/');
            return { ...state, loading: false };
        }
        case RESET_PASSWORD_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
//forget pin reducer
export const forgetPinReducer = (state = initialPinResetState, action) => {
    switch (action.type) {
        case FORGET_PIN_REQUEST:
            return { ...state, pin_reset_loading: true };

        case FORGET_PIN_SUCCESS: {
            return { ...state, pin_reset_loading: false };
        }
        case FORGET_PIN_FAIL:
            return { ...state, pin_reset_loading: false, error: action.payload };

        default:
            return state;
    }
};

//FORGET PASSWORD REDUCER
export const forgetPasswordReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case FORGET_PASSWORD_REQUEST:
            return { ...state, loading: true };

        case FORGET_PASSWORD_SUCCESS: {
            return { ...state, loading: false };
        }
        case FORGET_PASSWORD_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// Register user reducers

export const registerUserReducer = (state = initialRegisterState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return { ...state, loading: true };

        case REGISTER_USER_SUCCESS: {
            Cookies.set('user', action?.payload?.jwt, { expires: 1 });
            Cookies.set('user_id', action?.payload?.user?.id, { expires: 1 });

            window.location.replace('/');

            return { ...state, loading: false, user: action.payload.user };
        }
        case REGISTER_USER_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// airtime order reducers

export const airtimeOrderReducer = (state = initialAirtimeOrderState, action) => {
    switch (action.type) {
        case BUY_AIRTIME_REQUEST:
            return { ...state, loading: true };

        case BUY_AIRTIME_SUCCESS:
            return { ...state, loading: false, airtime: action.payload };
        case BUY_AIRTIME_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// sell airtie reducers
export const sellAirtimeReducer = (state = initialSellAirtimeState, action) => {
    switch (action.type) {
        case SELL_AIRTIME_REQUEST:
            return { ...state, airtimeLoading: true };

        case SELL_AIRTIME_SUCCESS:
            return { ...state, airtimeLoading: false, airtime: action.payload };
        case SELL_AIRTIME_FAIL:
            return { ...state, airtimeLoading: false, error: action.payload };

        default:
            return state;
    }
};

// Data order reducers
export const dataOrderReducer = (state = initialDataOrderState, action) => {
    switch (action.type) {
        case BUY_DATA_REQUEST:
            return { ...state, loading: true };

        case BUY_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case BUY_DATA_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const dataGiftingOrderReducer = (state = initialDataGiftingOrderState, action) => {
    switch (action.type) {
        case GIFT_DATA_REQUEST:
            return { ...state, dataGiftloading: true };

        case GIFT_DATA_SUCCESS:
            return { ...state, dataGiftloading: false, dataGiftData: action.payload };
        case GIFT_DATA_FAIL:
            return { ...state, dataGiftloading: false, dataGiftError: action.payload };

        default:
            return state;
    }
};

export const CgOrderReducer = (state = initialCgOrderState, action) => {
    switch (action.type) {
        case BUY_CG_DATA_REQUEST:
            return { ...state, Cgdataloading: true };

        case BUY_CG_DATA_SUCCESS:
            return { ...state, Cgdataloading: false, CgData: action.payload };
        case BUY_CG_DATA_FAIL:
            return { ...state, Cgdataloading: false, CgdataError: action.payload };

        default:
            return state;
    }
};

export const monnifyFundingReducer = (state = initialFundingState, action) => {
    switch (action.type) {
        case FUND_WALLET_BY_MONNIFY_REQUEST:
            return { ...state, loading: true };

        case FUND_WALLET_BY_MONNIFY_SUCCESS:
            window.open(action.payload.response.data.link || action.payload.response.data.authorizationUrl, '_blank');
            return { ...state, loading: false, paymentStatus: action.payload.message };
        case FUND_WALLET_BY_MONNIFY_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// VTPASS REDUCERS
export const getVariationsReducer = (state = initialVariationsState, action) => {
    switch (action.type) {
        case GET_VARIANTS_REQUEST:
            return { ...state, loading: true };

        case GET_VARIANTS_SUCCESS:
            return { ...state, loading: false, variations: action.payload };
        case GET_VARIANTS_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const verifyDetailsReducers = (state = verifyDetailsState, action) => {
    switch (action.type) {
        case VERIFY_DETAILS_REQUEST:
            return { ...state, verifyLoading: true };

        case VERIFY_DETAILS_SUCCESS:
            return { ...state, verifyLoading: false, verifyDetails: action.payload };
        case VERIFY_DETAILS_FAIL:
            return { ...state, verifyLoading: false, error: action.payload };

        default:
            return state;
    }
};

export const verifyMeterReducers = (state = verifyMeterState, action) => {
    switch (action.type) {
        case VERIFY_METER_REQUEST:
            return { ...state, verifyMeterLoading: true };

        case VERIFY_METER_SUCCESS:
            return { ...state, verifyMeterLoading: false, meterVerify: action.payload };
        case VERIFY_METER_FAIL:
            return { ...state, verifyMeterLoading: false, error: action.payload };

        default:
            return state;
    }
};
export const getelectricityProvidersReducer = (state = initialElectriProvidersState, action) => {
    switch (action.type) {
        case GET_ELECTRICITY_PROVIDERS_REQUEST:
            return { ...state, loading: true };

        case GET_ELECTRICITY_PROVIDERS_SUCCESS:
            return { ...state, loading: false, providers: action.payload };
        case GET_ELECTRICITY_PROVIDERS_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const tvCablesPurchase = (state = initialTvCableState, action) => {
    switch (action.type) {
        case BUY_TV_CABLES_REQUEST:
            return { ...state, loading: true };

        case BUY_TV_CABLES_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case BUY_TV_CABLES_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const electricityPurchase = (state = initialElectricityState, action) => {
    switch (action.type) {
        case BUY_ELECTRICITY_REQUEST:
            return { ...state, loading: true };

        case BUY_ELECTRICITY_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case BUY_ELECTRICITY_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
export const examPinPurchase = (state = initialExamPinState, action) => {
    switch (action.type) {
        case BUY_EXAM_PIN_REQUEST:
            return { ...state, loading: true };

        case BUY_EXAM_PIN_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case BUY_EXAM_PIN_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// Transaction history reducer
export const getHistoriesReducer = (state = initialHistoryState, action) => {
    switch (action.type) {
        case GET_TRANSACTION_HISTORY_REQUEST:
            return { ...state, loading: true };

        case GET_TRANSACTION_HISTORY_SUCCESS:
            return { ...state, loading: false, histories: action.payload };
        case GET_TRANSACTION_HISTORY_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getSellAirtimeDetailsReducer = (state = initialAirtimeDetailState, action) => {
    switch (action.type) {
        case GET_SELL_AIRTIME_DETAILS_REQUEST:
            return { ...state, loading: true };

        case GET_SELL_AIRTIME_DETAILS_SUCCESS:
            return { ...state, loading: false, airtimeDetails: action.payload };
        case GET_SELL_AIRTIME_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getBtcDetailsReducer = (state = initialBtcDetailState, action) => {
    switch (action.type) {
        case GET_SELL_AIRTIME_DETAILS_REQUEST:
            return { ...state, loading: true };

        case GET_SELL_AIRTIME_DETAILS_SUCCESS:
            return { ...state, loading: false, btcDetails: action.payload };
        case GET_SELL_AIRTIME_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getNotificationReducer = (state = initialNotificationState, action) => {
    switch (action.type) {
        case GET_NOTIFICATION_REQUEST:
            return { ...state, notificationLoading: true };

        case GET_NOTIFICATION_SUCCESS:
            return { ...state, notificationLoading: false, notification: action.payload };
        case GET_NOTIFICATION_FAIL:
            return { ...state, notificationLoading: false, error: action.payload };

        default:
            return state;
    }
};
