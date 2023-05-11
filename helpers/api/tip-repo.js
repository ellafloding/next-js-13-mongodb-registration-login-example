import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
const Tip = db.Tip;

export const tipRepo = {
    create,

};

async function create(params) {

    const tip = new Tip(params);

    // save user
    await tip.save();
}

