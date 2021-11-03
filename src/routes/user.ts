import { Router, Request, Response, NextFunction } from 'express';

import { isAuthenticated } from '../middlewares/auth';
import { updateProfile } from '../controllers/user';

const router = Router();

router.put(
  '/update',
  isAuthenticated('member'),
  (request: Request, response: Response, next: NextFunction) => {
    updateProfile(request).then(next).catch(next);
  }
);

export default router;
