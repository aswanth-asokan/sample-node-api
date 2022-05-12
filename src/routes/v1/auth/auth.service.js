const httpStatus = require('http-status');
const { ROLES } = require('../../../config/roles');
const db = require('../../../models');
const ApiError = require('../../../utils/ApiError');
const { pick, omit } = require('../../../utils/util');

const User = db.user;
const PartnerProfile = db.partner_profile;
const ShipperProfile = db.shipper_profile;

/**
 * @description Register new driver/partner
 * @param {JSON} body - contains request data
 * @returns {JSON} created user
 */
const registerPartner = async (body) => {
  const userData = pick(body, ['email', 'password']);
  const createdUser = await User.create({ ...userData, user_type: ROLES.PARTNER });
  if (createdUser) {
    const partnerProfileData = omit(body, ['email', 'password']);
    const Profile = await PartnerProfile.create({ ...partnerProfileData, user_id: createdUser.user_id });
    if (!Profile) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Profile not created');
    }
    return {
      user_id: createdUser.user_id,
      email: createdUser.email,
      is_email_verified: createdUser.is_email_verified,
      user_type: createdUser.user_type,
      first_name: Profile.first_name,
      last_name: Profile.last_name,
      mobile_number: Profile.mobile_number,
      profile_image: Profile.profile_image,
      city: Profile.city,
      state: Profile.state,
      zip: Profile.zip,
    };
  }
  throw new ApiError(httpStatus.BAD_REQUEST, 'User not created');
};

/**
 * @description Register new shipper
 * @param {JSON} body - contains request data
 * @returns {JSON} created shipper
 */
const registerShipper = async (body) => {
  const userData = pick(body, ['email', 'password']);
  const createdUser = await User.create({ ...userData, user_type: ROLES.SHIPPER });
  if (createdUser) {
    const shipperProfileData = omit(body, ['email', 'password']);
    const Profile = await ShipperProfile.create({ ...shipperProfileData, user_id: createdUser.user_id });
    if (!Profile) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Profile not created');
    }
    return {
      user_id: createdUser.user_id,
      email: createdUser.email,
      is_email_verified: createdUser.is_email_verified,
      user_type: createdUser.user_type,
      first_name: Profile.first_name,
      last_name: Profile.last_name,
      mobile_number: Profile.mobile_number,
      is_business: Profile.is_business,
      business_type_id: Profile.business_type_id,
      business_name: Profile.business_name,
    };
  }
  throw new ApiError(httpStatus.BAD_REQUEST, 'User not created');
};

module.exports = {
  registerPartner,
  registerShipper,
};
