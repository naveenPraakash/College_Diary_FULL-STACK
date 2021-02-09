import express from 'express';
const router = express.Router();
import { getPosts, createPost, updatePost, deletePost, likePost, deleteAll } from '../controllers/posts.js';

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost );
router.delete('/:id', deletePost );
router.patch('/:id/likePost', likePost);
router.delete('/', deleteAll);
export default router;