import { apiHandler } from 'helpers/api';
import {tipRepo} from "../../../helpers/api/tip-repo";


export default apiHandler({
    post: tip
});

async function tip(req, res) {
    await tipRepo.create(req.body);
    return res.status(200).json({});
}