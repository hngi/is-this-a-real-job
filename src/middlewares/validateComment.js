import Joi from '@hapi/joi';
import { joiValidator } from '../helpers/joiValidator';
import { respondWithWarning } from '../helpers/responseHandler';

/**
 * validate comment entry
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateCommentData = (req, res, next) => {
    const commentSchema = Joi.object().keys({
        body: Joi.string()
            .required()
            .trim(),
        userId: Joi.string().required(),
    });

    const errors = joiValidator(req.body, commentSchema);

    if (!errors) {
        return next();
    }
    return respondWithWarning(res, 400, 'Bad Input', errors);
};
