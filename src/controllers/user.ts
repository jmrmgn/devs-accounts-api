import { Request } from 'express';

import User from '../models/user';

export const updateProfile = async (request: Request) => {
  try {
    const user: any = request.user;
    const { firstname, lastname } = request.body;

    const userDetails = await User.findById(user?._id);

    if (userDetails) {
      userDetails.profile.first_name = firstname;
      userDetails.profile.last_name = lastname;
    }

    await userDetails.save();

    request.responseData = {
      _id: userDetails?._id,
      profile: userDetails?.profile,
    };
  } catch (error: any) {
    throw error;
  }
};
