import {homepage,findStudents, findStudentPost,addStudentPost } from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.get('/find-students', findStudents);
    app.post('/find-students-post',  findStudentPost);
    app.post('/add-students', addStudentPost);

}

export default router;